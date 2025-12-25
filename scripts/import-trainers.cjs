#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

function toDirectDriveUrl(url) {
  if (!url) return '';
  const driveIdRegexes = [
    /\/d\/([a-zA-Z0-9_-]{10,})/, // /d/FILE_ID/
    /id=([a-zA-Z0-9_-]{10,})/, // id=FILE_ID
  ];

  for (const r of driveIdRegexes) {
    const m = url.match(r);
    if (m && m[1]) {
      return `https://drive.google.com/uc?export=view&id=${m[1]}`;
    }
  }

  // If it already looks like a direct image link, return as-is
  if (url && url.startsWith('http')) return url;

  return url;
}

const input = process.argv[2];
const out = process.argv[3] || 'src/data/trainers.json';

if (!input) {
  console.error('Usage: node scripts/import-trainers.cjs <file.xlsx|.csv> [out.json]');
  process.exit(1);
}

const wb = xlsx.readFile(input);
const ws = wb.Sheets[wb.SheetNames[0]];
const rows = xlsx.utils.sheet_to_json(ws, { defval: '' });

const normalized = rows.map((r) => {
  // Attempt common header names
  const photoRaw = r.photo || r.photoUrl || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal '] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto'] || r['Upload foto formal/non formal'] || r['Upload foto'] || r['Upload foto '] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto'] || r['Upload foto '] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto'] || r['Upload foto '] || r['Upload foto (formal/non formal)'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'] || r['Upload foto'];
  // Try simpler common keys
  const name = r['Nama Lengkap '] || r['Nama Lengkap'] || r.Name || r['Nama'] || r['Nama Lengkap '] || r['Full Name'] || r.name || '';
  const role = r['Pekerjaan Saat Ini\n*Jika mahasiswa silahkan jawab sedang kuliah'] || r['Pekerjaan Saat Ini'] || r['Pekerjaan Saat Ini '] || r['Pekerjaan Saat Ini\n*Jika mahasiswa silahkan jawab sedang kuliah'] || r.role || r['Pekerjaan Saat Ini'] || r['Pekerjaan Saat Ini\n*Jika mahasiswa silahkan jawab sedang kuliah'] || r['Pekerjaan Saat Ini*Jika mahasiswa silahkan jawab sedang kuliah'] || r['Pekerjaan Saat Ini *Jika mahasiswa silahkan jawab sedang kuliah'] || r['Pekerjaan Saat Ini\n*Jika mahasiswa silahkan jawab sedang kuliah'] || r['Pekerjaan Saat Ini\n*Jika mahasiswa silahkan jawab sedang kuliah'] || r['Pekerjaan Saat Ini\n*Jika mahasiswa silahkan jawab sedang kuliah'] || '';
  const linkedin = r['LinkedIn'] || r['linkedin'] || '';
  const photo = r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal '] || r['Upload foto'] || r['Upload foto (formal/non formal)'] || r['Upload foto formal non formal'] || r['Upload foto formal/non formal'] || r['Upload foto formal/non formal'] || r.photo || '';

  return {
    name: String(name).trim(),
    role: String(role).trim(),
    company: String(r['Pekerjaan Saat Ini'] || r['Pekerjaan Saat Ini '] || r['Pekerjaan Saat Ini\n*Jika mahasiswa silahkan jawab sedang kuliah'] || r.company || ''),
    linkedin: String(linkedin).trim(),
    photoUrl: toDirectDriveUrl(String(photo).trim()),
  };
});

fs.writeFileSync(out, JSON.stringify(normalized, null, 2));
console.log('Wrote', out, 'with', normalized.length, 'records');
