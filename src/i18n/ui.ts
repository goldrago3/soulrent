import type { Lang } from './routes';

/**
 * Stringhe di interfaccia (CLAUDE.md §7).
 *
 * Nessuna stringa visibile è hardcoded dentro un componente.
 * L'italiano è la fonte: le chiavi di `en` e `de` devono coincidere,
 * altrimenti il progetto non compila.
 *
 * Qui vive solo micro-copy d'interfaccia e segnaposto. Il copy definitivo
 * arriva da Luca e non si inventa nemmeno in forma plausibile (§13):
 * ogni `[TODO copy: ...]` dice tono e lunghezza attesa.
 *
 * Le voci d'interfaccia sono già tradotte. Il copy di contenuto no: il valore
 * `[TODO EN: chiave]` rimanda alla stringa italiana da cui tradurre, nella
 * sessione dedicata alle lingue.
 */

const it = {
  /* Sito */
  'site.name': 'SouLRent',
  'site.description': '[TODO copy: meta description IT, 150–160 caratteri, tono editoriale]',
  'site.ogAlt': '[TODO copy: alt dell’immagine Open Graph, IT]',

  /* Accessibilità */
  'skip.toContent': 'Vai al contenuto',

  /* Navigazione */
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

  /* Menu mobile */
  'menu.label': 'Menu',
  'menu.open': 'Apri il menu',
  'menu.close': 'Chiudi il menu',

  /* Selettore lingua */
  'lang.label': 'Lingua',
  'lang.it': 'Italiano',
  'lang.en': 'Inglese',
  'lang.de': 'Tedesco',
  'lang.current': 'Lingua corrente',

  /* Home · hero */
  'hero.eyebrow': '[TODO copy: occhiello hero, 2-4 parole — la zona o il tipo di servizio]',
  'hero.title': '[TODO copy: titolo hero, 4-8 parole, evocativo e non descrittivo]',
  'hero.subtitle': '[TODO copy: sottotitolo hero, una riga sola, max 120 caratteri — cosa fate e per chi]',
  'hero.media': '[TODO media: video hero 16:9 — descrivi cosa mostra, diventerà anche il testo alternativo]',

  /* Home · i tre vertical */
  'verticals.eyebrow': '[TODO copy: occhiello sezione vertical, 2-3 parole]',
  'verticals.title': '[TODO copy: titolo sezione vertical, 3-6 parole]',
  'verticals.cta': 'Scopri',
  'verticals.sea.line': '[TODO copy: una riga sul mare, max 90 caratteri, evocativa]',
  'verticals.sea.media': '[TODO media: foto verticale 4:5 del mare — vale anche come testo alternativo]',
  'verticals.cars.line': '[TODO copy: una riga sulle auto, max 90 caratteri, evocativa]',
  'verticals.cars.media': '[TODO media: foto verticale 4:5 di un’auto — vale anche come testo alternativo]',
  'verticals.motorcycles.line': '[TODO copy: una riga sulle moto, max 90 caratteri, evocativa]',
  'verticals.motorcycles.media': '[TODO media: foto verticale 4:5 di una moto — vale anche come testo alternativo]',

  /* Home · il servizio */
  'service.eyebrow': '[TODO copy: occhiello sezione servizio, 2-3 parole]',
  'service.title': '[TODO copy: titolo sezione servizio, 3-6 parole]',
  'service.delivery.title': 'Consegna dove sei',
  'service.delivery.text': '[TODO copy: due righe su come funziona la consegna, max 140 caratteri]',
  'service.fleet.title': 'Mezzi recenti',
  'service.fleet.text': '[TODO copy: due righe sulla flotta, max 140 caratteri]',
  'service.contact.title': 'Un solo interlocutore',
  'service.contact.text': '[TODO copy: due righe su chi risponde e come, max 140 caratteri]',
  'service.support.title': 'Assistenza diretta',
  'service.support.text': '[TODO copy: due righe sull’assistenza durante il noleggio, max 140 caratteri]',

  /* Home · recensioni */
  'reviews.eyebrow': '[TODO copy: occhiello sezione recensioni, 2-3 parole]',
  'reviews.title': '[TODO copy: titolo sezione recensioni, 3-6 parole]',
  'reviews.empty': '[TODO: nessuna recensione reale ancora inserita. Si aggiungono in src/lib/reviews.ts, mai inventate]',

  /* Home · itinerari */
  'itineraries.eyebrow': '[TODO copy: occhiello sezione itinerari, 2-3 parole]',
  'itineraries.title': '[TODO copy: titolo sezione itinerari, 3-6 parole]',
  'itineraries.cta': 'Vedi tutti gli itinerari',
  'itineraries.intro': '[TODO copy: una riga di apertura della pagina itinerari, max 120 caratteri]',
  'itineraries.all': 'Tutti',
  'itineraries.empty': 'Non ci sono ancora itinerari da mostrare.',
  'itineraries.filter': 'Filtra per tipo di mezzo',

  /* Itinerari · scheda */
  'itinerary.duration': 'Durata',
  'itinerary.distance': 'Distanza',
  'itinerary.vertical': 'Con cosa',
  'itinerary.stages': 'Le tappe',
  'itinerary.vehicles': 'Veicoli consigliati',
  'itinerary.unit.hour': 'ora',
  'itinerary.unit.hours': 'ore',
  'itinerary.unit.day': 'giorno',
  'itinerary.unit.days': 'giorni',
  'itinerary.unit.km': 'km',
  'itinerary.unit.minutes': 'min',
  'itinerary.unit.hoursShort': 'h',
  'itinerary.example.title': 'Itinerario di esempio',
  'itinerary.example.text': 'Questo non è un itinerario reale. Nomi, tempi, distanze e testi sono segnaposto, e la pagina serve solo a mostrare come si presenta. Va cancellata prima di andare online.',

  /* Home · chiamata finale */
  'cta.eyebrow': '[TODO copy: occhiello blocco finale, 2-3 parole]',
  'cta.title': '[TODO copy: titolo blocco finale, 4-8 parole]',
  'cta.text': '[TODO copy: una riga sul blocco finale, max 120 caratteri — cosa succede dopo la richiesta]',

  /* WhatsApp */
  'whatsapp.cta': 'Scrivi su WhatsApp',
  'whatsapp.label': 'Scrivi su WhatsApp — si apre in una nuova scheda',
  'whatsapp.message.default': '[TODO copy: messaggio WhatsApp precompilato generico, in prima persona come lo scriverebbe il cliente, una riga]',
  'whatsapp.message.fleet': '[TODO copy: messaggio WhatsApp dalla sezione flotta, in prima persona, una riga]',
  'whatsapp.message.itineraries': '[TODO copy: messaggio WhatsApp dalla sezione itinerari, in prima persona, una riga]',
  'whatsapp.message.enquiry': '[TODO copy: messaggio WhatsApp dal blocco finale, in prima persona, una riga]',

  /* Pagine non ancora costruite */
  'stub.eyebrow': 'In costruzione',
  'stub.text': '[TODO: contenuto di questa pagina — arriva in una sessione successiva]',
  'stub.description': '[TODO copy: meta description di questa pagina, 150–160 caratteri]',

  /* Flotta · pagine indice */
  'fleet.eyebrow': '[TODO copy: occhiello pagina flotta, 2-3 parole]',
  'fleet.title': '[TODO copy: titolo pagina flotta, 3-6 parole]',
  'fleet.intro': '[TODO copy: una riga di apertura della pagina flotta, max 120 caratteri]',
  'fleet.all': 'Tutta la flotta',
  'fleet.empty': 'Non ci sono ancora veicoli in questa categoria.',
  'fleet.count.one': 'veicolo',
  'fleet.count.many': 'veicoli',

  /* Flotta · scheda veicolo */
  'fleet.year': 'Anno',
  'fleet.specs': 'Specifiche',
  'fleet.spec.alimentazione': 'Alimentazione',
  'fleet.spec.cambio': 'Cambio',
  'fleet.spec.posti': 'Posti',
  'fleet.spec.bagagli': 'Bagagli',
  'fleet.spec.potenza': 'Potenza',
  'fleet.unit.hp': 'cv',
  'fleet.fuel.benzina': 'Benzina',
  'fleet.fuel.diesel': 'Diesel',
  'fleet.fuel.ibrida': 'Ibrida',
  'fleet.fuel.elettrica': 'Elettrica',
  'fleet.gearbox.manuale': 'Manuale',
  'fleet.gearbox.automatico': 'Automatico',

  /* Flotta · cosa è incluso */
  'fleet.included': 'Cosa è incluso',
  'fleet.incluso.consegna': 'Consegna dove sei',
  'fleet.incluso.ritiro': 'Ritiro a fine noleggio',
  'fleet.incluso.secondoConducente': 'Secondo conducente',
  'fleet.incluso.assistenza': 'Assistenza diretta',
  'fleet.incluso.chilometriIllimitati': 'Chilometri illimitati',
  'fleet.incluso.pienoCarburante': 'Pieno di carburante',
  'fleet.incluso.skipper': 'Skipper a bordo',
  'fleet.incluso.attrezzatura': 'Attrezzatura di bordo',
  'fleet.incluso.assicurazione': 'Assicurazione',

  /* Flotta · requisiti e prezzo */
  'fleet.requirements': 'Requisiti del conducente',
  'fleet.req.age': 'Età minima',
  'fleet.req.licence': 'Anni di patente',
  'fleet.unit.years': 'anni',
  'fleet.price.from': 'da',
  'fleet.price.perDay': 'al giorno',
  'fleet.price.note': '[TODO copy: cosa comprende il prezzo indicativo e cosa no, una riga]',

  /* Flotta · galleria e correlati */
  'fleet.gallery.label': 'Fotografie del veicolo',
  'fleet.gallery.previous': 'Fotografia precedente',
  'fleet.gallery.next': 'Fotografia successiva',
  'fleet.gallery.goTo': 'Vai alla fotografia',
  'fleet.gallery.position': 'di',
  'fleet.related': 'Altri modelli',
  'fleet.detail.cta': 'Richiedi una consulenza su questo veicolo',

  /* Flotta · avviso veicolo di esempio */
  'fleet.example.title': 'Veicolo di esempio',
  'fleet.example.text': 'Questo non è un veicolo reale. Nomi, numeri e testi sono segnaposto, e la scheda serve solo a mostrare come si presenta. Va cancellata prima di andare online.',

  /* Footer */
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
  'footer.positioning': '[TODO copy: una riga di posizionamento per il footer IT, tono editoriale]',

  /* Home · meta */
  'home.title': '[TODO copy: title della home IT, max 60 caratteri]',
  'home.h1': '[TODO copy: h1 della home IT]',
} as const;

