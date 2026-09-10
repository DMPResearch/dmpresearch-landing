/**
 * Locale registry. English ships today; add a folder under `src/i18n/{code}/`
 * and list the code in `locales` when a translation is ready.
 */
export const defaultLocale = 'en' as const;

export const locales = ['en'] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  en: 'English',
};

/** Shown in the switcher as unavailable until wired. */
export const upcomingLocales = [
  { code: 'ro', label: 'Română' },
  { code: 'de', label: 'Deutsch' },
] as const;

export const chrome = {
  en: {
    language: 'Language',
    moreLanguagesSoon: 'More languages soon',
    menu: 'Menu',
    close: 'Close',
    themeGroup: 'Color theme',
    themeLight: 'Light theme',
    themeDark: 'Dark theme',
    themeAuto: 'System theme',
    siteNav: 'Site',
    legalNav: 'Legal',
    skipToContent: 'Skip to content',
  },
} as const;

export function getChrome(locale: Locale = defaultLocale) {
  return chrome[locale] ?? chrome.en;
}
