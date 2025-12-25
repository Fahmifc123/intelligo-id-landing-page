#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const input = process.argv[2] || 'src/data/trainers.json';
const assetsDir = process.argv[3] || 'public/assets/trainers';

if (!fs.existsSync(input)) {
  console.error('Input file not found:', input);
  process.exit(1);
}

if (!fs.existsSync(assetsDir)) {
  console.error('Assets dir not found:', assetsDir);
  process.exit(1);
}

const trainers = JSON.parse(fs.readFileSync(input, 'utf8'));
const files = fs.readdirSync(assetsDir);

let updated = 0;

for (let i = 0; i < trainers.length; i++) {
  const t = trainers[i];
  const safeName = (t.name || `trainer-${i}`).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const found = files.find(f => f.toLowerCase().startsWith(safeName));
  if (found) {
    const localPath = `/assets/trainers/${found}`;
    if (t.photoUrl !== localPath) {
      t.photoUrl = localPath;
      updated++;
      console.log('Linked', t.name, '->', localPath);
    }
  }
}

if (updated > 0) {
  fs.writeFileSync(input, JSON.stringify(trainers, null, 2));
  console.log('Updated', input, 'with', updated, 'local links');
} else {
  console.log('No updates needed');
}
