import type { RouteKey } from '../i18n/routes';
import type { UiKey } from '../i18n/ui';

/**
 * Le pagine singole del sito: quelle già costruite e quelle ancora scheletro.
 *
 * `src/pages/[...slug].astro` le genera tutte, nelle tre lingue, da questo
 * elenco. Flotta, itinerari e home hanno rotte proprie e non passano di qui.
 *
 * Quando una pagina viene costruita si sposta da `scheletri` a `costruite`:
 * una riga, e il segnaposto sparisce da tutte e tre le lingue.
 */

export const costruite = {
  howItWorks: 'nav.howItWorks',
  about: 'nav.about',
  partners: 'nav.partners',
  contact: 'nav.contact',
  privacy: 'footer.privacy',
  cookies: 'footer.cookies',
  terms: 'footer.terms',
} as const satisfies Partial<Record<RouteKey, UiKey>>;

export const scheletri = {
  /** Sessione dedicata al form di consulenza. */
  enquiry: 'nav.enquiry',
  /** Sessione dedicata al meteo. */
  conditions: 'nav.conditions',
} as const satisfies Partial<Record<RouteKey, UiKey>>;

export type PaginaCostruita = keyof typeof costruite;
export type PaginaScheletro = keyof typeof scheletri;
export type PaginaSingola = PaginaCostruita | PaginaScheletro;

export const titoli = { ...costruite, ...scheletri } as const satisfies Record<PaginaSingola, UiKey>;

/** I tre documenti legali condividono lo stesso impianto. */
export const documentiLegali = ['privacy', 'cookies', 'terms'] as const;
export type DocumentoLegale = (typeof documentiLegali)[number];

export function isDocumentoLegale(pagina: PaginaSingola): pagina is DocumentoLegale {
  return (documentiLegali as readonly string[]).includes(pagina);
}
