import assert from 'node:assert/strict';
import { test } from 'node:test';
import { z } from 'astro/zod';
import { erroreePrezzoSignature, fleetSchema } from '../src/lib/fleetSchema.ts';

/**
 * Il vincolo del §8: se `segmento` è `signature`, `prezzoIndicativo` deve
 * essere assente. Non è una preferenza estetica — è la prima delle tre
 * conseguenze non negoziabili del §2 — quindi ha un test suo.
 *
 * Nei test `image()` è una stringa qualsiasi: qui si prova la regola di
 * business, non il caricamento delle fotografie.
 */
const schema = fleetSchema(() => z.string());

function veicolo(extra: Record<string, unknown> = {}) {
  return {
    categoria: 'auto',
    segmento: 'signature',
    nome: 'Prova',
    posizionamento: { it: 'a', en: 'b', de: 'c' },
    anno: 2024,
    specifiche: { alimentazione: 'benzina', cambio: 'automatico', posti: 4 },
    requisiti: { etaMinima: 30, anniPatente: 5 },
    incluso: ['consegna'],
    immagini: [{ alt: { it: 'a', en: 'b', de: 'c' } }],
    ordine: 1,
    ...extra,
  };
}

test('un veicolo signature senza prezzo è valido', () => {
  const esito = schema.safeParse(veicolo());
  assert.equal(esito.success, true);
});

test('un veicolo signature con prezzo viene rifiutato', () => {
  const esito = schema.safeParse(veicolo({ prezzoIndicativo: 500 }));

  assert.equal(esito.success, false, 'lo schema avrebbe dovuto rifiutare il veicolo');
  if (esito.success) return;

  const problema = esito.error.issues.find((issue) => issue.path.join('.') === 'prezzoIndicativo');
  assert.ok(problema, 'l’errore deve indicare il campo prezzoIndicativo');
  assert.equal(problema?.message, erroreePrezzoSignature);
});

test('un prezzo pari a zero non aggira il vincolo', () => {
  // Zero è falsy: un controllo scritto male lo lascerebbe passare.
  const esito = schema.safeParse(veicolo({ prezzoIndicativo: 0 }));
  assert.equal(esito.success, false);
});

test('un veicolo essenziale con prezzo è valido', () => {
  const esito = schema.safeParse(veicolo({ segmento: 'essenziale', prezzoIndicativo: 90 }));
  assert.equal(esito.success, true);
});

test('un veicolo essenziale senza prezzo è valido', () => {
  const esito = schema.safeParse(veicolo({ segmento: 'essenziale' }));
  assert.equal(esito.success, true);
});

test('i file di esempio nel repository rispettano lo schema', async () => {
  const { readdir, readFile } = await import('node:fs/promises');
  const matter = (testo: string) => testo.split('---')[1] ?? '';

  // `test-temporaneo-` lo crea e lo cancella fleet-build.test.ts.
  const file = (await readdir('src/content/fleet')).filter(
    (nome: string) => nome.endsWith('.md') && !nome.startsWith('test-temporaneo-'),
  );
  assert.ok(file.length > 0, 'la cartella della flotta non deve essere vuota');

  for (const nome of file) {
    const testo = await readFile(`src/content/fleet/${nome}`, 'utf8');
    // Un veicolo signature non deve mai avere quel campo, nemmeno commentato male.
    if (/segmento:\s*signature/.test(matter(testo))) {
      assert.doesNotMatch(
        matter(testo),
        /^\s*prezzoIndicativo:/m,
        `${nome}: un veicolo signature non può dichiarare prezzoIndicativo`,
      );
    }
  }
});
