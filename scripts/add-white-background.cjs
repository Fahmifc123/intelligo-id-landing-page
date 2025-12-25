#!/usr/bin/env node
/**
 * Add White Background to Alumni Logos
 * Converts all logo images with transparent backgrounds to white background
 * 
 * Usage: node scripts/add-white-background.cjs
 */

const fs = require('fs');
const path = require('path');

const INPUT_DIR = 'public/assets/logo-alumni';
const OUTPUT_DIR = 'public/assets/logo-alumni';

console.log('\n╔════════════════════════════════════════════════════════════════╗');
console.log('║         🎨 Add White Background to Alumni Logos               ║');
console.log('╚════════════════════════════════════════════════════════════════╝\n');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
  console.log('✓ sharp module found\n');
} catch (e) {
  console.error('\n❌ ERROR: sharp module not installed\n');
  console.log('📦 Install it with:');
  console.log('   npm install sharp\n');
  process.exit(1);
}

/**
 * Process a single image to add white background
 */
async function processImage(inputPath, outputPath, filename) {
  try {
    // Get image metadata to check if it has transparency
    const metadata = await sharp(inputPath).metadata();
    
    // Create image with white background
    await sharp({
      create: {
        width: metadata.width,
        height: metadata.height,
        channels: 3,
        background: { r: 255, g: 255, b: 255 } // White background
      }
    })
    .composite([
      {
        input: inputPath,
        top: 0,
        left: 0
      }
    ])
    .toFormat(metadata.format || 'png')
    .toFile(outputPath);
    
    return true;
  } catch (error) {
    console.error(`  ✗ ${filename}: ${error.message}`);
    return false;
  }
}

/**
 * Process all images in directory
 */
async function processAllImages() {
  if (!fs.existsSync(INPUT_DIR)) {
    console.error(`❌ Input directory not found: ${INPUT_DIR}`);
    process.exit(1);
  }

  console.log(`📂 Processing images from: ${INPUT_DIR}\n`);

  const files = fs.readdirSync(INPUT_DIR);
  const imageFiles = files.filter(f => 
    /\.(png|jpg|jpeg|webp|avif|svg)$/i.test(f)
  );

  console.log(`📊 Found ${imageFiles.length} image files\n`);
  console.log('🎨 Adding white background:\n');

  let processed = 0;
  let failed = 0;

  for (const filename of imageFiles) {
    const inputPath = path.join(INPUT_DIR, filename);
    const outputPath = path.join(OUTPUT_DIR, filename);
    
    try {
      const success = await processImage(inputPath, outputPath, filename);
      if (success) {
        console.log(`  ✓ ${filename.padEnd(50)} → background added`);
        processed++;
      } else {
        failed++;
      }
    } catch (error) {
      console.log(`  ✗ ${filename.padEnd(50)} → Error: ${error.message}`);
      failed++;
    }
  }

  console.log(`\n═════════════════════════════════════════════════════════════\n`);
  console.log(`📊 Results:`);
  console.log(`   Processed: ${processed}/${imageFiles.length}`);
  if (failed > 0) {
    console.log(`   Failed: ${failed}`);
  }
  console.log(`\n✨ White background added to all logo images!`);
  console.log(`📁 Output: ${OUTPUT_DIR}/\n`);
}

processAllImages().catch((error) => {
  console.error('\n❌ Error:', error.message);
  process.exit(1);
});
