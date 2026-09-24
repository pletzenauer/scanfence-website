// Screenshots of the live demo (sample data only) for the help docs at
// /documentation/. Takes every shot in the dark and the light theme.
//
//   npm i --no-save playwright-core
//   CHROME=/path/to/chrome node scripts/docs-screenshots.mjs /tmp/shots [name,name]
//
// Then convert to public/images/docs/<name>-<theme>.webp, e.g.
//   cwebp -q 78 -m 6 -resize 1600 0 in.png -o out.webp   (keep narrower shots as they are)
import { chromium } from 'playwright-core';
import fs from 'node:fs';

const BASE = process.env.BASE || 'https://scanfence.com/demo/app';
const OUT = process.argv[2];
const ONLY = process.argv[3];
const EXE = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
fs.mkdirSync(OUT, { recursive: true });

const hideBanner = async (page) => {
  await page.evaluate(() => {
    for (const e of document.querySelectorAll('div')) {
      if (e.className.includes && e.className.includes('bg-ink') && e.textContent.includes('LIVE DEMO') && e.textContent.length < 200) e.style.display = 'none';
    }
  });
};
const clickText = async (page, text, sel = 'button') => {
  await page.locator(sel, { hasText: text }).first().click();
  await page.waitForTimeout(600);
};
const clickLabel = async (page, label) => {
  await page.locator(`[aria-label="${label}"], [title="${label}"]`).first().click();
  await page.waitForTimeout(600);
};
const dialog = (page) => page.locator('[role=dialog], .fixed.inset-0 > div').last();

// name, route, action(page) → returns locator to clip or null for viewport
const SHOTS = [
  ['dashboard', '/dashboard'],
  ['qr-codes', '/qr-codes'],
  ['qr-new-standard', '/qr-codes', async p => { await clickLabel(p, 'Generate QR Code'); return dialog(p); }],
  ['qr-new-dynamic', '/qr-codes', async p => {
    await clickLabel(p, 'Generate QR Code');
    await p.getByText('Make this a dynamic QR code').click(); await p.waitForTimeout(400);
    return dialog(p);
  }],
  ['qr-new-geofence', '/qr-codes', async p => { await clickLabel(p, 'Generate QR Code'); await clickText(p, 'Geofence'); return dialog(p); }],
  ['qr-new-multi', '/qr-codes', async p => { await clickLabel(p, 'Generate QR Code'); await clickText(p, 'Multi-location'); return dialog(p); }],
  ['qr-card', '/qr-codes', async p => p.locator('main .grid > div').first()],
  ['qr-bulk-upload', '/qr-codes', async p => { await clickLabel(p, 'Bulk Upload QR Codes'); return dialog(p); }],
  ['qr-time-rules', '/qr-codes', async p => {
    await clickLabel(p, 'Add Time-Based Rules');
    const sw = () => dialog(p).locator('button[role=switch], input[type=checkbox], button.relative');
    await sw().first().click(); await p.waitForTimeout(500);
    await sw().nth(1).click(); await p.waitForTimeout(300);
    await sw().nth(2).click(); await p.waitForTimeout(300);
    return dialog(p);
  }],
  ['multi-overview', '/qr-codes', async p => { await clickLabel(p, 'Edit Locations & View Statistics'); await p.waitForTimeout(2000); return null; }],
  ['team-invite', '/team', async p => { await clickText(p, 'Invite member'); return null; }],
  ['qr-analytics', '/qr-codes', async p => { await clickLabel(p, 'View detailed analytics'); await p.waitForTimeout(2000); return null; }],
  ['qr-list', '/qr-codes', async p => { await clickLabel(p, 'List View'); return null; }],
  ['qr-trash', '/qr-codes', async p => { await clickLabel(p, 'Trash (30 days)'); return null; }],
  ['geofences', '/geofences'],
  ['geofence-edit', '/geofences', async p => { await clickText(p, 'EDIT'); await p.waitForTimeout(1500); return null; }],
  ['analytics', '/analytics'],
  ['team', '/team'],
  ['audit-log', '/audit-log'],
  ['support', '/support'],
  ['settings', '/user-settings'],
];

const browser = await chromium.launch({ executablePath: EXE });
for (const theme of ['dark', 'light']) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 1000 }, deviceScaleFactor: 1.5, colorScheme: theme });
  // Carto basemaps now need an API key and stamp a watermark on every tile.
  // Serve Esri's keyless canvas tiles instead so the maps read cleanly.
  await ctx.route(/basemaps\.cartocdn\.com/, route => {
    const m = route.request().url().match(/\/(dark|light)_nolabels\/(\d+)\/(\d+)\/(\d+)/);
    if (!m) return route.continue();
    const layer = m[1] === 'dark' ? 'World_Dark_Gray_Base' : 'World_Light_Gray_Base';
    return route.continue({ url: `https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/${layer}/MapServer/tile/${m[2]}/${m[4]}/${m[3]}` });
  });
  await ctx.addInitScript(t => { try { localStorage.setItem('scanfence-theme', t); } catch {} }, theme);
  for (const [name, route, act] of SHOTS) {
    if (ONLY && !ONLY.split(',').includes(name)) continue;
    const page = await ctx.newPage();
    try {
      await page.goto(BASE + route, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1200);
      await hideBanner(page);
      const target = act ? await act(page) : null;
      await page.waitForTimeout(500);
      const file = `${OUT}/${name}-${theme}.png`;
      if (target) await target.screenshot({ path: file });
      else await page.screenshot({ path: file });
      console.log('ok', file);
    } catch (e) {
      console.log('FAIL', name, theme, e.message.split('\n')[0]);
    }
    await page.close();
  }
  await ctx.close();
}
await browser.close();
