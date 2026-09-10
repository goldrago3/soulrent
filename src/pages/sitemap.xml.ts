import type { APIRoute } from 'astro';
import { getAlternates, getPath, languages, type RouteKey } from '../i18n/routes';
import { categoriaRoute, getFleet } from '../lib/fleet';
import { getItineraries } from '../lib/itineraries';
import { stubRoutes } from '../lib/stubRoutes';

/**
 * Sitemap generata dalla mappa degli slug e dalle collection.
 *
 * Scritta a mano invece di usare @astrojs/sitemap: quel pacchetto sarebbe una
 * dipendenza in più (§11) e non saprebbe nulla degli slug localizzati del §7.
 * Qui ogni indirizzo porta con sé i link alle altre due lingue, che è
 * esattamente ciò che serve per farsi indicizzare nei tre mercati.
 *
 * Aggiungere un veicolo o un itinerario la aggiorna da solo.
 */

interface Voce {
  route: RouteKey;
  suffix?: string;
}

async function raccogliVoci(): Promise<Voce[]> {
  const veicoli = await getFleet();
  const itinerari = await getItineraries();

  // Le pagine-scheletro restano fuori: non hanno ancora contenuto da indicizzare.
  const daEscludere = new Set(Object.keys(stubRoutes));

  const fisse: RouteKey[] = (
    ['home', 'fleet', 'fleetCars', 'fleetMotorcycles', 'fleetBoats', 'itineraries'] as const
  ).filter((chiave) => !daEscludere.has(chiave));

  return [
    ...fisse.map((route) => ({ route })),
    ...veicoli.map((veicolo) => ({
      route: categoriaRoute[veicolo.data.categoria],
      suffix: veicolo.id,
    })),
    ...itinerari.map((itinerario) => ({ route: 'itineraries' as const, suffix: itinerario.id })),
  ];
}

function xml(testo: string): string {
  return testo.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export const GET: APIRoute = async ({ site }) => {
  const origine = site ?? new URL('https://soulrent.invalid');
  const assoluto = (percorso: string): string => new URL(percorso, origine).href;
  const voci = await raccogliVoci();

  const url = voci.flatMap((voce) => {
    const alternative = getAlternates(voce.route).map((alternativa) => ({
      hreflang: alternativa.hreflang,
      href: assoluto(voce.suffix ? `${alternativa.path}/${voce.suffix}` : alternativa.path),
    }));

    const xDefault = assoluto(
      voce.suffix ? `${getPath(voce.route, 'it')}/${voce.suffix}` : getPath(voce.route, 'it'),
    );

    const link = [
      ...alternative.map(
        (a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${xml(a.href)}"/>`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${xml(xDefault)}"/>`,
    ].join('\n');

    return languages.map((lang) => {
      const percorso = getPath(voce.route, lang);
      const loc = assoluto(voce.suffix ? `${percorso}/${voce.suffix}` : percorso);
      return `  <url>\n    <loc>${xml(loc)}</loc>\n${link}\n  </url>`;
    });
  });

  const corpo = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${url.join('\n')}
</urlset>
`;

  return new Response(corpo, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
