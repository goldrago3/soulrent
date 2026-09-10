import { getCollection, type CollectionEntry } from 'astro:content';
import { alimentazioni, cambi, inclusiNoti } from './fleetSchema';
import { getPath, type Lang, type RouteKey } from '../i18n/routes';
import type { UiKey } from '../i18n/ui';

/**
 * Accesso alla flotta.
 *
 * Il punto delicato è il prezzo: il §2 vieta di mostrarlo sui veicoli
 * `signature` in qualsiasi vista. Lo schema già impedisce di scriverlo, e
 * `prezzoVisibile` fa da seconda rete: nessun componente legge
 * `data.prezzoIndicativo` direttamente.
 */

export type Vehicle = CollectionEntry<'fleet'>;
export type Categoria = Vehicle['data']['categoria'];
export type VoceInclusa = Vehicle['data']['incluso'][number];

export const categorie = ['auto', 'moto', 'mare'] as const;

/** Ogni categoria ha la sua pagina indice, con slug diverso per lingua (§7). */
export const categoriaRoute = {
  auto: 'fleetCars',
  moto: 'fleetMotorcycles',
  mare: 'fleetBoats',
} as const satisfies Record<Categoria, RouteKey>;

export const categoriaLabel = {
  auto: 'nav.fleetCars',
  moto: 'nav.fleetMotorcycles',
  mare: 'nav.fleetBoats',
} as const satisfies Record<Categoria, UiKey>;

export const alimentazioneLabel = {
  benzina: 'fleet.fuel.benzina',
  diesel: 'fleet.fuel.diesel',
  ibrida: 'fleet.fuel.ibrida',
  elettrica: 'fleet.fuel.elettrica',
} as const satisfies Record<(typeof alimentazioni)[number], UiKey>;

export const cambioLabel = {
  manuale: 'fleet.gearbox.manuale',
  automatico: 'fleet.gearbox.automatico',
} as const satisfies Record<(typeof cambi)[number], UiKey>;

export const inclusoLabel = {
  consegna: 'fleet.incluso.consegna',
  ritiro: 'fleet.incluso.ritiro',
  secondoConducente: 'fleet.incluso.secondoConducente',
  assistenza: 'fleet.incluso.assistenza',
  chilometriIllimitati: 'fleet.incluso.chilometriIllimitati',
  pienoCarburante: 'fleet.incluso.pienoCarburante',
  skipper: 'fleet.incluso.skipper',
  attrezzatura: 'fleet.incluso.attrezzatura',
  assicurazione: 'fleet.incluso.assicurazione',
} as const satisfies Record<(typeof inclusiNoti)[number], UiKey>;

/** Ordina per `ordine`, poi per nome: due veicoli con lo stesso numero non si scambiano di posto fra una build e l'altra. */
function perOrdine(a: Vehicle, b: Vehicle): number {
  return a.data.ordine - b.data.ordine || a.data.nome.localeCompare(b.data.nome);
}

/** Tutti i veicoli, o solo quelli di una categoria. */
export async function getFleet(categoria?: Categoria): Promise<Vehicle[]> {
  const tutti = await getCollection('fleet');
  const scelti = categoria ? tutti.filter((v) => v.data.categoria === categoria) : tutti;
  return scelti.sort(perOrdine);
}

/** Altri modelli della stessa categoria, escluso quello che si sta guardando. */
export function correlati(veicolo: Vehicle, tutti: Vehicle[], massimo = 3): Vehicle[] {
  return tutti
    .filter((v) => v.id !== veicolo.id && v.data.categoria === veicolo.data.categoria)
    .sort(perOrdine)
    .slice(0, massimo);
}

/**
 * Prezzo mostrabile. Restituisce `undefined` per i `signature` anche se per
 * qualche ragione il dato fosse presente: è l'unico modo che i componenti
 * hanno per leggere un prezzo, quindi non possono sbagliare.
 */
export function prezzoVisibile(veicolo: Vehicle): number | undefined {
  if (veicolo.data.segmento !== 'essenziale') return undefined;
  return veicolo.data.prezzoIndicativo;
}

export function formattaPrezzo(valore: number, lang: Lang): string {
  return new Intl.NumberFormat(lang, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(valore);
}

/** Percorso della scheda: /flotta/auto/<file>, /en/fleet/cars/<file>, … */
export function vehiclePath(veicolo: Vehicle, lang: Lang): string {
  return `${getPath(categoriaRoute[veicolo.data.categoria], lang)}/${veicolo.id}`;
}

/** Il form di consulenza riceve il veicolo già scelto (§9, step 2). */
export function enquiryPath(veicolo: Vehicle, lang: Lang): string {
  return `${getPath('enquiry', lang)}?veicolo=${encodeURIComponent(veicolo.id)}`;
}

/** Una voce di "cosa è incluso" è o una parola nota, tradotta da ui.ts, o un testo già nelle tre lingue. */
export function voceInclusaTesto(
  voce: VoceInclusa,
  lang: Lang,
  t: (key: UiKey) => string,
): string {
  return typeof voce === 'string' ? t(inclusoLabel[voce]) : voce[lang];
}

/** Ultimo segmento del percorso di categoria: `auto` in italiano, `cars`, `autos`. */
export function categoriaSegment(categoria: Categoria, lang: Lang): string {
  const completo = getPath(categoriaRoute[categoria], lang);
  const radice = getPath('fleet', lang);
  return completo.slice(radice.length + 1);
}

/** Quello che una rotta della flotta deve mostrare. */
export type FleetRouteProps =
  | { modo: 'indice' }
  | { modo: 'categoria'; categoria: Categoria }
  | { modo: 'scheda'; veicolo: Vehicle; altri: Vehicle[] };

/**
 * Genera indice, pagine di categoria e schede per una lingua.
 *
 * Aggiungere un veicolo significa aggiungere un file markdown: da lì la sua
 * pagina, la sua voce negli indici e i suoi collegamenti compaiono da soli,
 * in tutte e tre le lingue. Non c'è nessun elenco da aggiornare a mano.
 */
export async function fleetStaticPaths(lang: Lang) {
  const tutti = await getFleet();

  return [
    { params: { rest: undefined }, props: { modo: 'indice' } as FleetRouteProps },
    ...categorie.map((categoria) => ({
      params: { rest: categoriaSegment(categoria, lang) },
      props: { modo: 'categoria', categoria } as FleetRouteProps,
    })),
    ...tutti.map((veicolo) => ({
      params: { rest: `${categoriaSegment(veicolo.data.categoria, lang)}/${veicolo.id}` },
      props: { modo: 'scheda', veicolo, altri: correlati(veicolo, tutti) } as FleetRouteProps,
    })),
  ];
}
