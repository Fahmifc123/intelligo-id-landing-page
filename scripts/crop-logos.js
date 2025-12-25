#!/usr/bin/env node
/**
 * Script to crop individual logos from a composite image
 * Usage: node scripts/crop-logos.js <input-image> <output-dir>
 * 
 * This script expects an image with logos arranged in rows
 * and will automatically detect and crop each logo
 */

const fs = require('fs');
const path = require('path');

// For this to work, you'll need to install sharp:
// npm install sharp

async function cropLogos() {
  try {
    const sharp = require('sharp');
    
    const inputFile = process.argv[2] || 'public/alumni-logos.png';
    const outputDir = process.argv[3] || 'src/assets/logos/alumni';
    
    if (!fs.existsSync(inputFile)) {
      console.error(`❌ Input image not found: ${inputFile}`);
      console.log('\nUsage: node scripts/crop-logos.js <input-image> <output-dir>');
      console.log('Example: node scripts/crop-logos.js public/alumni-logos.png src/assets/logos/alumni');
      process.exit(1);
    }
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
      console.log(`✓ Created output directory: ${outputDir}`);
    }
    
    // Read and analyze the image
    const metadata = await sharp(inputFile).metadata();
    const { width, height } = metadata;
    
    console.log(`\n📊 Image dimensions: ${width}x${height}px`);
    
    // For a manual approach, you can crop specific regions
    // This is a template - adjust the crop areas based on your actual image
    const logos = [
      { name: 'indosat', left: 0, top: 0, width: 150, height: 40 },
      { name: 'telkom', left: 150, top: 0, width: 150, height: 40 },
      { name: 'ruangguru', left: 300, top: 0, width: 150, height: 40 },
      { name: 'pos-indonesia', left: 450, top: 0, width: 150, height: 40 },
      { name: 'intelligo', left: 600, top: 0, width: 150, height: 40 },
      // Add more logos with their positions...
    ];
    
    console.log('\n📝 To crop logos automatically:');
    console.log('1. This script provides a template for cropping');
    console.log('2. You need to identify each logo\'s position in the composite image');
    console.log('3. Update the logos array with correct coordinates');
    console.log('4. Each logo should be cropped with padding around it');
    console.log('5. Resize to profile size (e.g., 200x200px or 300x150px)');
    
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      console.error('❌ sharp module not found');
      console.log('\nTo use automatic cropping, install sharp:');
      console.log('  npm install sharp');
    } else {
      console.error('Error:', error.message);
    }
  }
}

cropLogos();
