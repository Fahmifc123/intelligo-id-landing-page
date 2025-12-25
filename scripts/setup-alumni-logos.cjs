#!/usr/bin/env node
/**
 * Alumni Logos Setup Script
 * 
 * This script helps you:
 * 1. Place your composite alumni logos image in public folder
 * 2. Automatically crop individual logos
 * 3. Organize them in src/assets/logos/alumni/
 * 4. Update the configuration
 * 
 * Usage:
 *   node scripts/setup-alumni-logos.cjs
 * 
 * Steps:
 * 1. Save your alumni logos image as: public/alumni-logos-composite.png
 * 2. Run this script
 * 3. Logos will be automatically cropped and saved
 */

const fs = require('fs');
const path = require('path');

const COMPOSITE_IMAGE = 'public/alumni-logos-composite.png';
const OUTPUT_DIR = 'src/assets/logos/alumni';

console.log('\n╔════════════════════════════════════════════════════════════════╗');
console.log('║          🎯 Alumni Logos Setup Script                          ║');
console.log('╚════════════════════════════════════════════════════════════════╝\n');

// Step 1: Check if composite image exists
if (!fs.existsSync(COMPOSITE_IMAGE)) {
  console.log('❌ ERROR: Composite image not found!\n');
  console.log('📝 SETUP INSTRUCTIONS:');
  console.log('─────────────────────────────────────────────────────────────');
  console.log('\n1️⃣  Prepare your image:');
  console.log('   • Take the alumni logos image');
  console.log('   • Save it as: public/alumni-logos-composite.png');
  console.log('\n2️⃣  Run this script:');
  console.log('   $ node scripts/setup-alumni-logos.cjs\n');
  console.log('3️⃣  The script will:');
  console.log('   ✓ Detect individual logos');
  console.log('   ✓ Crop each logo automatically');
  console.log('   ✓ Save to: src/assets/logos/alumni/');
  console.log('   ✓ Create config file');
  console.log('\n📍 Expected image location:');
  console.log(`   ${path.resolve(COMPOSITE_IMAGE)}\n`);
  process.exit(0);
}

// Step 2: Check if sharp is installed
try {
  require('sharp');
  console.log('✓ sharp module found');
} catch (e) {
  console.log('\n❌ ERROR: sharp module not installed\n');
  console.log('📦 Install it with:');
  console.log('   npm install sharp\n');
  console.log('   or\n');
  console.log('   npm install --save-dev sharp\n');
  process.exit(1);
}

// Step 3: Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`✓ Created directory: ${OUTPUT_DIR}`);
}

