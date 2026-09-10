import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { rm, writeFile } from 'node:fs/promises';
import { after, test, type TestContext } from 'node:test';
import { promisify } from 'node:util';
import { erroreePrezzoSignature } from '../src/lib/fleetSchema.ts';

/**
 * Il §8 non chiede solo che lo schema rifiuti il dato: chiede che la **build
 * fallisca**. Sono due cose diverse — una regola può essere giusta e non
 * essere collegata a niente — quindi qui si fa partire la build vera.
 *
 * È lento (qualche secondo) ma è l'unico modo di provare che un prezzo su un
 * veicolo signature non può arrivare in produzione.
 */
const esegui = promisify(execFile);
// Niente `_` davanti: i file che iniziano così vengono ignorati di proposito.
const fileIntruso = 'src/content/fleet/test-temporaneo-signature.md';
const fileNascosto = 'src/content/fleet/_test-temporaneo-nascosto.md';

// Rete di sicurezza: se un test muore prima della sua pulizia, qui si rimedia.
after(async () => {
  await rm(fileIntruso, { force: true });
  await rm(fileNascosto, { force: true });
});

test('la build fallisce se un veicolo signature dichiara un prezzo', async (t: TestContext) => {
  // La pulizia va fatta subito: il test dopo fa partire un'altra build e
  // questo file la farebbe fallire per il motivo sbagliato.
  t.after(async () => rm(fileIntruso, { force: true }));

  await writeFile(
    fileIntruso,
    `---
categoria: auto
segmento: signature
nome: Veicolo del test
anno: 2024
ordine: 99
prezzoIndicativo: 500
posizionamento: { it: a, en: b, de: c }
specifiche: { alimentazione: benzina, cambio: automatico, posti: 4 }
requisiti: { etaMinima: 30, anniPatente: 5 }
incluso: [consegna]
immagini:
  - alt: { it: a, en: b, de: c }
---
`,
    'utf8',
  );

  let uscita = 0;
  let output = '';

  try {
    const esito = await esegui('npx', ['astro', 'build'], { encoding: 'utf8' });
    output = esito.stdout + esito.stderr;
  } catch (errore) {
    const fallimento = errore as { code?: number; stdout?: string; stderr?: string };
    uscita = fallimento.code ?? 1;
    output = `${fallimento.stdout ?? ''}${fallimento.stderr ?? ''}`;
  }

  assert.notEqual(uscita, 0, 'la build avrebbe dovuto fallire');
  assert.ok(
    output.includes(erroreePrezzoSignature),
    `la build deve spiegare perché si è fermata. Output:\n${output.slice(-2000)}`,
  );
});

test('un veicolo con il trattino basso davanti non genera pagine', async (t: TestContext) => {
  t.after(async () => rm(fileNascosto, { force: true }));

  // È la promessa scritta in docs/aggiungere-un-veicolo.md: rinominare un file
  // `_qualcosa.md` lo toglie dal sito senza cancellarlo.
  await writeFile(
    fileNascosto,
    `---
categoria: auto
segmento: essenziale
nome: Veicolo nascosto del test
anno: 2024
ordine: 98
posizionamento: { it: a, en: b, de: c }
specifiche: { alimentazione: benzina, cambio: manuale, posti: 4 }
requisiti: { etaMinima: 25, anniPatente: 3 }
incluso: [consegna]
immagini:
  - alt: { it: a, en: b, de: c }
---
`,
    'utf8',
  );

  const esito = await esegui('npx', ['astro', 'build'], { encoding: 'utf8' });
  const output = esito.stdout + esito.stderr;

  assert.doesNotMatch(
    output,
    /_test-temporaneo-nascosto/,
    'la build non deve generare pagine per un file che comincia con _',
  );
});
