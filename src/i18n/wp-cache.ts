import { DEFAULT_LOCALE, type Locale } from './config';

export interface WPPageCache {
  sourceHash: string;
  translatedAt: string;
  title: string;
  content: string;
  yoastTitle?: string;
  yoastDescription?: string;
}

export interface WPPostCache extends WPPageCache {
  excerpt: string;
}

interface CacheFile<T> {
  default: T;
}

const pageModules = import.meta.glob<CacheFile<WPPageCache>>('./cache/wp-pages/*/*.json', { eager: true });
const postModules = import.meta.glob<CacheFile<WPPostCache>>('./cache/wp-posts/*/*.json', { eager: true });

function lookup<T>(modules: Record<string, CacheFile<T>>, prefix: string, locale: Locale, slug: string): T | undefined {
  const key = `./cache/${prefix}/${locale}/${slug}.json`;
  return modules[key]?.default;
}

export function getPageTranslation(locale: Locale, slug: string): WPPageCache | undefined {
  if (locale === DEFAULT_LOCALE) return undefined;
  return lookup(pageModules, 'wp-pages', locale, slug);
}

export function getPostTranslation(locale: Locale, slug: string): WPPostCache | undefined {
  if (locale === DEFAULT_LOCALE) return undefined;
  return lookup(postModules, 'wp-posts', locale, slug);
}
