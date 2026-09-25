import { DEFAULT_LOCALE, LOCALES, INDEXED_LOCALES, LOCALE_META, isLocale, isIndexedLocale, type Locale } from './config';
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
import nl from './locales/nl.json';
import hi from './locales/hi.json';

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
  nl: nl as Catalog,
  hi: hi as Catalog,
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
 * Link into app.scanfence.com in the visitor's language. The app reads
 * `?lang=` (same locale codes as this site). English links carry no param so
 * the app can fall back to the visitor's saved or browser language.
 *   appUrl('/signup', 'de')              -> 'https://app.scanfence.com/signup?lang=de'
 *   appUrl('/signup?plan=starter', 'en') -> 'https://app.scanfence.com/signup?plan=starter'
 */
export function appUrl(path: string, locale: Locale): string {
  const url = new URL(path, 'https://app.scanfence.com');
  if (locale !== DEFAULT_LOCALE) url.searchParams.set('lang', locale);
  return url.toString();
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
 * Generate hreflang alternates for the *indexable* locales, given the current
 * localized pathname. Returns an array including x-default (pointing at the
 * default locale).
 *
 * Only INDEXED_LOCALES appear. A page that is served `noindex` must not be
 * advertised as an hreflang alternate — that tells Google to index it and not
 * to index it at the same time, and Search Console reports the pair as an
 * error rather than picking a winner.
 */
export function alternatesFor(pathname: string, siteUrl: string): Array<{ hreflang: string; href: string }> {
  const { path } = stripLocalePrefix(pathname);
  const base = siteUrl.replace(/\/$/, '');
  const alts = INDEXED_LOCALES.map(loc => ({
    hreflang: LOCALE_META[loc].hreflang,
    href: base + localizedUrl(path, loc),
  }));
  alts.push({ hreflang: 'x-default', href: base + localizedUrl(path, DEFAULT_LOCALE) });
  return alts;
}

export { LOCALES, INDEXED_LOCALES, LOCALE_META, DEFAULT_LOCALE, isLocale, isIndexedLocale } from './config';
export type { Locale } from './config';
