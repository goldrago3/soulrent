import assert from 'node:assert/strict';
import { test } from 'node:test';
import { z } from 'astro/zod';
import { erroreTappeVuote, itinerarySchema } from '../src/lib/itinerarySchema.ts';

/**
 * Nei test `image()` e `reference()` sono stringhe qualsiasi: qui si provano
 * le regole di forma, non il caricamento delle foto né l'esistenza dei
 * veicoli — quella la verifica Astro in fase di build, e c'è un test suo.
 */
const schema = itinerarySchema(
  () => z.string(),
  () => z.string(),
);

function itinerario(extra: Record<string, unknown> = {}) {
  return {
    vertical: 'mare',
    titolo: { it: 'a', en: 'b', de: 'c' },
    sommario: { it: 'a', en: 'b', de: 'c' },
    durata: { valore: 8, unita: 'ore' },
    distanzaKm: 40,
    veicoliConsigliati: ['esempio-signature'],
    tappe: [{ nome: { it: 'a', en: 'b', de: 'c' }, descrizione: { it: 'a', en: 'b', de: 'c' } }],
    immagini: [{ alt: { it: 'a', en: 'b', de: 'c' } }],
    ordine: 1,
    ...extra,
  };
}

test('un itinerario completo è valido', () => {
  assert.equal(schema.safeParse(itinerario()).success, true);
});

test('un itinerario senza tappe viene rifiutato', () => {
  const esito = schema.safeParse(itinerario({ tappe: [] }));
  assert.equal(esito.success, false);
  if (esito.success) return;
  assert.ok(esito.error.issues.some((issue) => issue.message === erroreTappeVuote));
});

test('un itinerario senza veicoli consigliati è valido', () => {
  // Non tutti gli itinerari hanno un mezzo da consigliare.
  const esito = schema.safeParse(itinerario({ veicoliConsigliati: undefined }));
  assert.equal(esito.success, true);
});

test('una distanza pari a zero viene rifiutata', () => {
  assert.equal(schema.safeParse(itinerario({ distanzaKm: 0 })).success, false);
});

test('un’unità di durata inventata viene rifiutata', () => {
  const esito = schema.safeParse(itinerario({ durata: { valore: 2, unita: 'settimane' } }));
  assert.equal(esito.success, false);
});

test('un campo scritto male non passa in silenzio', () => {
  // Lo schema è `strict`: un refuso come `distanzaKM` verrebbe altrimenti
  // ignorato e la pagina mostrerebbe un dato mancante senza dire niente.
  const esito = schema.safeParse(itinerario({ distanzaKM: 40 }));
  assert.equal(esito.success, false);
});

test('i file di esempio nel repository rispettano lo schema', async () => {
  const { readdir, readFile } = await import('node:fs/promises');
  const file = (await readdir('src/content/itineraries')).filter(
    (nome: string) => nome.endsWith('.md') && !nome.startsWith('test-temporaneo-'),
  );
  assert.ok(file.length > 0, 'la cartella degli itinerari non deve essere vuota');

  for (const nome of file) {
    const testo = await readFile(`src/content/itineraries/${nome}`, 'utf8');
    assert.match(testo, /^\s*tappe:/m, `${nome}: manca l'elenco delle tappe`);
    assert.match(testo, /^\s*vertical:\s*(auto|moto|mare)\s*$/m, `${nome}: vertical mancante o non valido`);
  }
});
