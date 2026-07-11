import { defineI18n } from 'fumadocs-core/i18n';

export const i18n = defineI18n({
  defaultLanguage: 'fr',
  languages: ['fr', 'en'],
  // Pages sans traduction (`*.en.mdx`) retombent sur le contenu français.
  fallbackLanguage: 'fr',
  // La langue par défaut (fr) est servie à la racine, l'anglais sous `/en`.
  hideLocale: 'default-locale',
});
