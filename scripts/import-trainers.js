#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

function toDirectDriveUrl(url) {
  if (!url) return '';
  const driveIdRegexes = [
    /\/d\/([a-zA-Z0-9_-]{10,})/, // /d/FILE_ID/
    /id=([a-zA-Z0-9_-]{10,})/, // id=FILE_ID
    /youtu\.be\/([\w-]{11})/, // not drive but keep
  ];

  for (const r of driveIdRegexes) {
    const m = url.match(r);
    if (m && m[1]) {
      return `https://drive.google.com/uc?export=view&id=${m[1]}`;
    }
  }

  // If it already looks like a direct image link, return as-is
  if (url.startsWith('http')) return url;

  return url;
}

const input = process.argv[2];
const out = process.argv[3] || 'src/data/trainers.json';

if (!input) {
  console.error('Usage: node scripts/import-trainers.js <file.xlsx> [out.json]');
  process.exit(1);
}

const wb = xlsx.readFile(input);
const ws = wb.Sheets[wb.SheetNames[0]];
const rows = xlsx.utils.sheet_to_json(ws, { defval: '' });

const normalized = rows.map((r) => {
  const photoRaw = r.photo || r.photoUrl || r.photo_url || r.Photo || r['Photo URL'] || r['Foto'] || '';
  return {
    name: r.name || r.Name || r.Nama || '',
    role: r.role || r.Role || r.Jabatan || '',
    company: r.company || r.Company || r.Perusahaan || '',
    linkedin: r.linkedin || r.Linkedin || r['LinkedIn'] || '',
    photoUrl: toDirectDriveUrl(photoRaw),
  };
});

fs.writeFileSync(out, JSON.stringify(normalized, null, 2));
console.log('Wrote', out, 'with', normalized.length, 'records');
