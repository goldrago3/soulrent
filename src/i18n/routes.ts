/**
 * Mappa degli slug localizzati (CLAUDE.md §7).
 *
 * Questo file è la sola verità sul routing: alimenta il selettore lingua,
 * i tag hreflang e ogni link di navigazione. Gli slug non sono traduzioni
 * meccaniche, servono a posizionarsi nei tre mercati.
 *
 * Aggiungere una chiave senza tutte e tre le lingue non compila.
 */

export const languages = ['it', 'en', 'de'] as const;

export type Lang = (typeof languages)[number];

export const defaultLang: Lang = 'it';

/**
 * Codici usati in `hreflang` e nell'attributo `lang` di `<html>`.
 * Solo lingua, senza territorio: il tedesco deve intercettare anche Austria
 * e Svizzera, l'inglese non è legato a un singolo mercato.
 */
export const htmlLang = {
  it: 'it',
  en: 'en',
  de: 'de',
} as const satisfies Record<Lang, string>;

/** Open Graph richiede invece la forma `lingua_TERRITORIO`. */
export const ogLocale = {
  it: 'it_IT',
  en: 'en_GB',
  de: 'de_DE',
} as const satisfies Record<Lang, string>;

export const routes = {
  home: { it: '/', en: '/en/', de: '/de/' },
  fleet: { it: '/flotta', en: '/en/fleet', de: '/de/flotte' },
  fleetCars: { it: '/flotta/auto', en: '/en/fleet/cars', de: '/de/flotte/autos' },
  fleetMotorcycles: { it: '/flotta/moto', en: '/en/fleet/motorcycles', de: '/de/flotte/motorraeder' },
  fleetBoats: { it: '/flotta/mare', en: '/en/fleet/boats', de: '/de/flotte/boote' },
  enquiry: { it: '/consulenza', en: '/en/enquiry', de: '/de/anfrage' },
  conditions: { it: '/meteo', en: '/en/conditions', de: '/de/wetter' },
  itineraries: { it: '/itinerari', en: '/en/routes', de: '/de/routen' },
  howItWorks: { it: '/come-funziona', en: '/en/how-it-works', de: '/de/ablauf' },
  about: { it: '/chi-siamo', en: '/en/about', de: '/de/ueber-uns' },
  partners: { it: '/partner', en: '/en/partners', de: '/de/partner' },
  contact: { it: '/contatti', en: '/en/contact', de: '/de/kontakt' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

export interface Alternate {
  lang: Lang;
  path: string;
  hreflang: string;
}

/** Percorso canonico di una rotta in una lingua. */
export function getPath(key: RouteKey, lang: Lang): string {
  return routes[key][lang];
}

/**
 * Le tre alternative linguistiche di una rotta.
 * È ciò che alimenta sia il selettore lingua sia i tag hreflang.
 */
export function getAlternates(key: RouteKey): Alternate[] {
  return languages.map((lang) => ({
    lang,
    path: routes[key][lang],
    hreflang: htmlLang[lang],
  }));
}

/** Rimuove lo slash finale, tranne che dalla radice. */
export function normalizePath(pathname: string): string {
  const withoutQuery = pathname.split(/[?#]/)[0] ?? '/';
  const trimmed = withoutQuery.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

const pathIndex = new Map<string, { key: RouteKey; lang: Lang }>();
for (const key of Object.keys(routes) as RouteKey[]) {
  for (const lang of languages) {
    pathIndex.set(normalizePath(routes[key][lang]), { key, lang });
  }
}

/** Risale dalla URL corrente alla rotta, per tenere il selettore lingua sulla pagina equivalente. */
export function matchRoute(pathname: string): { key: RouteKey; lang: Lang } | undefined {
  return pathIndex.get(normalizePath(pathname));
}

/** Lingua dedotta dal primo segmento di percorso: senza prefisso è italiano. */
export function getLangFromPath(pathname: string): Lang {
  const segment = normalizePath(pathname).split('/')[1];
  return languages.find((lang) => lang === segment) ?? defaultLang;
}
