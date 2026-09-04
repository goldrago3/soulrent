import type { RouteKey } from '../i18n/routes';
import type { UiKey } from '../i18n/ui';

/**
 * Struttura della navigazione, dichiarata una volta sola.
 * I componenti leggono da qui: nessuna voce di menu scritta a mano nel markup.
 */
export interface NavItem {
  route: RouteKey;
  label: UiKey;
  /** Sottovoci mostrate nel menu mobile e nel footer, non nella barra desktop. */
  children?: NavItem[];
}

export const primaryNav: readonly NavItem[] = [
  {
    route: 'fleet',
    label: 'nav.fleet',
    children: [
      { route: 'fleetCars', label: 'nav.fleetCars' },
      { route: 'fleetMotorcycles', label: 'nav.fleetMotorcycles' },
      { route: 'fleetBoats', label: 'nav.fleetBoats' },
    ],
  },
  { route: 'itineraries', label: 'nav.itineraries' },
  { route: 'howItWorks', label: 'nav.howItWorks' },
  { route: 'about', label: 'nav.about' },
  { route: 'contact', label: 'nav.contact' },
];

/** Meteo e partner restano fuori dalla barra principale per non affollarla. */
export const secondaryNav: readonly NavItem[] = [
  { route: 'conditions', label: 'nav.conditions' },
  { route: 'partners', label: 'nav.partners' },
];

export const footerExplore: readonly NavItem[] = [
  { route: 'fleetCars', label: 'nav.fleetCars' },
  { route: 'fleetMotorcycles', label: 'nav.fleetMotorcycles' },
  { route: 'fleetBoats', label: 'nav.fleetBoats' },
  { route: 'itineraries', label: 'nav.itineraries' },
  { route: 'conditions', label: 'nav.conditions' },
];

export const footerCompany: readonly NavItem[] = [
  { route: 'howItWorks', label: 'nav.howItWorks' },
  { route: 'about', label: 'nav.about' },
  { route: 'partners', label: 'nav.partners' },
  { route: 'contact', label: 'nav.contact' },
];
