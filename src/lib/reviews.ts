/**
 * Recensioni.
 *
 * L'array è vuoto per scelta, non per dimenticanza. Il §12 vieta recensioni
 * e testimonianze inventate: si aggiungono qui solo quando sono reali,
 * verificabili e Luca ha il consenso a pubblicarle.
 *
 * Finché è vuoto la sezione mostra un segnaposto visibile, non sparisce:
 * un buco silenzioso non si nota, un [TODO] sì.
 */

export interface Review {
  autore: string;
  testo: string;
  fonte: 'google' | 'tripadvisor' | 'diretta';
  /** Data in formato ISO, es. 2026-07-14. */
  data: string;
  /** Link alla recensione originale, dove esiste. */
  url?: string;
}

export const reviews: readonly Review[] = [];
