import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { fleetSchema } from './lib/fleetSchema';

/**
 * Collezioni di contenuto.
 *
 * Lo schema della flotta vive in `src/lib/fleetSchema.ts` per poter essere
 * testato senza far partire una build. Qui si dice solo dove stanno i file.
 */
const fleet = defineCollection({
  // Un file che comincia con `_` viene ignorato: serve a togliere
  // temporaneamente un veicolo dal sito — in officina, venduto, non ancora
  // pronto — senza cancellarne la scheda.
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/fleet' }),
  schema: ({ image }) => fleetSchema(image),
});

export const collections = { fleet };
