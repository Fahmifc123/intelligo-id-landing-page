#!/usr/bin/env node
// Usage: node scripts/split-alumni-logos.cjs <input-image> <output-dir>
// Requires: npm i sharp
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const input = process.argv[2] || 'public/assets/logos/alumni/composite.png';
const outDir = process.argv[3] || 'public/assets/logos/alumni';
if (!fs.existsSync(input)) {
  console.error('Input image not found:', input);
  process.exit(1);
}
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

(async () => {
  const img = sharp(input);
  const { width, height } = await img.metadata();
  console.log('Image size:', width, 'x', height);

  // Convert to grayscale and get raw buffer to detect non-white pixels
  const greyscale = await img.clone().resize(width, height).greyscale().raw().toBuffer();

  // Helper to check if a column or row contains non-white pixels
  const isColumnNonWhite = (x) => {
    for (let y = 0; y < height; y++) {
      const idx = y * width + x;
      const val = greyscale[idx]; // 0..255 (0 black, 255 white)
      if (val < 250) return true; // some ink present
    }
    return false;
  };

  const isRowNonWhite = (y) => {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const val = greyscale[idx];
      if (val < 250) return true;
    }
    return false;
  };

  // Find horizontal bands (rows ranges) where content exists
  const rowHas = new Array(height).fill(false);
  for (let y = 0; y < height; y++) rowHas[y] = isRowNonWhite(y);
  const rowBands = [];
  let inBand = false;
  let start = 0;
  for (let y = 0; y < height; y++) {
    if (rowHas[y] && !inBand) { inBand = true; start = y; }
    if (!rowHas[y] && inBand) { inBand = false; rowBands.push([start, y-1]); }
  }
  if (inBand) rowBands.push([start, height-1]);

  console.log('Detected row bands:', rowBands);

  const savedFiles = [];
  let counter = 1;
  for (const [y1, y2] of rowBands) {
    // For each band, find vertical groups
    const bandHeight = y2 - y1 + 1;
    const colHas = new Array(width).fill(false);
    for (let x = 0; x < width; x++) {
      for (let y = y1; y <= y2; y++) {
        const idx = y * width + x;
        if (greyscale[idx] < 250) { colHas[x] = true; break; }
      }
    }
    // Group contiguous columns
    let inCol = false;
    let cx1 = 0;
    const colGroups = [];
    for (let x = 0; x < width; x++) {
      if (colHas[x] && !inCol) { inCol = true; cx1 = x; }
      if (!colHas[x] && inCol) { inCol = false; colGroups.push([cx1, x-1]); }
    }
    if (inCol) colGroups.push([cx1, width-1]);

    // filter out very small groups (noise)
    const filtered = colGroups.filter(([a,b]) => (b-a) > 20);

    for (const [x1,x2] of filtered) {
      const pad = 8;
      const cropX1 = Math.max(0, x1 - pad);
      const cropX2 = Math.min(width-1, x2 + pad);
      const cropY1 = Math.max(0, y1 - pad);
      const cropY2 = Math.min(height-1, y2 + pad);
      const w = cropX2 - cropX1 + 1;
      const h = cropY2 - cropY1 + 1;
      const outname = `alumni-${String(counter).padStart(2,'0')}.png`;
      const outPath = path.join(outDir, outname);

      // Crop and flatten on white background to guarantee white bg
      await img.clone().extract({ left: cropX1, top: cropY1, width: w, height: h }).flatten({ background: { r:255, g:255, b:255 } }).resize({ width: Math.min(600, w*2) }).toFile(outPath);
      console.log('Saved', outPath);
      savedFiles.push(`/assets/logos/alumni/${outname}`);
      counter++;
    }
  }

  if (savedFiles.length === 0) {
    console.error('No logos detected. Try increasing image contrast or manually cropping.');
    process.exit(2);
  }

  // Write manifest into src/data to be imported by code
  const manifestPath = path.join(process.cwd(), 'src', 'data', 'alumniLogos.json');
  fs.writeFileSync(manifestPath, JSON.stringify(savedFiles, null, 2));
  console.log('Wrote manifest to', manifestPath);

  console.log('Done. Extracted', savedFiles.length, 'logos.');
})();