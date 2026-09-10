import { z } from 'astro/zod';

/**
 * Schema della flotta (CLAUDE.md §8).
 *
 * Vive qui e non dentro `content.config.ts` per poterlo mettere alla prova
 * senza far partire una build: il vincolo sul prezzo dei veicoli `signature`
 * è una regola di business, e una regola di business va testata.
 *
 * Un file per veicolo, non uno per lingua: le specifiche tecniche si scrivono
 * una volta sola. Ripetute in tre file, correggere una potenza vorrebbe dire
 * correggerla tre volte, e prima o poi il sito tedesco direbbe un numero
 * diverso da quello italiano. Il §13 è severo proprio sui numeri.
 *
 * L'identificativo del veicolo è il nome del file: `macan.md` diventa
 * `/flotta/auto/macan`. Non serve un campo `slug`, e così non può capitare
 * che due veicoli ne dichiarino uno uguale.
 */

/** Testo che esiste in tutte e tre le lingue. */
const tradotto = z.object({
  it: z.string().min(1),
  en: z.string().min(1),
  de: z.string().min(1),
});

/**
 * Voci di "cosa è incluso" che si scrivono con una parola sola e vengono
 * tradotte da `ui.ts`. Per tutto il resto si scrive il testo nelle tre lingue:
 * il caso frequente resta corto, quello raro resta possibile senza toccare
 * il codice.
 */
export const inclusiNoti = [
  'consegna',
  'ritiro',
  'secondoConducente',
  'assistenza',
  'chilometriIllimitati',
  'pienoCarburante',
  'skipper',
  'attrezzatura',
  'assicurazione',
] as const;

export const alimentazioni = ['benzina', 'diesel', 'ibrida', 'elettrica'] as const;
export const cambi = ['manuale', 'automatico'] as const;

/** Messaggio dell'errore che ferma la build. Lo usa anche il test. */
export const erroreePrezzoSignature =
  'Un veicolo del segmento "signature" non può avere prezzoIndicativo. ' +
  'Il §2 di CLAUDE.md lo vieta in qualsiasi forma: togli il campo, ' +
  'oppure cambia segmento in "essenziale".';

/**
 * `image` arriva da Astro e valida che il file della fotografia esista davvero.
 * Il tipo resta generico perché quello che Astro restituisce (`ImageMetadata`)
 * arrivi intatto fino ai componenti: se qui si scrivesse `ZodTypeAny`, il
 * componente `<Image>` non saprebbe più cosa gli viene passato.
 * Nei test si passa una funzione qualsiasi, per esempio `() => z.string()`.
 */
export function fleetSchema<Immagine extends z.ZodType>(image: () => Immagine) {
  return z
    .object({
      categoria: z.enum(['auto', 'moto', 'mare']),
      segmento: z.enum(['signature', 'essenziale']),

      /** Nome del modello. Non si traduce: è un nome proprio. */
      nome: z.string().min(1),
      posizionamento: tradotto,
      anno: z.number().int().min(1900).max(2100),

      specifiche: z.object({
        alimentazione: z.enum(alimentazioni),
        /** Le barche non ce l'hanno. */
        cambio: z.enum(cambi).optional(),
        posti: z.number().int().positive(),
        /** Le moto e alcune barche non ce l'hanno. */
        bagagli: z.number().int().nonnegative().optional(),
        /** Cavalli. */
        potenza: z.number().int().positive().optional(),
      }),

      requisiti: z.object({
        etaMinima: z.number().int().positive(),
        anniPatente: z.number().int().nonnegative(),
      }),

      incluso: z.array(z.union([z.enum(inclusiNoti), tradotto])).min(1),

      /**
       * La prima immagine è quella di copertina. Finché `src` manca viene
       * mostrato un segnaposto grigio con le proporzioni giuste: mai una
       * foto di stock (§13).
       */
      immagini: z.array(z.object({ src: image().optional(), alt: tradotto })).min(1),

      /** Solo per il segmento `essenziale`. Vedi il controllo qui sotto. */
      prezzoIndicativo: z.number().positive().optional(),

      ordine: z.number().int(),

      /** Marca il veicolo come esempio da sostituire: lo si vede nel sito. */
      esempio: z.boolean().default(false),
    })
    .superRefine((veicolo, ctx) => {
      // Il vincolo del §8: un veicolo `signature` non espone un prezzo, mai,
      // in nessuna vista. Qui la build si ferma prima ancora di generare la
      // pagina, così nessun componente può trovarsi un prezzo fra le mani.
      if (veicolo.segmento === 'signature' && veicolo.prezzoIndicativo !== undefined) {
        ctx.addIssue({
          code: 'custom',
          path: ['prezzoIndicativo'],
          message: erroreePrezzoSignature,
        });
      }
    });
}