// Step 4: Process the image
(async () => {
  try {
    const sharp = require('sharp');
    
    console.log('\n🔍 Analyzing composite image...');
    
    // Read image metadata
    const image = sharp(COMPOSITE_IMAGE);
    const metadata = await image.metadata();
    const { width, height } = metadata;
    
    console.log(`✓ Image size: ${width}x${height}px`);
    
    // Convert to grayscale for analysis
    const grayBuffer = await image.clone()
      .greyscale()
      .raw()
      .toBuffer({ resolveWithObject: true });
    
    const pixels = grayBuffer.data;
    const { width: w, height: h, channels } = grayBuffer.info;
    
    console.log('🎨 Detecting logos...\n');
    
    // Detect columns with content
    const colWithContent = new Array(w).fill(false);
    for (let x = 0; x < w; x++) {
      for (let y = 0; y < h; y++) {
        const pixelValue = pixels[(y * w + x) * channels];
        if (pixelValue < 240) {
          colWithContent[x] = true;
          break;
        }
      }
    }
    
    // Find column ranges
    const columnRanges = [];
    let inContent = false;
    let startX = 0;
    
    for (let x = 0; x < w; x++) {
      if (colWithContent[x] && !inContent) {
        startX = x;
        inContent = true;
      } else if (!colWithContent[x] && inContent) {
        if (x - startX > 20) {
          columnRanges.push({ left: startX, right: x, width: x - startX });
        }
        inContent = false;
      }
    }
    if (inContent) {
      columnRanges.push({ left: startX, right: w, width: w - startX });
    }
    
    // Detect rows with content
    const rowWithContent = new Array(h).fill(false);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const pixelValue = pixels[(y * w + x) * channels];
        if (pixelValue < 240) {
          rowWithContent[y] = true;
          break;
        }
      }
    }
    
    // Find row ranges
    const rowRanges = [];
    inContent = false;
    let startY = 0;
    
    for (let y = 0; y < h; y++) {
      if (rowWithContent[y] && !inContent) {
        startY = y;
        inContent = true;
      } else if (!rowWithContent[y] && inContent) {
        if (y - startY > 10) {
          rowRanges.push({ top: startY, bottom: y, height: y - startY });
        }
        inContent = false;
      }
    }
    if (inContent) {
      rowRanges.push({ top: startY, bottom: h, height: h - startY });
    }
    
    console.log(`✓ Found ${columnRanges.length} columns and ${rowRanges.length} rows\n`);
    
    // Crop and save logos
    console.log('✂️  Cropping logos:\n');
    let count = 0;
    const logoData = [];
    
    for (let rowIdx = 0; rowIdx < rowRanges.length; rowIdx++) {
      const row = rowRanges[rowIdx];
      
      for (let colIdx = 0; colIdx < columnRanges.length; colIdx++) {
        const col = columnRanges[colIdx];
        
        // Add padding
        const padding = 10;
        const left = Math.max(0, col.left - padding);
        const top = Math.max(0, row.top - padding);
        const cropWidth = Math.min(width - left, col.width + padding * 2);
        const cropHeight = Math.min(height - top, row.height + padding * 2);
        
        // Skip very small logos
        if (cropWidth < 30 || cropHeight < 15) continue;
        
        const logoNum = count + 1;
        const fileName = `logo-${logoNum.toString().padStart(2, '0')}.png`;
        const filePath = path.join(OUTPUT_DIR, fileName);
        
        // Crop and resize
        await sharp(COMPOSITE_IMAGE)
          .extract({ left, top, width: cropWidth, height: cropHeight })
          .resize(200, 100, { 
            fit: 'contain', 
            background: { r: 255, g: 255, b: 255, alpha: 1 } 
          })
          .png()
          .toFile(filePath);
        
        console.log(`  ✓ ${fileName}`);
        logoData.push({ number: logoNum, fileName, width: cropWidth, height: cropHeight });
        count++;
      }
    }
    
    console.log(`\n✅ Successfully cropped ${count} logos!\n`);
    
    // Create index file
    const indexPath = path.join(OUTPUT_DIR, 'index.ts');
    const indexContent = `// Auto-generated alumni logos index
export const alumniLogos = [
${logoData.map(l => `  './logo-${l.number.toString().padStart(2, '0')}.png',`).join('\n')}
];

export const alumniLogoNames = [
${logoData.map((l, idx) => `  'Alumni ${idx + 1}',`).join('\n')}
];

export default alumniLogos;
`;
    
    fs.writeFileSync(indexPath, indexContent);
    console.log('📝 Created index file: src/assets/logos/alumni/index.ts\n');
    
    // Summary
    console.log('═════════════════════════════════════════════════════════════\n');
    console.log('📊 SUMMARY:');
    console.log(`   • Cropped: ${count} logos`);
    console.log(`   • Output: ${OUTPUT_DIR}/`);
    console.log(`   • Index: ${OUTPUT_DIR}/index.ts\n`);
    
    console.log('📝 NEXT STEPS:');
    console.log('   1. Review the cropped logos in: src/assets/logos/alumni/');
    console.log('   2. Rename files if needed (e.g., logo-01.png → indosat.png)');
    console.log('   3. Update TestimonialSection.tsx to use these images');
    console.log('   4. Or use the index.ts for easy importing\n');
    
    console.log('💡 USAGE IN COMPONENTS:');
    console.log('   import alumniLogos from "@/assets/logos/alumni/index.ts";\n');
    
  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    if (error.code === 'MODULE_NOT_FOUND') {
      console.log('\nInstall sharp with: npm install sharp');
    }
    process.exit(1);
  }
})();
