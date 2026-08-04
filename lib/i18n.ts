import { defineI18n } from 'fumadocs-core/i18n';

export const i18n = defineI18n({
  defaultLanguage: 'fr',
  languages: ['fr', 'en', 'it', 'es'],
  fallbackLanguage: 'fr',
  hideLocale: 'default-locale',
});
