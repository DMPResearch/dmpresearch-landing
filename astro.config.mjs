import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://dmpresearch.flowstarter.dev',
  compressHTML: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
})
