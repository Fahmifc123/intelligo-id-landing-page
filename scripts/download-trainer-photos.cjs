#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const input = process.argv[2] || 'src/data/trainers.json';
const outDir = process.argv[3] || 'public/assets/trainers';

if (!fs.existsSync(input)) {
  console.error('Input file not found:', input);
  process.exit(1);
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const trainers = JSON.parse(fs.readFileSync(input, 'utf8'));

(async () => {
  for (let i = 0; i < trainers.length; i++) {
    const t = trainers[i];
    if (!t.photoUrl) continue;

    // skip if already a local asset
    if (typeof t.photoUrl === 'string' && t.photoUrl.startsWith('/assets/trainers/')) {
      continue;
    }

    try {
      let url = t.photoUrl;

      // Convert common Google Drive share patterns to a direct download link
      if (typeof url === 'string' && url.includes('drive.google.com')) {
        const idMatch = url.match(/(?:id=|\/d\/)([a-zA-Z0-9_-]{10,})/);
        if (idMatch) {
          url = `https://drive.google.com/uc?export=download&id=${idMatch[1]}`;
        }
      }

      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to fetch ${url} - ${res.status}`);

      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('text/html')) {
        // If we pulled an HTML page instead of an image, try download endpoint fallback
        if (typeof t.photoUrl === 'string' && t.photoUrl.includes('drive.google.com')) {
          const idMatch = t.photoUrl.match(/(?:id=|\/d\/)([a-zA-Z0-9_-]{10,})/);
          if (idMatch) {
            const altUrl = `https://drive.google.com/uc?export=download&id=${idMatch[1]}`;
            const altRes = await fetch(altUrl);
            if (altRes.ok && !(altRes.headers.get('content-type') || '').includes('text/html')) {
              // replace with alt response
              const arrayBuffer = await altRes.arrayBuffer();
              const ext = (altRes.headers.get('content-type') || '').includes('png') ? '.png' : '.jpg';
              const safeName = (t.name || `trainer-${i}`).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              const filename = `${safeName}${ext}`;
              const outPath = path.join(outDir, filename);
              fs.writeFileSync(outPath, Buffer.from(arrayBuffer));
              t.photoUrl = `/assets/trainers/${filename}`;
              console.log('Saved', filename);
              continue;
            }
          }
        }

        throw new Error('Fetched content is HTML, not an image');
      }

      let ext = '.jpg';
      if (contentType.includes('png')) ext = '.png';
      else if (contentType.includes('jpeg')) ext = '.jpg';
      else if (contentType.includes('webp')) ext = '.webp';

      const safeName = (t.name || `trainer-${i}`).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const filename = `${safeName}${ext}`;
      const outPath = path.join(outDir, filename);

      const arrayBuffer = await res.arrayBuffer();
      fs.writeFileSync(outPath, Buffer.from(arrayBuffer));

      // Update to public path
      t.photoUrl = `/assets/trainers/${filename}`;
      console.log('Saved', filename);
    } catch (err) {
      console.warn('Could not download for', t.name, err.message);
    }
  }

  fs.writeFileSync(input, JSON.stringify(trainers, null, 2));
  console.log('Updated', input);
})();
