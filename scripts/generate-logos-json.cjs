#!/usr/bin/env node

/**
 * Auto-Generate JSON from Logo Folders
 * 
 * Script ini akan:
 * 1. Scan folder public/assets/logo-alumni untuk semua logo files
 * 2. Scan folder public/assets/logo-trainer untuk semua logo files
 * 3. Auto-generate alumni-logos.json dan trainer-logos.json
 * 4. Bisa di-run manual atau otomatis setiap kali ada perubahan
 * 
 * Usage:
 *   npm run generate-logos
 *   node scripts/generate-logos-json.cjs
 */

const fs = require('fs');
const path = require('path');

// Config
const alumniLogosFolder = path.join(__dirname, '../public/assets/logo-alumni');
const trainerLogosFolder = path.join(__dirname, '../public/assets/logo-trainer');
const alumniOutputFile = path.join(__dirname, '../src/data/alumni-logos.json');
const trainerOutputFile = path.join(__dirname, '../src/data/trainer-logos.json');

// Logo extensions to scan
const validExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.avif'];

// Function to convert filename to company name
function filenameToCompanyName(filename) {
  return filename
    .replace(/\.(png|jpg|jpeg|svg|webp|avif)$/i, '') // Remove extension
    .replace(/\.svg$/i, '') // Remove .svg if any
    .replace(/_/g, ' ') // Replace underscores with spaces
    .replace(/([A-Z])/g, ' $1') // Add space before capitals
    .replace(/\d+_compress_/g, '') // Remove compression prefixes
    .replace(/IMG_\d+/g, '') // Remove IMG_ prefixes
    .trim()
    .replace(/\s+/g, ' ') // Clean multiple spaces
    .replace(/^./, str => str.toUpperCase()); // Capitalize first letter
}

// Function to get URL path for logo
function getLogoUrl(filename, type) {
  return `/assets/logo-${type}/${filename}`;
}

// Main function to generate logos JSON
function generateLogosJson(inputFolder, outputFile, type) {
  try {
    // Check if folder exists
    if (!fs.existsSync(inputFolder)) {
      console.error(`❌ Folder not found: ${inputFolder}`);
      return false;
    }

    // Read all files from folder
    const files = fs.readdirSync(inputFolder);

    // Filter only valid logo files
    const logoFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return validExtensions.includes(ext) && !file.startsWith('.');
    });

    // Create logos array
    const logos = logoFiles.map((filename, index) => ({
      id: `logo-${index + 1}`,
      name: filenameToCompanyName(filename),
      logo: getLogoUrl(filename, type),
      link: `#` // User can update this manually
    }));

    // Create JSON structure
    const jsonKey = type === 'alumni' ? 'alumniLogos' : 'trainerLogos';
    const jsonData = {
      [jsonKey]: logos,
      lastUpdated: new Date().toISOString(),
      totalLogos: logos.length,
      note: `This file is auto-generated from public/assets/logo-${type} folder. Edit company names and links manually if needed.`
    };

    // Write to file
    fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2));

    console.log(`✅ Generated: ${path.basename(outputFile)}`);
    console.log(`   📊 Total logos: ${logos.length}`);
    
    return true;

  } catch (error) {
    console.error(`❌ Error generating ${type} logos JSON:`, error.message);
    return false;
  }
}

// Run
console.log('🔍 Scanning logo folders...\n');

const alumniSuccess = generateLogosJson(alumniLogosFolder, alumniOutputFile, 'alumni');
const trainerSuccess = generateLogosJson(trainerLogosFolder, trainerOutputFile, 'trainer');

if (alumniSuccess && trainerSuccess) {
  console.log('\n✅ All logos JSON files generated successfully!');
  process.exit(0);
} else {
  console.error('\n❌ Some files failed to generate');
  process.exit(1);
}
