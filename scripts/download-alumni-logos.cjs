#!/usr/bin/env node
/**
 * Download Alumni Company Logos
 * Automatically downloads logos for all alumni companies
 * 
 * Usage: node scripts/download-alumni-logos.cjs
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = 'src/assets/logos/alumni';

// Alumni companies with logo URLs
const companies = [
  { name: 'indosat', company: 'Indosat', url: 'https://logo.clearbit.com/indosat.co.id' },
  { name: 'telkom', company: 'Telkom Indonesia', url: 'https://logo.clearbit.com/telkom.co.id' },
  { name: 'ruangguru', company: 'Ruang Guru', url: 'https://logo.clearbit.com/ruangguru.com' },
  { name: 'pos', company: 'POS Indonesia', url: 'https://logo.clearbit.com/posindonesia.co.id' },
  { name: 'intelligo', company: 'Intelligo.ID', url: 'https://logo.clearbit.com/intelligo.id' },
  { name: 'bri', company: 'BRI', url: 'https://logo.clearbit.com/bri.co.id' },
  { name: 'tiketcom', company: 'Tiket.com', url: 'https://logo.clearbit.com/tiket.com' },
  { name: 'seabank', company: 'SeaBank', url: 'https://logo.clearbit.com/seabank.id' },
  { name: 'astra', company: 'Astra', url: 'https://logo.clearbit.com/astra.co.id' },
];

console.log('\n╔════════════════════════════════════════════════════════════════╗');
console.log('║         🎯 Download Alumni Company Logos                     ║');
console.log('╚════════════════════════════════════════════════════════════════╝\n');

// Create output directory
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`✓ Created directory: ${OUTPUT_DIR}\n`);
}

let downloaded = 0;
let failed = 0;

/**
 * Download a file from URL
 */
function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(OUTPUT_DIR, filename);
    const file = fs.createWriteStream(filepath);

    const request = https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlink(filepath, () => {});
        downloadFile(response.headers.location, filename).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        file.close();
        fs.unlink(filepath, () => {});
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    });

    request.on('error', (err) => {
      file.close();
      fs.unlink(filepath, () => {});
      reject(err);
    });

    file.on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

/**
 * Download all logos
 */
async function downloadAllLogos() {
  console.log('📥 Downloading logos...\n');

  for (const company of companies) {
    const filename = `${company.name}.png`;
    try {
      await downloadFile(company.url, filename);
      console.log(`  ✓ ${company.company.padEnd(25)} → ${filename}`);
      downloaded++;
    } catch (error) {
      console.log(`  ✗ ${company.company.padEnd(25)} → Error: ${error.message}`);
      failed++;
    }
  }

  console.log(`\n═════════════════════════════════════════════════════════════\n`);
  console.log(`📊 Results:`);
  console.log(`   Downloaded: ${downloaded}/${companies.length}`);
  if (failed > 0) {
    console.log(`   Failed: ${failed}`);
  }
  console.log(`\n📁 Location: ${OUTPUT_DIR}/`);
  console.log(`\n✨ Next Steps:`);
  console.log(`   1. Review logos in: src/assets/logos/alumni/`);
  console.log(`   2. Resize/optimize if needed`);
  console.log(`   3. Update TestimonialSection to use these logos\n`);
}

downloadAllLogos().catch((error) => {
  console.error('\n❌ Error:', error.message);
  process.exit(1);
});
