/**
 * Dati aziendali. Alimentano il footer e i dati strutturati LocalBusiness.
 *
 * Tutto ciò che è marcato [TODO] deve arrivare da Luca: non va inventato
 * nemmeno in forma plausibile (§13). Finché resta [TODO] è visibile,
 * e questo è il comportamento voluto.
 */

export const business = {
  name: 'SouLRent',
  /** Ragione sociale della ditta individuale. */
  legalName: '[TODO]',
  vatId: '[TODO partita IVA]',
  email: '[TODO]',
  /** In formato E.164, es. +39… — serve anche al deep-link WhatsApp. */
  telephone: '[TODO]',
  address: {
    street: '[TODO]',
    postalCode: '[TODO]',
    locality: 'Cagliari',
    region: 'Sardegna',
    country: 'IT',
  },
  geo: {
    latitude: '[TODO]',
    longitude: '[TODO]',
  },
  /** Profili social ufficiali, per `sameAs`. Nessun URL inventato. */
  sameAs: ['[TODO]'],
  /** Immagine Open Graph e `image` dei dati strutturati. */
  ogImage: '[TODO]',
  foundingYear: '[TODO]',
} as const;
