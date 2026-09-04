// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // [TODO] dominio: sostituire appena è stato acquistato.
  // Alimenta canonical, hreflang e Open Graph, quindi finché è finto quei tag
  // sono finti. Il finale .invalid è riservato e non può essere registrato
  // (RFC 2606): serve a rendere il segnaposto impossibile da non notare,
  // invece di un dominio plausibile che finirebbe in produzione in silenzio.
  site: 'https://soulrent.invalid',
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
