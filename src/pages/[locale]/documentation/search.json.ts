import type { APIRoute } from 'astro';
import { searchIndex } from '../../../lib/docs';
import { LOCALES, DEFAULT_LOCALE, type Locale } from '../../../i18n/config';
import { t } from '../../../i18n/t';

export function getStaticPaths() {
  return LOCALES.filter(l => l !== DEFAULT_LOCALE).map(locale => ({ params: { locale } }));
}

export const GET: APIRoute = async ({ params }) => {
  const locale = params.locale as Locale;
  return new Response(JSON.stringify(await searchIndex(locale, k => t(`docs.group.${k}`, locale))), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