export type UiKey = keyof typeof it;

type Dictionary = Record<UiKey, string>;

const en: Dictionary = {
  /* Sito */
  'site.name': 'SouLRent',
  'site.description': '[TODO EN: site.description]',
  'site.ogAlt': '[TODO EN: site.ogAlt]',

  /* Accessibilità */
  'skip.toContent': 'Skip to content',

  /* Navigazione */
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

  /* Menu mobile */
  'menu.label': 'Menu',
  'menu.open': 'Open the menu',
  'menu.close': 'Close the menu',

  /* Selettore lingua */
  'lang.label': 'Language',
  'lang.it': 'Italian',
  'lang.en': 'English',
  'lang.de': 'German',
  'lang.current': 'Current language',

  /* Home · hero */
  'hero.eyebrow': '[TODO EN: hero.eyebrow]',
  'hero.title': '[TODO EN: hero.title]',
  'hero.subtitle': '[TODO EN: hero.subtitle]',
  'hero.media': '[TODO EN: hero.media]',

  /* Home · i tre vertical */
  'verticals.eyebrow': '[TODO EN: verticals.eyebrow]',
  'verticals.title': '[TODO EN: verticals.title]',
  'verticals.cta': 'Discover',
  'verticals.sea.line': '[TODO EN: verticals.sea.line]',
  'verticals.sea.media': '[TODO EN: verticals.sea.media]',
  'verticals.cars.line': '[TODO EN: verticals.cars.line]',
  'verticals.cars.media': '[TODO EN: verticals.cars.media]',
  'verticals.motorcycles.line': '[TODO EN: verticals.motorcycles.line]',
  'verticals.motorcycles.media': '[TODO EN: verticals.motorcycles.media]',

  /* Home · il servizio */
  'service.eyebrow': '[TODO EN: service.eyebrow]',
  'service.title': '[TODO EN: service.title]',
  'service.delivery.title': '[TODO EN: service.delivery.title]',
  'service.delivery.text': '[TODO EN: service.delivery.text]',
  'service.fleet.title': '[TODO EN: service.fleet.title]',
  'service.fleet.text': '[TODO EN: service.fleet.text]',
  'service.contact.title': '[TODO EN: service.contact.title]',
  'service.contact.text': '[TODO EN: service.contact.text]',
  'service.support.title': '[TODO EN: service.support.title]',
  'service.support.text': '[TODO EN: service.support.text]',

  /* Home · recensioni */
  'reviews.eyebrow': '[TODO EN: reviews.eyebrow]',
  'reviews.title': '[TODO EN: reviews.title]',
  'reviews.empty': '[TODO EN: reviews.empty]',

  /* Home · itinerari */
  'itineraries.eyebrow': '[TODO EN: itineraries.eyebrow]',
  'itineraries.title': '[TODO EN: itineraries.title]',
  'itineraries.cta': 'See all routes',
  'itineraries.intro': '[TODO EN: itineraries.intro]',
  'itineraries.all': 'All',
  'itineraries.empty': 'There are no routes to show yet.',
  'itineraries.filter': 'Filter by vehicle type',

  /* Itinerari · scheda */
  'itinerary.duration': 'Duration',
  'itinerary.distance': 'Distance',
  'itinerary.vertical': 'Vehicle',
  'itinerary.stages': 'The stops',
  'itinerary.vehicles': 'Recommended vehicles',
  'itinerary.unit.hour': 'hour',
  'itinerary.unit.hours': 'hours',
  'itinerary.unit.day': 'day',
  'itinerary.unit.days': 'days',
  'itinerary.unit.km': 'km',
  'itinerary.unit.minutes': 'min',
  'itinerary.unit.hoursShort': 'h',
  'itinerary.example.title': 'Example route',
  'itinerary.example.text': 'This is not a real route. Names, times, distances and text are placeholders; the page only shows how a route looks. It must be deleted before going live.',

  /* Home · chiamata finale */
  'cta.eyebrow': '[TODO EN: cta.eyebrow]',
  'cta.title': '[TODO EN: cta.title]',
  'cta.text': '[TODO EN: cta.text]',

  /* WhatsApp */
  'whatsapp.cta': 'Message on WhatsApp',
  'whatsapp.label': 'Message on WhatsApp — opens in a new tab',
  'whatsapp.message.default': '[TODO EN: whatsapp.message.default]',
  'whatsapp.message.fleet': '[TODO EN: whatsapp.message.fleet]',
  'whatsapp.message.itineraries': '[TODO EN: whatsapp.message.itineraries]',
  'whatsapp.message.enquiry': '[TODO EN: whatsapp.message.enquiry]',

  /* Pagine non ancora costruite */
  'stub.eyebrow': 'Under construction',
  'stub.text': '[TODO EN: stub.text]',
  'stub.description': '[TODO EN: stub.description]',

  /* Flotta · pagine indice */
  'fleet.eyebrow': '[TODO EN: fleet.eyebrow]',
  'fleet.title': '[TODO EN: fleet.title]',
  'fleet.intro': '[TODO EN: fleet.intro]',
  'fleet.all': 'The whole fleet',
  'fleet.empty': 'No vehicles in this category yet.',
  'fleet.count.one': 'vehicle',
  'fleet.count.many': 'vehicles',

  /* Flotta · scheda veicolo */
  'fleet.year': 'Year',
  'fleet.specs': 'Specifications',
  'fleet.spec.alimentazione': 'Fuel',
  'fleet.spec.cambio': 'Transmission',
  'fleet.spec.posti': 'Seats',
  'fleet.spec.bagagli': 'Luggage',
  'fleet.spec.potenza': 'Power',
  'fleet.unit.hp': 'hp',
  'fleet.fuel.benzina': 'Petrol',
  'fleet.fuel.diesel': 'Diesel',
  'fleet.fuel.ibrida': 'Hybrid',
  'fleet.fuel.elettrica': 'Electric',
  'fleet.gearbox.manuale': 'Manual',
  'fleet.gearbox.automatico': 'Automatic',

  /* Flotta · cosa è incluso */
  'fleet.included': 'What\'s included',
  'fleet.incluso.consegna': 'Delivery where you are',
  'fleet.incluso.ritiro': 'Collection at the end of the rental',
  'fleet.incluso.secondoConducente': 'Second driver',
  'fleet.incluso.assistenza': 'Direct support',
  'fleet.incluso.chilometriIllimitati': 'Unlimited mileage',
  'fleet.incluso.pienoCarburante': 'Full tank',
  'fleet.incluso.skipper': 'Skipper on board',
  'fleet.incluso.attrezzatura': 'On-board equipment',
  'fleet.incluso.assicurazione': 'Insurance',

  /* Flotta · requisiti e prezzo */
  'fleet.requirements': 'Driver requirements',
  'fleet.req.age': 'Minimum age',
  'fleet.req.licence': 'Years of licence',
  'fleet.unit.years': 'years',
  'fleet.price.from': 'from',
  'fleet.price.perDay': 'per day',
  'fleet.price.note': '[TODO EN: fleet.price.note]',

  /* Flotta · galleria e correlati */
  'fleet.gallery.label': 'Vehicle photographs',
  'fleet.gallery.previous': 'Previous photograph',
  'fleet.gallery.next': 'Next photograph',
  'fleet.gallery.goTo': 'Go to photograph',
  'fleet.gallery.position': 'of',
  'fleet.related': 'Other models',
  'fleet.detail.cta': 'Request a consultation about this vehicle',

  /* Flotta · avviso veicolo di esempio */
  'fleet.example.title': 'Example vehicle',
  'fleet.example.text': 'This is not a real vehicle. Names, numbers and text are placeholders; the page only shows how a vehicle looks. It must be deleted before going live.',

  /* Footer */
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
  'footer.positioning': '[TODO EN: footer.positioning]',

  /* Home · meta */
  'home.title': '[TODO EN: home.title]',
  'home.h1': '[TODO EN: home.h1]',
};

