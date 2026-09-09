// @ts-check
import { defineConfig, envField } from 'astro/config';
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
  env: {
    schema: {
      // Numero WhatsApp in formato E.164. È un dato pubblico — finisce dentro
      // un link che vede ogni visitatore — quindi ha un default: il sito
      // funziona appena scaricato. Per cambiarlo basta la variabile d'ambiente,
      // in locale con un file .env, su Vercel dalle impostazioni del progetto.
      PUBLIC_WHATSAPP_NUMBER: envField.string({
        context: 'client',
        access: 'public',
        default: '+393345730718',
      }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
