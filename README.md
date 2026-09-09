# SouLRent

Sito di SouLRent — noleggio nautico, auto e moto in Sardegna.
Il contesto di progetto e le regole vincolanti stanno in `CLAUDE.md`.

## Requisiti

- Node ≥ 22.12 (imposto da Astro 7)

## Comandi

| Comando | Cosa fa |
|---|---|
| `npm install` | installa le dipendenze |
| `npm run dev` | avvia il server di sviluppo su `http://localhost:4321` |
| `npm run build` | esegue `astro check` e poi il build in `dist/` |
| `npm run check` | solo il controllo dei tipi |
| `npm run preview` | serve il build di produzione in locale |

Da Astro 7 `astro dev` gira in background: `npx astro dev status`,
`npx astro dev logs` e `npx astro dev stop` lo governano.

## Dove si mettono le cose

- `src/styles/global.css` — design token dentro `@theme`. **Unica fonte dei
  colori**: la palette di default di Tailwind è azzerata, quindi una classe
  come `bg-red-500` non esiste e il build la segnala.
- `src/i18n/routes.ts` — mappa degli slug localizzati. Alimenta il selettore
  lingua, i tag `hreflang` e ogni link di navigazione.
- `src/i18n/ui.ts` — stringhe di interfaccia. L'italiano è la fonte: se una
  chiave manca in inglese o tedesco, il progetto non compila.
- `src/lib/site.ts` — dati aziendali. Tutti i `[TODO]` da riempire stanno qui.

## Variabili d'ambiente

Copia `.env.example` in `.env` per sovrascrivere i valori in locale; su Vercel
gli stessi nomi si impostano dalle impostazioni del progetto. Lo schema è
tipizzato in `astro.config.mjs`: un nome sbagliato non compila.

| Nome | Cosa | Default |
|---|---|---|
| `PUBLIC_WHATSAPP_NUMBER` | numero WhatsApp in formato E.164 | `+393345730718` |

## Prima di andare online

Il dominio non è ancora stato acquistato. In `astro.config.mjs` il campo `site`
vale `https://soulrent.invalid`: `.invalid` è un finale riservato che nessuno
può registrare, quindi il segnaposto è impossibile da confondere con un
indirizzo vero. Appena il dominio esiste, si cambia quella riga e basta:
canonical, `hreflang` e Open Graph si aggiornano da soli su tutte le pagine.

## Stato

Impalcatura e home italiana. Inglese e tedesco hanno già tutte le chiavi in
`ui.ts` ma i contenuti restano da tradurre: aspettano la sessione dedicata.

Le altre pagine del §7 esistono come scheletri, generati da
`src/pages/[...slug].astro` a partire da `src/lib/stubRoutes.ts`: servono a non
lasciare voci di menu che portano a un 404. Quando una pagina vera viene
costruita, va tolta la sua chiave da quell'elenco.

Testi e fotografie sono segnaposto `[TODO]` espliciti, con indicazione di tono
e lunghezza attesa. Non vanno riempiti con contenuto inventato (`CLAUDE.md` §13).