const de: Dictionary = {
  /* Sito */
  'site.name': 'SouLRent',
  'site.description': '[TODO DE: site.description]',
  'site.ogAlt': '[TODO DE: site.ogAlt]',

  /* Accessibilità */
  'skip.toContent': 'Zum Inhalt springen',

  /* Navigazione */
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

  /* Menu mobile */
  'menu.label': 'Menü',
  'menu.open': 'Menü öffnen',
  'menu.close': 'Menü schließen',

  /* Selettore lingua */
  'lang.label': 'Sprache',
  'lang.it': 'Italienisch',
  'lang.en': 'Englisch',
  'lang.de': 'Deutsch',
  'lang.current': 'Aktuelle Sprache',

  /* Home · hero */
  'hero.eyebrow': '[TODO DE: hero.eyebrow]',
  'hero.title': '[TODO DE: hero.title]',
  'hero.subtitle': '[TODO DE: hero.subtitle]',
  'hero.media': '[TODO DE: hero.media]',

  /* Home · i tre vertical */
  'verticals.eyebrow': '[TODO DE: verticals.eyebrow]',
  'verticals.title': '[TODO DE: verticals.title]',
  'verticals.cta': 'Entdecken',
  'verticals.sea.line': '[TODO DE: verticals.sea.line]',
  'verticals.sea.media': '[TODO DE: verticals.sea.media]',
  'verticals.cars.line': '[TODO DE: verticals.cars.line]',
  'verticals.cars.media': '[TODO DE: verticals.cars.media]',
  'verticals.motorcycles.line': '[TODO DE: verticals.motorcycles.line]',
  'verticals.motorcycles.media': '[TODO DE: verticals.motorcycles.media]',

  /* Home · il servizio */
  'service.eyebrow': '[TODO DE: service.eyebrow]',
  'service.title': '[TODO DE: service.title]',
  'service.delivery.title': '[TODO DE: service.delivery.title]',
  'service.delivery.text': '[TODO DE: service.delivery.text]',
  'service.fleet.title': '[TODO DE: service.fleet.title]',
  'service.fleet.text': '[TODO DE: service.fleet.text]',
  'service.contact.title': '[TODO DE: service.contact.title]',
  'service.contact.text': '[TODO DE: service.contact.text]',
  'service.support.title': '[TODO DE: service.support.title]',
  'service.support.text': '[TODO DE: service.support.text]',

  /* Home · recensioni */
  'reviews.eyebrow': '[TODO DE: reviews.eyebrow]',
  'reviews.title': '[TODO DE: reviews.title]',
  'reviews.empty': '[TODO DE: reviews.empty]',

  /* Home · itinerari */
  'itineraries.eyebrow': '[TODO DE: itineraries.eyebrow]',
  'itineraries.title': '[TODO DE: itineraries.title]',
  'itineraries.cta': 'Alle Routen ansehen',
  'itineraries.intro': '[TODO DE: itineraries.intro]',
  'itineraries.all': 'Alle',
  'itineraries.empty': 'Es gibt noch keine Routen zu zeigen.',
  'itineraries.filter': 'Nach Fahrzeugart filtern',

  /* Itinerari · scheda */
  'itinerary.duration': 'Dauer',
  'itinerary.distance': 'Strecke',
  'itinerary.vertical': 'Womit',
  'itinerary.stages': 'Die Etappen',
  'itinerary.vehicles': 'Empfohlene Fahrzeuge',
  'itinerary.unit.hour': 'Stunde',
  'itinerary.unit.hours': 'Stunden',
  'itinerary.unit.day': 'Tag',
  'itinerary.unit.days': 'Tage',
  'itinerary.unit.km': 'km',
  'itinerary.unit.minutes': 'Min.',
  'itinerary.unit.hoursShort': 'Std.',
  'itinerary.example.title': 'Beispielroute',
  'itinerary.example.text': 'Dies ist keine echte Route. Namen, Zeiten, Entfernungen und Texte sind Platzhalter; die Seite zeigt nur, wie eine Route dargestellt wird. Vor dem Livegang löschen.',

  /* Home · chiamata finale */
  'cta.eyebrow': '[TODO DE: cta.eyebrow]',
  'cta.title': '[TODO DE: cta.title]',
  'cta.text': '[TODO DE: cta.text]',

  /* WhatsApp */
  'whatsapp.cta': 'Auf WhatsApp schreiben',
  'whatsapp.label': 'Auf WhatsApp schreiben — öffnet in einem neuen Tab',
  'whatsapp.message.default': '[TODO DE: whatsapp.message.default]',
  'whatsapp.message.fleet': '[TODO DE: whatsapp.message.fleet]',
  'whatsapp.message.itineraries': '[TODO DE: whatsapp.message.itineraries]',
  'whatsapp.message.enquiry': '[TODO DE: whatsapp.message.enquiry]',

  /* Pagine non ancora costruite */
  'stub.eyebrow': 'In Arbeit',
  'stub.text': '[TODO DE: stub.text]',
  'stub.description': '[TODO DE: stub.description]',

  /* Flotta · pagine indice */
  'fleet.eyebrow': '[TODO DE: fleet.eyebrow]',
  'fleet.title': '[TODO DE: fleet.title]',
  'fleet.intro': '[TODO DE: fleet.intro]',
  'fleet.all': 'Die ganze Flotte',
  'fleet.empty': 'In dieser Kategorie gibt es noch keine Fahrzeuge.',
  'fleet.count.one': 'Fahrzeug',
  'fleet.count.many': 'Fahrzeuge',

  /* Flotta · scheda veicolo */
  'fleet.year': 'Baujahr',
  'fleet.specs': 'Technische Daten',
  'fleet.spec.alimentazione': 'Antrieb',
  'fleet.spec.cambio': 'Getriebe',
  'fleet.spec.posti': 'Sitzplätze',
  'fleet.spec.bagagli': 'Gepäck',
  'fleet.spec.potenza': 'Leistung',
  'fleet.unit.hp': 'PS',
  'fleet.fuel.benzina': 'Benzin',
  'fleet.fuel.diesel': 'Diesel',
  'fleet.fuel.ibrida': 'Hybrid',
  'fleet.fuel.elettrica': 'Elektrisch',
  'fleet.gearbox.manuale': 'Schaltgetriebe',
  'fleet.gearbox.automatico': 'Automatik',

  /* Flotta · cosa è incluso */
  'fleet.included': 'Inbegriffen',
  'fleet.incluso.consegna': 'Lieferung, wo Sie sind',
  'fleet.incluso.ritiro': 'Abholung am Mietende',
  'fleet.incluso.secondoConducente': 'Zweiter Fahrer',
  'fleet.incluso.assistenza': 'Direkte Betreuung',
  'fleet.incluso.chilometriIllimitati': 'Unbegrenzte Kilometer',
  'fleet.incluso.pienoCarburante': 'Volltank',
  'fleet.incluso.skipper': 'Skipper an Bord',
  'fleet.incluso.attrezzatura': 'Bordausrüstung',
  'fleet.incluso.assicurazione': 'Versicherung',

  /* Flotta · requisiti e prezzo */
  'fleet.requirements': 'Anforderungen an den Fahrer',
  'fleet.req.age': 'Mindestalter',
  'fleet.req.licence': 'Führerscheinbesitz',
  'fleet.unit.years': 'Jahre',
  'fleet.price.from': 'ab',
  'fleet.price.perDay': 'pro Tag',
  'fleet.price.note': '[TODO DE: fleet.price.note]',

  /* Flotta · galleria e correlati */
  'fleet.gallery.label': 'Fahrzeugfotos',
  'fleet.gallery.previous': 'Vorheriges Foto',
  'fleet.gallery.next': 'Nächstes Foto',
  'fleet.gallery.goTo': 'Zum Foto',
  'fleet.gallery.position': 'von',
  'fleet.related': 'Weitere Modelle',
  'fleet.detail.cta': 'Beratung zu diesem Fahrzeug anfragen',

  /* Flotta · avviso veicolo di esempio */
  'fleet.example.title': 'Beispielfahrzeug',
  'fleet.example.text': 'Dies ist kein echtes Fahrzeug. Namen, Zahlen und Texte sind Platzhalter; die Seite zeigt nur, wie ein Fahrzeug dargestellt wird. Vor dem Livegang löschen.',

  /* Footer */
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
  'footer.positioning': '[TODO DE: footer.positioning]',

  /* Home · meta */
  'home.title': '[TODO DE: home.title]',
  'home.h1': '[TODO DE: home.h1]',
};

export const ui = { it, en, de } as const satisfies Record<Lang, Dictionary>;

/** Restituisce la funzione di traduzione per una lingua. */
export function useTranslations(lang: Lang): (key: UiKey) => string {
  return (key) => ui[lang][key];
}
