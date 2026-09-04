import type { Lang } from './routes';

/**
 * Stringhe di interfaccia (CLAUDE.md §7).
 *
 * Nessuna stringa visibile è hardcoded dentro un componente.
 * L'italiano è la fonte: le chiavi di `en` e `de` devono coincidere,
 * altrimenti il progetto non compila.
 *
 * Qui vive solo micro-copy d'interfaccia. Tutto ciò che è contenuto —
 * claim, descrizioni, dati aziendali, tempi di risposta — resta [TODO]
 * finché non arriva da Luca (§13).
 */

const it = {
  'site.name': 'SouLRent',
  'site.description': '[TODO copy: meta description IT, 150–160 caratteri, tono editoriale]',
  'site.ogAlt': '[TODO copy: alt dell’immagine Open Graph, IT]',

  'skip.toContent': 'Vai al contenuto',

  'nav.label': 'Navigazione principale',
  'nav.fleet': 'Flotta',
  'nav.fleetCars': 'Auto',
  'nav.fleetMotorcycles': 'Moto',
  'nav.fleetBoats': 'Mare',
  'nav.itineraries': 'Itinerari',
  'nav.howItWorks': 'Come funziona',
  'nav.about': 'Chi siamo',
  'nav.contact': 'Contatti',
  'nav.conditions': 'Meteo',
  'nav.partners': 'Partner',
  'nav.enquiry': 'Richiedi una consulenza',

  'menu.label': 'Menu',
  'menu.open': 'Apri il menu',
  'menu.close': 'Chiudi il menu',

  'lang.label': 'Lingua',
  'lang.it': 'Italiano',
  'lang.en': 'Inglese',
  'lang.de': 'Tedesco',
  'lang.current': 'Lingua corrente',

  'footer.explore': 'Esplora',
  'footer.company': 'Studio',
  'footer.contact': 'Contatti',
  'footer.legal': 'Note legali',
  'footer.privacy': 'Privacy',
  'footer.cookies': 'Cookie',
  'footer.terms': 'Condizioni di noleggio',
  'footer.rights': 'Tutti i diritti riservati',
  'footer.vat': 'Partita IVA',
  'footer.base': 'Base operativa',

  'home.title': '[TODO copy: title della home IT, max 60 caratteri]',
} as const;

export type UiKey = keyof typeof it;

type Dictionary = Record<UiKey, string>;

const en: Dictionary = {
  'site.name': 'SouLRent',
  'site.description': '[TODO copy: meta description EN, 150–160 characters, editorial tone]',
  'site.ogAlt': '[TODO copy: Open Graph image alt, EN]',

  'skip.toContent': 'Skip to content',

  'nav.label': 'Main navigation',
  'nav.fleet': 'Fleet',
  'nav.fleetCars': 'Cars',
  'nav.fleetMotorcycles': 'Motorcycles',
  'nav.fleetBoats': 'Boats',
  'nav.itineraries': 'Routes',
  'nav.howItWorks': 'How it works',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.conditions': 'Conditions',
  'nav.partners': 'Partners',
  'nav.enquiry': 'Request a consultation',

  'menu.label': 'Menu',
  'menu.open': 'Open the menu',
  'menu.close': 'Close the menu',

  'lang.label': 'Language',
  'lang.it': 'Italian',
  'lang.en': 'English',
  'lang.de': 'German',
  'lang.current': 'Current language',

  'footer.explore': 'Explore',
  'footer.company': 'Studio',
  'footer.contact': 'Contact',
  'footer.legal': 'Legal',
  'footer.privacy': 'Privacy',
  'footer.cookies': 'Cookies',
  'footer.terms': 'Rental terms',
  'footer.rights': 'All rights reserved',
  'footer.vat': 'VAT number',
  'footer.base': 'Operating base',

  'home.title': '[TODO copy: home title EN, max 60 characters]',
};

const de: Dictionary = {
  'site.name': 'SouLRent',
  'site.description': '[TODO copy: Meta-Description DE, 150–160 Zeichen, redaktioneller Ton]',
  'site.ogAlt': '[TODO copy: Alt-Text des Open-Graph-Bildes, DE]',

  'skip.toContent': 'Zum Inhalt springen',

  'nav.label': 'Hauptnavigation',
  'nav.fleet': 'Flotte',
  'nav.fleetCars': 'Autos',
  'nav.fleetMotorcycles': 'Motorräder',
  'nav.fleetBoats': 'Boote',
  'nav.itineraries': 'Routen',
  'nav.howItWorks': 'Ablauf',
  'nav.about': 'Über uns',
  'nav.contact': 'Kontakt',
  'nav.conditions': 'Wetter',
  'nav.partners': 'Partner',
  'nav.enquiry': 'Beratung anfragen',

  'menu.label': 'Menü',
  'menu.open': 'Menü öffnen',
  'menu.close': 'Menü schließen',

  'lang.label': 'Sprache',
  'lang.it': 'Italienisch',
  'lang.en': 'Englisch',
  'lang.de': 'Deutsch',
  'lang.current': 'Aktuelle Sprache',

  'footer.explore': 'Entdecken',
  'footer.company': 'Studio',
  'footer.contact': 'Kontakt',
  'footer.legal': 'Rechtliches',
  'footer.privacy': 'Datenschutz',
  'footer.cookies': 'Cookies',
  'footer.terms': 'Mietbedingungen',
  'footer.rights': 'Alle Rechte vorbehalten',
  'footer.vat': 'USt-IdNr.',
  'footer.base': 'Betriebsbasis',

  'home.title': '[TODO copy: Home-Title DE, max 60 Zeichen]',
};

export const ui = { it, en, de } as const satisfies Record<Lang, Dictionary>;

/** Restituisce la funzione di traduzione per una lingua. */
export function useTranslations(lang: Lang): (key: UiKey) => string {
  return (key) => ui[lang][key];
}
