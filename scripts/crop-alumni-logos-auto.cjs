#!/usr/bin/env node
/**
 * Automatic logo cropper with edge detection
 * Crops individual logos from a composite image and saves them as separate files
 * 
 * Usage: node scripts/crop-alumni-logos-auto.cjs <input-image> <output-dir>
 * Example: node scripts/crop-alumni-logos-auto.cjs public/alumni-logos.png src/assets/logos/alumni
 */

const fs = require('fs');
const path = require('path');

async function autoCropLogos() {
  try {
    const sharp = require('sharp');
    
    const inputFile = process.argv[2] || 'public/alumni-logos.png';
    const outputDir = process.argv[3] || 'src/assets/logos/alumni';
    
    console.log(`\n🎯 Auto Logo Cropper`);
    console.log(`📂 Input: ${inputFile}`);
    console.log(`📂 Output: ${outputDir}`);
    
    // Check if input file exists
    if (!fs.existsSync(inputFile)) {
      console.error(`\n❌ Error: Input image not found: ${inputFile}`);
      console.log('\nUsage: node scripts/crop-alumni-logos-auto.cjs <input-image> <output-dir>');
      process.exit(1);
    }
    
    // Create output directory
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
      console.log(`✓ Created directory: ${outputDir}`);
    }
    
    // Load image metadata
    const image = sharp(inputFile);
    const metadata = await image.metadata();
    const { width: imgWidth, height: imgHeight } = metadata;
    
    console.log(`\n📊 Image size: ${imgWidth}x${imgHeight}px`);
    
    // Convert to grayscale for edge detection
    const grayBuffer = await image.clone()
      .greyscale()
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    const pixels = grayBuffer.data;
    const { width: w, height: h, channels } = grayBuffer.info;
    
    console.log(`\n🔍 Analyzing image...`);
    
    // Detect columns with content (vertical separations)
    const colWithContent = new Array(w).fill(false);
    for (let x = 0; x < w; x++) {
      for (let y = 0; y < h; y++) {
        const pixelValue = pixels[(y * w + x) * channels];
        if (pixelValue < 240) { // Not white
          colWithContent[x] = true;
          break;
        }
      }
    }
    
    // Find column ranges (logos)
    const columnRanges = [];
    let inContent = false;
    let startX = 0;
    
    for (let x = 0; x < w; x++) {
      if (colWithContent[x] && !inContent) {
        startX = x;
        inContent = true;
      } else if (!colWithContent[x] && inContent) {
        if (x - startX > 20) { // Minimum logo width
          columnRanges.push({ left: startX, right: x, width: x - startX });
        }
        inContent = false;
      }
    }
    if (inContent) {
      columnRanges.push({ left: startX, right: w, width: w - startX });
    }
    
    // Detect rows with content (horizontal separations)
    const rowWithContent = new Array(h).fill(false);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const pixelValue = pixels[(y * w + x) * channels];
        if (pixelValue < 240) { // Not white
          rowWithContent[y] = true;
          break;
        }
      }
    }
    
    // Find row ranges (rows of logos)
    const rowRanges = [];
    inContent = false;
    let startY = 0;
    
    for (let y = 0; y < h; y++) {
      if (rowWithContent[y] && !inContent) {
        startY = y;
        inContent = true;
      } else if (!rowWithContent[y] && inContent) {
        if (y - startY > 10) { // Minimum logo height
          rowRanges.push({ top: startY, bottom: y, height: y - startY });
        }
        inContent = false;
      }
    }
    if (inContent) {
      rowRanges.push({ top: startY, bottom: h, height: h - startY });
    }
    
    console.log(`✓ Detected ${columnRanges.length} logo columns`);
    console.log(`✓ Detected ${rowRanges.length} logo rows`);
    
    // Crop and save logos
    console.log(`\n🎨 Cropping logos...`);
    let count = 0;
    
    for (let rowIdx = 0; rowIdx < rowRanges.length; rowIdx++) {
      const row = rowRanges[rowIdx];
      
      for (let colIdx = 0; colIdx < columnRanges.length; colIdx++) {
        const col = columnRanges[colIdx];
        
        // Add padding
        const padding = 10;
        const left = Math.max(0, col.left - padding);
        const top = Math.max(0, row.top - padding);
        const width = Math.min(imgWidth - left, col.width + padding * 2);
        const height = Math.min(imgHeight - top, row.height + padding * 2);
        
        // Skip very small logos
        if (width < 30 || height < 15) continue;
        
        const logoNum = count + 1;
        const filename = `logo-${logoNum.toString().padStart(2, '0')}.png`;
        const filepath = path.join(outputDir, filename);
        
        // Crop and resize to profile size
        await sharp(inputFile)
          .extract({ left, top, width, height })
          .resize(200, 100, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
          .png()
          .toFile(filepath);
        
        console.log(`  ✓ ${filename} (${width}x${height}px at ${left},${top})`);
        count++;
      }
    }
    
    console.log(`\n✅ Successfully cropped ${count} logos to: ${outputDir}`);
    console.log('\n📝 Next steps:');
    console.log('1. Import these logos in your CompanyLogos.tsx');
    console.log('2. Or reference them via src in LogoCarousel');
    console.log('3. Rename files as needed (e.g., logo-01.png → indosat.png)');
    
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      console.error('\n❌ Error: sharp module not found');
      console.log('\nInstall it with:');
      console.log('  npm install sharp');
    } else {
      console.error('\n❌ Error:', error.message);
    }
    process.exit(1);
  }
}

autoCropLogos();
