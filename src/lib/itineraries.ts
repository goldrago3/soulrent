import { getCollection, getEntries, type CollectionEntry } from 'astro:content';
import { getPath, type Lang } from '../i18n/routes';
import type { UiKey } from '../i18n/ui';
import type { Vehicle } from './fleet';

/** Accesso agli itinerari. Stesse regole della flotta: l'id è il nome del file. */

export type Itinerary = CollectionEntry<'itineraries'>;
export type Vertical = Itinerary['data']['vertical'];

export const verticali = ['mare', 'auto', 'moto'] as const;

export const verticalLabel = {
  auto: 'nav.fleetCars',
  moto: 'nav.fleetMotorcycles',
  mare: 'nav.fleetBoats',
} as const satisfies Record<Vertical, UiKey>;

function perOrdine(a: Itinerary, b: Itinerary): number {
  return a.data.ordine - b.data.ordine || a.id.localeCompare(b.id);
}

export async function getItineraries(vertical?: Vertical): Promise<Itinerary[]> {
  const tutti = await getCollection('itineraries');
  const scelti = vertical ? tutti.filter((i) => i.data.vertical === vertical) : tutti;
  return scelti.sort(perOrdine);
}

export function itineraryPath(itinerario: Itinerary, lang: Lang): string {
  return `${getPath('itineraries', lang)}/${itinerario.id}`;
}

/**
 * I veicoli consigliati, risolti in schede vere.
 *
 * Se uno slug non esiste Astro si limita a scrivere un errore nel log e va
 * avanti: la build riesce e il veicolo sparisce dalla pagina senza che
 * nessuno se ne accorga. Qui la trasformiamo in una build che fallisce —
 * un collegamento rotto è un difetto, non un dettaglio.
 */
export async function veicoliConsigliati(itinerario: Itinerary): Promise<Vehicle[]> {
  const riferimenti = itinerario.data.veicoliConsigliati;
  if (riferimenti.length === 0) return [];

  const voci = await getEntries(riferimenti);
  const mancanti = voci
    .map((voce, indice) => (voce === undefined ? riferimenti[indice]?.id : undefined))
    .filter((id): id is string => id !== undefined);

  if (mancanti.length > 0) {
    throw new Error(
      `L'itinerario "${itinerario.id}" consiglia veicoli che non esistono: ` +
        `${mancanti.join(', ')}. Controlla i nomi dei file in src/content/fleet/ ` +
        `— l'identificativo di un veicolo è il nome del suo file, senza .md.`,
    );
  }

  return voci.filter((voce): voce is Vehicle => voce !== undefined);
}

/** «8 ore», «3 giorni», con il singolare quando serve. */
export function formattaDurata(
  durata: Itinerary['data']['durata'],
  t: (key: UiKey) => string,
): string {
  const singolare = durata.valore === 1;
  const unita =
    durata.unita === 'ore'
      ? t(singolare ? 'itinerary.unit.hour' : 'itinerary.unit.hours')
      : t(singolare ? 'itinerary.unit.day' : 'itinerary.unit.days');
  return `${durata.valore} ${unita}`;
}

/** «45 min», «1 h 30». */
export function formattaTempo(minuti: number, t: (key: UiKey) => string): string {
  if (minuti < 60) return `${minuti} ${t('itinerary.unit.minutes')}`;
  const ore = Math.floor(minuti / 60);
  const resto = minuti % 60;
  const testaOre = `${ore} ${t('itinerary.unit.hoursShort')}`;
  return resto === 0 ? testaOre : `${testaOre} ${resto}`;
}

/** Quello che una rotta degli itinerari deve mostrare. */
export type ItineraryRouteProps =
  | { modo: 'indice' }
  | { modo: 'scheda'; itinerario: Itinerary; veicoli: Vehicle[] };

/**
 * Genera indice e schede per una lingua.
 *
 * Aggiungere un itinerario significa aggiungere un file markdown: la sua
 * pagina, la sua voce nell'indice e la sua anteprima in home compaiono da
 * sole, in tutte e tre le lingue.
 */
export async function itineraryStaticPaths() {
  const tutti = await getItineraries();

  return [
    { params: { rest: undefined }, props: { modo: 'indice' } as ItineraryRouteProps },
    ...(await Promise.all(
      tutti.map(async (itinerario) => ({
        params: { rest: itinerario.id },
        props: {
          modo: 'scheda',
          itinerario,
          veicoli: await veicoliConsigliati(itinerario),
        } as ItineraryRouteProps,
      })),
    )),
  ];
}
