#!/usr/bin/env node
const fs = require('fs');
const input = process.argv[2] || 'src/data/trainers.json';
if (!fs.existsSync(input)) {
  console.error('Input file not found:', input);
  process.exit(1);
}
const trainers = JSON.parse(fs.readFileSync(input, 'utf8'));
let updated = 0;
for (const t of trainers) {
  if (!t.role) continue;
  const originalRole = t.role;
  let role = (t.role || '').toString().trim();
  if (/kuliah/i.test(role)) {
    role = 'Trainer & Freelance';
    t.company = 'Trainer & Freelance';
  } else if (role.includes('\n')) {
    role = role.split('\n')[0].trim();
  }

  if (role !== originalRole) {
    t.role = role;
    updated++;
    console.log('Normalized role for', t.name, '->', t.role);
  }
}

if (updated > 0) {
  fs.writeFileSync(input, JSON.stringify(trainers, null, 2));
  console.log('Wrote', input, 'with', updated, 'role updates');
} else {
  console.log('No role changes needed');
}
