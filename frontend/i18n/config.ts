// Internationalization configuration file

export const locales = ['en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
};

// HTML lang attribute corresponding to languages
export const localeHtmlLang: Record<Locale, string> = {
  en: 'en',
};
