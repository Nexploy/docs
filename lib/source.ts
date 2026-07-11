import { docs } from '@/.source/server';
import { loader } from 'fumadocs-core/source';
import { i18n } from '@/lib/i18n';

// Docs are served at the site root (`/`), matching the previous docs-only setup.
export const source = loader({
  i18n,
  baseUrl: '/',
  source: docs.toFumadocsSource(),
});
