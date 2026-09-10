import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { rm, writeFile } from 'node:fs/promises';
import { after, test, type TestContext } from 'node:test';
import { promisify } from 'node:util';

/**
 * Un itinerario può consigliare dei veicoli. Se lo slug di uno di quelli non
 * esiste, il collegamento sarebbe rotto: la build deve fermarsi invece di
 * pubblicare una pagina che porta da nessuna parte.
 */
const esegui = promisify(execFile);
const fileIntruso = 'src/content/itineraries/test-temporaneo-riferimento.md';

after(async () => {
  await rm(fileIntruso, { force: true });
});

test('la build fallisce se un itinerario consiglia un veicolo inesistente', async (t: TestContext) => {
  t.after(async () => rm(fileIntruso, { force: true }));

  await writeFile(
    fileIntruso,
    `---
vertical: mare
ordine: 97
titolo: { it: a, en: b, de: c }
sommario: { it: a, en: b, de: c }
durata: { valore: 4, unita: ore }
distanzaKm: 20
veicoliConsigliati: [questo-veicolo-non-esiste]
tappe:
  - nome: { it: a, en: b, de: c }
    descrizione: { it: a, en: b, de: c }
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
  assert.match(
    output,
    /questo-veicolo-non-esiste/,
    `la build deve dire quale riferimento è rotto. Output:\n${output.slice(-1500)}`,
  );
  assert.match(
    output,
    /test-temporaneo-riferimento/,
    'la build deve dire anche quale itinerario ha il riferimento rotto',
  );
});
