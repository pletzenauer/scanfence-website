import { DEFAULT_LOCALE, LOCALES, LOCALE_META, isLocale, type Locale } from './config';
import en from './locales/en.json';
import zh from './locales/zh.json';
import es from './locales/es.json';
import ar from './locales/ar.json';
import pt from './locales/pt.json';
import id from './locales/id.json';
import fr from './locales/fr.json';
import ja from './locales/ja.json';
import ru from './locales/ru.json';
import de from './locales/de.json';

type Catalog = Record<string, string>;

const CATALOGS: Record<Locale, Catalog> = {
  en: en as Catalog,
  zh: zh as Catalog,
  es: es as Catalog,
  ar: ar as Catalog,
  pt: pt as Catalog,
  id: id as Catalog,
  fr: fr as Catalog,
  ja: ja as Catalog,
  ru: ru as Catalog,
  de: de as Catalog,
};

export function resolveLocale(value: string | undefined | null): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function t(key: string, locale: Locale, vars?: Record<string, string | number>): string {
  const catalog = CATALOGS[locale] ?? CATALOGS[DEFAULT_LOCALE];
  let value = catalog[key] ?? CATALOGS[DEFAULT_LOCALE][key] ?? key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      value = value.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
    }
  }
  return value;
}

/**
 * Convert a "canonical" English path like /pricing/ into the localized path:
 *   localizedUrl('/pricing/', 'en') -> '/pricing/'
 *   localizedUrl('/pricing/', 'de') -> '/de/pricing/'
 *   localizedUrl('/',         'fr') -> '/fr/'
 */
export function localizedUrl(path: string, locale: Locale): string {
  if (!path.startsWith('/')) path = '/' + path;
  if (locale === DEFAULT_LOCALE) return path;
  if (path === '/') return `/${locale}/`;
  return `/${locale}${path}`;
}

/**
 * Strip the locale prefix from a pathname, returning the canonical English path.
 *   stripLocalePrefix('/de/pricing/') -> { locale: 'de', path: '/pricing/' }
 *   stripLocalePrefix('/pricing/')    -> { locale: 'en', path: '/pricing/' }
 */
export function stripLocalePrefix(pathname: string): { locale: Locale; path: string } {
  const match = pathname.match(/^\/([a-z]{2})(\/.*)?$/);
  if (match && isLocale(match[1])) {
    return { locale: match[1], path: match[2] ?? '/' };
  }
  return { locale: DEFAULT_LOCALE, path: pathname };
}

/**
 * Generate hreflang alternates for every locale, given the *current* localized
 * pathname. Returns an array including x-default (pointing at the default locale).
 */
export function alternatesFor(pathname: string, siteUrl: string): Array<{ hreflang: string; href: string }> {
  const { path } = stripLocalePrefix(pathname);
  const base = siteUrl.replace(/\/$/, '');
  const alts = LOCALES.map(loc => ({
    hreflang: LOCALE_META[loc].hreflang,
    href: base + localizedUrl(path, loc),
  }));
  alts.push({ hreflang: 'x-default', href: base + localizedUrl(path, DEFAULT_LOCALE) });
  return alts;
}

export { LOCALES, LOCALE_META, DEFAULT_LOCALE, isLocale } from './config';
export type { Locale } from './config';
