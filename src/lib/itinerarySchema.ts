import { z } from 'astro/zod';

/**
 * Schema degli itinerari (CLAUDE.md §8).
 *
 * Stesse scelte della flotta: un file per itinerario, non uno per lingua.
 * Distanze e tempi si scrivono una volta sola; si traducono solo le frasi.
 *
 * L'identificativo è il nome del file: `golfo-degli-angeli.md` diventa
 * `/itinerari/golfo-degli-angeli`.
 */

/** Testo che esiste in tutte e tre le lingue. */
const tradotto = z.object({
  it: z.string().min(1),
  en: z.string().min(1),
  de: z.string().min(1),
});

export const verticali = ['auto', 'moto', 'mare'] as const;
export const unitaDurata = ['ore', 'giorni'] as const;

/** Messaggio dell'errore che ferma la build. Lo usa anche il test. */
export const erroreTappeVuote =
  'Un itinerario deve avere almeno una tappa: senza, la pagina non racconta niente.';

/**
 * `image` e `reference` arrivano da Astro. Restano parametri perché lo schema
 * possa essere messo alla prova senza far partire una build, come per la flotta.
 * `reference('fleet')` fa sì che un veicolo consigliato che non esiste fermi
 * la build invece di produrre un collegamento rotto.
 */
export function itinerarySchema<Immagine extends z.ZodType, Riferimento extends z.ZodType>(
  image: () => Immagine,
  reference: (collezione: 'fleet') => Riferimento,
) {
  return z
    .object({
      vertical: z.enum(verticali),

      titolo: tradotto,
      sommario: tradotto,

      durata: z.object({
        valore: z.number().positive(),
        unita: z.enum(unitaDurata),
      }),

      distanzaKm: z.number().positive(),

      /** Slug di veicoli della collection `fleet`. Se non esistono, la build si ferma. */
      veicoliConsigliati: z.array(reference('fleet')).default([]),

      tappe: z
        .array(
          z.object({
            nome: tradotto,
            descrizione: tradotto,
            /** Quanto ci si ferma o quanto dura il tratto. */
            tempoMinuti: z.number().int().positive().optional(),
          }),
        )
        .min(1, erroreTappeVuote),

      /**
       * La prima immagine è quella di copertina. Finché `src` manca viene
       * mostrato un segnaposto grigio con le proporzioni giuste (§13).
       */
      immagini: z.array(z.object({ src: image().optional(), alt: tradotto })).min(1),

      ordine: z.number().int(),

      /** Marca l'itinerario come esempio da sostituire: lo si vede nel sito. */
      esempio: z.boolean().default(false),
    })
    .strict();
}
