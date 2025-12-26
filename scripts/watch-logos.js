#!/usr/bin/env node

/**
 * Watch Logo Folders and Auto-Generate JSON
 * 
 * Script ini akan:
 * 1. Monitor folder public/assets/logo-alumni untuk perubahan file
 * 2. Monitor folder public/assets/logo-trainer untuk perubahan file
 * 3. Otomatis run generate-logos-json.js setiap ada file baru/dihapus/diubah
 * 
 * Usage:
 *   npm run watch-logos
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const alumniFolder = path.join(__dirname, '../public/assets/logo-alumni');
const trainerFolder = path.join(__dirname, '../public/assets/logo-trainer');
const generateScript = path.join(__dirname, 'generate-logos-json.js');

// Color codes untuk console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

function log(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

function runGenerateScript() {
  log(colors.blue, '\n📝 Running generate-logos-json.js...');
  
  const child = spawn('node', [generateScript], {
    stdio: 'inherit',
    shell: true
  });

  child.on('close', (code) => {
    if (code === 0) {
      log(colors.green, `✅ JSON files updated at ${new Date().toLocaleTimeString()}`);
    } else {
      log(colors.red, `❌ Error generating JSON (exit code: ${code})`);
    }
    log(colors.yellow, '👀 Watching for changes...\n');
  });
}

// Setup watchers
function setupWatchers() {
  log(colors.blue, '👀 Starting logo folder watcher...\n');
  
  const watchOptions = {
    persistent: true,
    recursive: false
  };

  // Watch alumni folder
  fs.watch(alumniFolder, watchOptions, (eventType, filename) => {
    if (filename && !['.gitkeep', '.DS_Store'].includes(filename)) {
      log(colors.yellow, `\n📦 Detected change in logo-alumni: ${eventType} - ${filename}`);
      runGenerateScript();
    }
  });

  // Watch trainer folder
  fs.watch(trainerFolder, watchOptions, (eventType, filename) => {
    if (filename && !['.gitkeep', '.DS_Store'].includes(filename)) {
      log(colors.yellow, `\n📦 Detected change in logo-trainer: ${eventType} - ${filename}`);
      runGenerateScript();
    }
  });

  log(colors.green, `✅ Watchers initialized!`);
  log(colors.green, `   📁 Watching: ${alumniFolder}`);
  log(colors.green, `   📁 Watching: ${trainerFolder}`);
  log(colors.yellow, '👀 Waiting for file changes...\n');
}

// Error handling
process.on('SIGINT', () => {
  log(colors.yellow, '\n\n👋 Watcher stopped');
  process.exit(0);
});

// Run initial generation
log(colors.blue, '🚀 Initial JSON generation...');
runGenerateScript();

// Setup watchers
setTimeout(setupWatchers, 2000);
