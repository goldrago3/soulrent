// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // [TODO] confermare il dominio definitivo: alimenta canonical, hreflang e Open Graph
  site: 'https://www.soulrent.it',
  output: 'static',
  // L'i18n di Astro qui serve solo a rendere affidabile `Astro.currentLocale`.
  // Gli slug sono localizzati (§7), quindi le pagine restano file fisici e la
  // verità sul routing vive in src/i18n/routes.ts.
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
