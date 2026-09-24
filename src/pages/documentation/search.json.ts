import type { APIRoute } from 'astro';
import { searchIndex } from '../../lib/docs';
import { DEFAULT_LOCALE } from '../../i18n/config';
import { t } from '../../i18n/t';

export const GET: APIRoute = async () =>
  new Response(JSON.stringify(await searchIndex(DEFAULT_LOCALE, k => t(`docs.group.${k}`, DEFAULT_LOCALE))), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
