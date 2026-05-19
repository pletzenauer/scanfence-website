// One-shot patcher: aligns non-English locale JSON files with the new
// pricing tier names (basic/starter/professional), USD billing, and the
// 30-day trial flow described by app.scanfence.com/signup.
//
// Strategy: delete keys whose translated text now contradicts reality
// (e.g. "EUR · NET", "no card up front", "€0.0008 per scan"). The t()
// helper in src/i18n/t.ts already falls back to en.json when a key is
// missing, so deleting yields automatic English fallback with correct
// info — better than leaving a localised lie in place.
//
// Run with: node scripts/patch-pricing-locales.mjs

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const LOCALES_DIR = join(__dirname, '..', 'src', 'i18n', 'locales');

// Keys to remove from non-English locales because their translated text is
// now wrong (currency, trial mechanics, scan overage rate, old tier names).
const KEYS_TO_DELETE = [
  // Old tier names with old limits — entire blocks
  'pricing.tier.starter.name', 'pricing.tier.starter.eyebrow', 'pricing.tier.starter.blurb', 'pricing.tier.starter.cta',
  'pricing.tier.starter.feature1', 'pricing.tier.starter.feature2', 'pricing.tier.starter.feature3',
  'pricing.tier.starter.feature4', 'pricing.tier.starter.feature5', 'pricing.tier.starter.feature6',
  'pricing.tier.growth.name', 'pricing.tier.growth.eyebrow', 'pricing.tier.growth.blurb', 'pricing.tier.growth.cta',
  'pricing.tier.growth.feature1', 'pricing.tier.growth.feature2', 'pricing.tier.growth.feature3',
  'pricing.tier.growth.feature4', 'pricing.tier.growth.feature5', 'pricing.tier.growth.feature6',
  'pricing.tier.scale.name', 'pricing.tier.scale.eyebrow', 'pricing.tier.scale.blurb', 'pricing.tier.scale.cta',
  'pricing.tier.scale.feature1', 'pricing.tier.scale.feature2', 'pricing.tier.scale.feature3',
  'pricing.tier.scale.feature4', 'pricing.tier.scale.feature5', 'pricing.tier.scale.feature6',
  // Old compare columns + dropped rows + dropped values
  'pricing.compare.col.starter', 'pricing.compare.col.growth', 'pricing.compare.col.scale',
  'pricing.compare.row.timeRouting', 'pricing.compare.row.api', 'pricing.compare.row.domains', 'pricing.compare.row.sla',
  'pricing.compare.val.unlimited', 'pricing.compare.val.prioritySla',
  // Cadence string (replaced by cadenceMonth/cadenceYear)
  'pricing.cadence',
  // Hero + meta copy that asserted "euros" / "no card" / euro overage rate
  'pricing.description', 'pricing.hero.lede',
  'pricing.faq.a1', 'pricing.faq.a5', 'pricing.faq.a6',
  'common.metadata.eurNet',
];

// Universal short codes that don't need translation — set in every locale.
const KEYS_TO_SET = {
  'common.metadata.usdNet': 'USD · NET',
  'common.metadata.trial': '30D · TRIAL',
};

const files = readdirSync(LOCALES_DIR).filter(f => f.endsWith('.json') && f !== 'en.json');

let totalDeleted = 0;
let totalSet = 0;

for (const file of files) {
  const path = join(LOCALES_DIR, file);
  const raw = readFileSync(path, 'utf8');
  const data = JSON.parse(raw);

  let deleted = 0;
  for (const k of KEYS_TO_DELETE) {
    if (k in data) {
      delete data[k];
      deleted++;
    }
  }
  totalDeleted += deleted;

  let setCount = 0;
  for (const [k, v] of Object.entries(KEYS_TO_SET)) {
    if (data[k] !== v) {
      data[k] = v;
      setCount++;
    }
  }
  totalSet += setCount;

  writeFileSync(path, JSON.stringify(data, null, 2) + '\n');
  console.log(`${file.padEnd(10)} -${deleted} keys  +${setCount} keys`);
}

console.log(`\nTotal: removed ${totalDeleted}, set ${totalSet} across ${files.length} files.`);
