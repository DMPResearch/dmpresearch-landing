# Internationalization

English (`en`) is the only live locale today. Astro i18n is configured in
`astro.config.mjs` with `prefixDefaultLocale: false`, so URLs stay unprefixed.

## Files

- `src/i18n/config.ts` — locale list, chrome UI strings, upcoming locales
- `src/content/site.ts` / `legal.ts` — English product copy (source of truth for now)
- `src/components/LanguageSwitch.astro` — footer switcher (English active; others disabled)

## Adding a language

1. Add the code to `locales` and `localeLabels` in `src/i18n/config.ts`
2. Remove it from `upcomingLocales`
3. Add chrome strings under `chrome.{code}`
4. Split product copy into `src/i18n/{code}/site.ts` (or a messages map) and select by locale
5. Add the locale to `astro.config.mjs` `i18n.locales` and wire routing if you want `/ro/...`
