export const DEFAULT_LOCALE = 'en' as const;

export const LOCALES = ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de'] as const;

export type Locale = (typeof LOCALES)[number];

interface LocaleMeta {
  code: Locale;
  hreflang: string;
  ogLocale: string;
  nativeName: string;
  englishName: string;
  dir: 'ltr' | 'rtl';
  dateLocale: string;
  promptHint: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { code: 'en', hreflang: 'en',    ogLocale: 'en_US', nativeName: 'English',          englishName: 'English',     dir: 'ltr', dateLocale: 'en-US', promptHint: 'English (US, neutral business tone).' },
  zh: { code: 'zh', hreflang: 'zh-CN', ogLocale: 'zh_CN', nativeName: '中文',              englishName: 'Chinese',     dir: 'ltr', dateLocale: 'zh-CN', promptHint: 'Simplified Chinese (zh-CN, mainland conventions).' },
  es: { code: 'es', hreflang: 'es',    ogLocale: 'es_ES', nativeName: 'Español',          englishName: 'Spanish',     dir: 'ltr', dateLocale: 'es-ES', promptHint: 'Neutral international Spanish, avoid strong regionalisms.' },
  ar: { code: 'ar', hreflang: 'ar',    ogLocale: 'ar_AR', nativeName: 'العربية',          englishName: 'Arabic',      dir: 'rtl', dateLocale: 'ar',    promptHint: 'Modern Standard Arabic. HTML stays as-is — the browser handles right-to-left via dir="rtl". Use Arabic-Indic digits only where natural; keep Western digits in prices, versions, and code.' },
  pt: { code: 'pt', hreflang: 'pt-BR', ogLocale: 'pt_BR', nativeName: 'Português',        englishName: 'Portuguese',  dir: 'ltr', dateLocale: 'pt-BR', promptHint: 'Brazilian Portuguese (pt-BR).' },
  id: { code: 'id', hreflang: 'id',    ogLocale: 'id_ID', nativeName: 'Bahasa Indonesia', englishName: 'Indonesian',  dir: 'ltr', dateLocale: 'id-ID', promptHint: 'Bahasa Indonesia, modern business register.' },
  fr: { code: 'fr', hreflang: 'fr',    ogLocale: 'fr_FR', nativeName: 'Français',         englishName: 'French',      dir: 'ltr', dateLocale: 'fr-FR', promptHint: 'Metropolitan French (fr-FR).' },
  ja: { code: 'ja', hreflang: 'ja',    ogLocale: 'ja_JP', nativeName: '日本語',            englishName: 'Japanese',    dir: 'ltr', dateLocale: 'ja-JP', promptHint: 'Japanese (standard です/ます polite register for marketing copy).' },
  ru: { code: 'ru', hreflang: 'ru',    ogLocale: 'ru_RU', nativeName: 'Русский',          englishName: 'Russian',     dir: 'ltr', dateLocale: 'ru-RU', promptHint: 'Russian, modern neutral business register.' },
  de: { code: 'de', hreflang: 'de',    ogLocale: 'de_DE', nativeName: 'Deutsch',          englishName: 'German',      dir: 'ltr', dateLocale: 'de-DE', promptHint: 'German, Sie-form (formal), neutral business tone.' },
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

export function isRTL(locale: Locale): boolean {
  return LOCALE_META[locale].dir === 'rtl';
}

export function hreflangFor(locale: Locale): string {
  return LOCALE_META[locale].hreflang;
}

export function ogLocaleFor(locale: Locale): string {
  return LOCALE_META[locale].ogLocale;
}
