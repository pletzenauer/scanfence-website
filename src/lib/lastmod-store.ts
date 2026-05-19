/**
 * Build-time URL → ISO-date map for sitemap lastmod hints.
 *
 * Astro's static-path generators run before the sitemap integration's
 * `serialize` step. We persist to disk so serialize (running in
 * astro.config.mjs's plugin context) can read what the pages recorded.
 *
 * The file lives in `.astro/` (Astro's gitignored build cache). It's safe to
 * delete; each build rewrites the entries it owns.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const FILE = resolve('.astro/lastmod.json');
const TMP_FILE = FILE + '.tmp';

let mem: Record<string, string> | null = null;

function loadFromDisk(): Record<string, string> {
  if (!existsSync(FILE)) return {};
  try {
    return JSON.parse(readFileSync(FILE, 'utf-8')) as Record<string, string>;
  } catch {
    return {};
  }
}

function ensureLoaded() {
  if (mem === null) mem = loadFromDisk();
}

function persist() {
  if (mem === null) return;
  const dir = dirname(FILE);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  // Atomic-ish write: temp file + rename. Avoids partial reads when many
  // pages record in quick succession.
  writeFileSync(TMP_FILE, JSON.stringify(mem, null, 2));
  try {
    writeFileSync(FILE, readFileSync(TMP_FILE, 'utf-8'));
  } finally {
    // best-effort cleanup
  }
}

/** Record a `path → ISO date` entry. `path` should start with `/`. */
export function recordLastmod(path: string, isoDate: string): void {
  if (!path.startsWith('/')) path = '/' + path;
  if (!isoDate) return;
  ensureLoaded();
  // Don't overwrite a later date with an earlier one (handles the case where
  // the locale catchall and the English route both record the same URL).
  const prev = mem![path];
  if (!prev || prev < isoDate) {
    mem![path] = isoDate;
    persist();
  }
}

export function getLastmodMap(): Record<string, string> {
  return loadFromDisk();
}
