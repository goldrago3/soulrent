# Aggiungere un veicolo

Non serve toccare il codice. Si crea **un file** e il sito fa il resto.

---

## In breve

1. Crea un file in `src/content/fleet/` chiamato come vuoi che sia l'indirizzo.
   `macan.md` diventa `/flotta/auto/macan`.
2. Copia dentro il modello qui sotto e riempi i campi.
3. Metti le fotografie in `src/content/fleet/immagini/<nome-del-file>/`.
4. Salva. Se qualcosa non va, il sito te lo dice con un messaggio in italiano.

Da quel momento il veicolo compare **da solo**: nella pagina della sua
categoria, nella pagina di tutta la flotta, fra i modelli correlati degli
altri veicoli della stessa categoria, e con una sua scheda nelle tre lingue.

---

## Il modello da copiare

```yaml
---
categoria: auto            # auto · moto · mare
segmento: signature        # signature · essenziale
nome: Nome del modello
anno: 2024
ordine: 10                 # numero piccolo = compare prima

posizionamento:
  it: Una riga evocativa, non tecnica.
  en: One evocative line, not technical.
  de: Eine bildhafte Zeile, nicht technisch.

specifiche:
  alimentazione: benzina   # benzina · diesel · ibrida · elettrica
  cambio: automatico       # manuale · automatico — togli la riga per le barche
  posti: 4
  bagagli: 2               # togli la riga per le moto
  potenza: 380             # cavalli — togli la riga se non la vuoi dire

requisiti:
  etaMinima: 30
  anniPatente: 5

incluso:
  - consegna
  - secondoConducente
  - assistenza

immagini:
  - src: ./immagini/macan/1.jpg
    alt:
      it: Descrizione della foto per chi non la vede.
      en: Photo description for people who cannot see it.
      de: Bildbeschreibung für Menschen, die es nicht sehen können.
  - src: ./immagini/macan/2.jpg
    alt:
      it: Seconda foto.
      en: Second photo.
      de: Zweites Foto.
---
```

---

## I campi, uno per uno

| Campo | Cosa ci va | Obbligatorio |
|---|---|---|
| `categoria` | `auto`, `moto` o `mare` | sì |
| `segmento` | `signature` per i mezzi di punta, `essenziale` per gli altri | sì |
| `nome` | il nome del modello. Non si traduce | sì |
| `anno` | anno del mezzo | sì |
| `ordine` | in che posizione compare negli elenchi. Numero piccolo = prima | sì |
| `posizionamento` | una riga evocativa, nelle tre lingue | sì |
| `specifiche` | vedi sotto | sì |
| `requisiti` | età minima e anni di patente del conducente | sì |
| `incluso` | cosa comprende il noleggio | sì, almeno una voce |
| `immagini` | le fotografie | sì, almeno una |
| `prezzoIndicativo` | prezzo al giorno — **solo se `segmento: essenziale`** | no |
| `esempio` | scrivi `true` solo sui file di prova | no |

### Le specifiche

`alimentazione` e `cambio` si scelgono da un elenco, e vengono tradotte da sole:

- **alimentazione:** `benzina`, `diesel`, `ibrida`, `elettrica`
- **cambio:** `manuale`, `automatico`

`cambio`, `bagagli` e `potenza` si possono togliere quando non hanno senso —
una barca non ha il cambio, una moto non ha il bagagliaio. La riga sparisce
dalla scheda invece di mostrare un trattino.

### Cosa è incluso

Le voci comuni si scrivono con una parola sola e sono già tradotte:

`consegna` · `ritiro` · `secondoConducente` · `assistenza` ·
`chilometriIllimitati` · `pienoCarburante` · `skipper` · `attrezzatura` ·
`assicurazione`

Per qualcosa che non è nell'elenco, si scrive il testo nelle tre lingue:

```yaml
incluso:
  - consegna
  - assistenza
  - it: Trasferimento dall'aeroporto
    en: Airport transfer
    de: Flughafentransfer
```

### Le fotografie

Vanno in una cartella dedicata al veicolo:

```
src/content/fleet/
├── macan.md
└── immagini/
    └── macan/
        ├── 1.jpg
        └── 2.jpg
```

Nel file si scrive `src: ./immagini/macan/1.jpg`.

**La prima è la copertina:** è quella che appare negli elenchi.

Il testo `alt` non è un dettaglio: è quello che sente chi usa uno screen
reader, ed è quello che legge Google. Descrivi cosa si vede, in tre lingue.

**Se non hai ancora le foto**, togli la riga `src` e lascia solo `alt`: il
sito mostra un rettangolo grigio delle proporzioni giuste, con scritto dentro
che foto ci andrà. Non serve rimettere mano a niente quando le foto arrivano:
si aggiunge `src` e basta.

---

## La regola sui prezzi

Un veicolo `signature` **non può avere un prezzo**. Non è una convenzione:
se lo scrivi, il sito non si costruisce e ti dice esattamente perché.

```
Un veicolo del segmento "signature" non può avere prezzoIndicativo.
Il §2 di CLAUDE.md lo vieta in qualsiasi forma: togli il campo,
oppure cambia segmento in "essenziale".
```

Il prezzo dei veicoli `essenziale` compare negli elenchi e sulla scheda, ma
non fra i "modelli correlati": lì sarebbe un invito a fare confronti.

---

## Cosa succede da solo

Creato il file, senza che nessuno tocchi niente:

- nasce la scheda del veicolo, in italiano, inglese e tedesco
- il veicolo compare nella pagina della sua categoria e in quella di tutta la flotta
- compare fra i "modelli correlati" degli altri veicoli della stessa categoria
- le fotografie vengono ridimensionate, convertite in un formato leggero e
  servite nella misura giusta per ogni schermo
- il bottone "Richiedi una consulenza" della scheda porta al modulo con il
  veicolo **già scelto**
- i motori di ricerca ricevono i collegamenti fra le tre versioni linguistiche

## Se sbagli qualcosa

Il sito non si costruisce e ti dice quale file e quale campo. Per esempio:

- hai scritto `categoria: barca` → ti elenca i valori ammessi
- hai dimenticato la traduzione tedesca → ti dice quale campo manca
- hai messo un prezzo su un `signature` → ti spiega la regola

Non c'è modo di pubblicare un veicolo scritto male senza accorgersene.

---

## Togliere un veicolo

Cancella il file. Sparisce da tutte le pagine, in tutte le lingue.

Se lo vuoi solo nascondere temporaneamente, rinominalo aggiungendo un
trattino basso davanti: `_macan.md`. Sarà ignorato ma il file resta lì.
