import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { fleetSchema } from './lib/fleetSchema';
import { itinerarySchema } from './lib/itinerarySchema';

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

const itineraries = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/itineraries' }),
  schema: ({ image }) => itinerarySchema(image, reference),
});

export const collections = { fleet, itineraries };
