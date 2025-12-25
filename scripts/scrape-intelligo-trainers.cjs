#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const DATA_FILE = process.argv[2] || 'src/data/trainers.json';
const OUT_DIR = process.argv[3] || 'public/assets/trainers';

(async () => {
  let browser;
  try {
    if (!fs.existsSync(DATA_FILE)) {
      console.error('Data file not found:', DATA_FILE);
      process.exit(1);
    }

    if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

    // launch with safer flags for CI / restricted environments
    browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const context = await browser.newContext({ acceptDownloads: true });
    const page = await context.newPage();
    page.setDefaultTimeout(60000);

    console.log('Navigating to https://www.intelligo.id/about-us/ ...');
    await page.goto('https://www.intelligo.id/about-us/', { waitUntil: 'networkidle' });

    // Ensure page rendered
    await page.waitForTimeout(2000);

  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  const results = [];

  for (const t of data) {
    const name = t.name;
    if (!name) continue;

    // Try to find an element containing the trainer name (case-insensitive)
    let handle = null;
    const nodeHandle = await page.evaluateHandle((nm) => {
      const candidates = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6,div,span,p,strong'));
      return candidates.find(el => el.textContent && el.textContent.toLowerCase().includes(nm.toLowerCase())) || null;
    }, name);
    try {
      handle = nodeHandle && nodeHandle.asElement ? nodeHandle.asElement() : null;
    } catch (e) {
      handle = null;
    }

    if (!handle) {
      console.warn('Name not found on page:', name);
      continue;
    }

    const info = await handle.evaluate((el) => {
      function findImg(el) {
        let node = el;
        for (let i = 0; i < 6; i++) {
          if (!node) break;
          const img = node.querySelector('img');
          if (img && img.src) return img.src;
          node = node.parentElement;
        }
        const fallback = Array.from(document.querySelectorAll('img')).find(i => i.alt && i.alt.toLowerCase().includes(el.textContent.trim().toLowerCase()));
        return fallback ? fallback.src : null;
      }

      function findLinkedin(el) {
        let node = el;
        for (let i = 0; i < 6; i++) {
          if (!node) break;
          const a = node.querySelector('a[href*="linkedin.com"]');
          if (a && a.href) return a.href;
          node = node.parentElement;
        }
        // try nearby anchors
        const anchors = Array.from(document.querySelectorAll('a[href*="linkedin.com"]'));
        const near = anchors.find(a => {
          return a.closest('section') === el.closest('section') || a.previousElementSibling === el || a.nextElementSibling === el;
        });
        return near ? near.href : null;
      }

      return {
        name: el.textContent.trim(),
        img: findImg(el),
        linkedin: findLinkedin(el)
      };
    });

    results.push({ name, ...info });
  }

  for (const r of results) {
    if (r.img) {
      try {
        const url = r.img;
        let buffer;
        let ext = '.jpg';

        if (url.startsWith('data:')) {
          // data:[<mediatype>][;base64],<data>
          const m = url.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
          if (!m) throw new Error('Unsupported data URL');
          const ct = m[1];
          const b64 = m[2];
          buffer = Buffer.from(b64, 'base64');
          if (ct.includes('png')) ext = '.png';
          else if (ct.includes('webp')) ext = '.webp';
        } else {
          const resp = await page.request.get(url);
          if (resp.status() !== 200) throw new Error('HTTP ' + resp.status());
          const ct = resp.headers()['content-type'] || '';
          if (ct.includes('png')) ext = '.png';
          else if (ct.includes('webp')) ext = '.webp';
          else if (ct.includes('jpeg')) ext = '.jpg';
          buffer = await resp.body();
        }

        const safe = r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const filename = `${safe}${ext}`;
        const filepath = path.join(OUT_DIR, filename);
        fs.writeFileSync(filepath, buffer);
        console.log('Saved', filename);

        const idx = data.findIndex(d => d.name && d.name.toLowerCase().trim() === r.name.toLowerCase().trim());
        if (idx >= 0) {
          data[idx].photoUrl = `/assets/trainers/${filename}`;
          if (r.linkedin) data[idx].linkedin = r.linkedin;
          console.log('Updated data for', data[idx].name);
        }
      } catch (err) {
        console.warn('Error downloading image for', r.name, err && err.message ? err.message : err);
      }
    } else {
      console.warn('No image found for', r.name);
    }

    // Also update linkedin if found
    if (r.linkedin) {
      const idx = data.findIndex(d => d.name && d.name.toLowerCase().trim() === r.name.toLowerCase().trim());
      if (idx >= 0) {
        data[idx].linkedin = r.linkedin;
      }
    }
  }

  // Normalize roles and company fields
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    if (!d.role) d.role = '';

    // 'sedang kuliah' -> Trainer & Freelance
    if (/sedang\s+kuliah/i.test(d.role) || /sedang\s+kuliah/i.test(d.company)) {
      d.role = 'Trainer & Freelance';
      d.company = 'Trainer & Freelance';
    }

    // shorten role to first line and limit length
    const firstLine = String(d.role).split('\n')[0].trim();
    d.role = firstLine.length > 80 ? firstLine.slice(0, 77) + '...' : firstLine;

    // if company is same as role or empty, clear it (we display only when different)
    if (!d.company || d.company.trim().toLowerCase() === d.role.trim().toLowerCase()) {
      d.company = '';
    }
  }

  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

  console.log('Done.');
  } catch (err) {
    console.error('Scraper error:', err && err.message ? err.message : err);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
  }
})();
