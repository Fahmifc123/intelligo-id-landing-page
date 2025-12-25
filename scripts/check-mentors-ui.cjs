#!/usr/bin/env node
const { chromium } = require('playwright');

const URL = process.argv[2] || 'http://localhost:8080/';
const NAMES = ['Muhammad Fahmi', 'Mardhani Dwi Novanto', 'Andika Risky Sururi'];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ timeout: 60000 });
  try {
    await page.goto(URL, { waitUntil: 'networkidle' });
    // Wait for Mentor section heading
    await page.waitForSelector('text=Mentor Praktisi Ahli', { timeout: 10000 });

    for (const name of NAMES) {
      const el = await page.locator(`text="${name}"`).first();
      if (!await el.count()) {
        console.log(`${name}: NOT FOUND`);
        continue;
      }

      // Find image near the element
      const imgSrc = await el.evaluate((node) => {
        // search nearby for img
        let n = node;
        for (let i = 0; i < 6; i++) {
          if (!n) break;
          const img = n.querySelector('img');
          if (img && img.src) return img.src;
          n = n.parentElement;
        }
        const fallback = Array.from(document.querySelectorAll('img')).find(i => i.alt && i.alt.includes(node.textContent.trim()));
        return fallback ? fallback.src : null;
      });

      // Find LinkedIn anchor near the element
      const link = await el.evaluate((node) => {
        let n = node;
        for (let i = 0; i < 6; i++) {
          if (!n) break;
          const a = n.querySelector('a[href*="linkedin.com"]');
          if (a && a.href) return a.href;
          n = n.parentElement;
        }
        return null;
      });

      console.log(`${name}: image=${imgSrc || 'NONE'}, linkedin=${link || 'NONE'}`);
    }

  } catch (err) {
    console.error('Check failed:', err.message);
    process.exitCode = 2;
  } finally {
    await browser.close();
  }
})();
