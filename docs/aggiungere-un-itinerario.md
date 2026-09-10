# Aggiungere un itinerario

Stesso meccanismo dei veicoli: si crea **un file** e il sito fa il resto.

Gli itinerari sono la pagina che porta traffico gratuito e che si apprezza nel
tempo invece di deprezzarsi. Vale la pena scriverli lunghi e specifici.

---

## In breve

1. Crea un file in `src/content/itineraries/` chiamato come vuoi che sia
   l'indirizzo. `golfo-degli-angeli.md` diventa `/itinerari/golfo-degli-angeli`.
2. Copia il modello qui sotto e riempi i campi.
3. Metti le fotografie in `src/content/itineraries/immagini/<nome-del-file>/`.
4. Salva. Se qualcosa non va, il sito te lo dice con un messaggio in italiano.

---

## Il modello da copiare

```yaml
---
vertical: mare             # auto · moto · mare
ordine: 10                 # numero piccolo = compare prima

titolo:
  it: Golfo degli Angeli in gommone
  en: Golfo degli Angeli by dinghy
  de: Golfo degli Angeli mit dem Schlauchboot

sommario:
  it: Sei cale in una giornata, partendo da Cagliari.
  en: Six coves in a day, starting from Cagliari.
  de: Sechs Buchten an einem Tag, ab Cagliari.

durata:
  valore: 8
  unita: ore               # ore · giorni
distanzaKm: 40

# Nomi dei file in src/content/fleet/, senza .md.
# Se ne scrivi uno che non esiste, il sito non si costruisce.
veicoliConsigliati:
  - gommone-40cv

tappe:
  - nome:
      it: Cala Fighera
      en: Cala Fighera
      de: Cala Fighera
    descrizione:
      it: Due o tre righe su cosa si vede e cosa si fa qui.
      en: Two or three lines about what you see and do here.
      de: Zwei bis drei Zeilen zu Sehenswertem und Aktivitäten.
    tempoMinuti: 90        # facoltativo

immagini:
  - src: ./immagini/golfo-degli-angeli/1.jpg
    alt:
      it: Descrizione della foto per chi non la vede.
      en: Photo description for people who cannot see it.
      de: Bildbeschreibung für Menschen, die es nicht sehen können.
---
```

---

## I campi, uno per uno

| Campo | Cosa ci va | Obbligatorio |
|---|---|---|
| `vertical` | `auto`, `moto` o `mare` — decide anche il filtro nell'indice | sì |
| `ordine` | posizione negli elenchi. Numero piccolo = prima | sì |
| `titolo` | il nome dell'itinerario, nelle tre lingue | sì |
| `sommario` | una riga che dice dove si va e perché | sì |
| `durata` | `valore` più `unita` (`ore` o `giorni`) | sì |
| `distanzaKm` | chilometri totali | sì |
| `tappe` | almeno una. Vedi sotto | sì |
| `immagini` | almeno una | sì |
| `veicoliConsigliati` | quali mezzi suggerisci | no |
| `esempio` | scrivi `true` solo sui file di prova | no |

### Le tappe

Ogni tappa ha un nome, una descrizione e, se vuoi, quanto dura.

```yaml
tappe:
  - nome: { it: Cala Fighera, en: Cala Fighera, de: Cala Fighera }
    descrizione:
      it: Cosa si vede, dove si ancora, se c'è ombra.
      en: What you see, where to anchor, whether there is shade.
      de: Was es zu sehen gibt, wo man ankert, ob es Schatten gibt.
    tempoMinuti: 90
```

`tempoMinuti` viene scritto come «45 min» sotto l'ora e come «1 h 30» sopra.
Se togli la riga, il tempo sparisce invece di mostrare un trattino.

**Scrivile lunghe.** La roadmap punta a 800-1.200 parole per itinerario: è il
contenuto che i motori di risposta citano quando qualcuno chiede *«cosa vedere
in Sardegna in moto»*.

### I veicoli consigliati

Si scrivono con il nome del file del veicolo, senza `.md`. Compaiono in fondo
alla pagina come schede cliccabili, **senza prezzo** — lì sarebbe un invito al
confronto.

Se sbagli un nome, il sito non si costruisce e ti dice quale:

```
L'itinerario "golfo-degli-angeli" consiglia veicoli che non esistono:
gommone-40cvv. Controlla i nomi dei file in src/content/fleet/ —
l'identificativo di un veicolo è il nome del suo file, senza .md.
```

### Le fotografie

Come per i veicoli: cartella dedicata, la prima è la copertina, l'`alt` va
scritto nelle tre lingue.

**Se non hai ancora le foto**, togli la riga `src` e lascia solo `alt`: compare
un rettangolo grigio delle proporzioni giuste con scritto che foto ci andrà.

---

## Cosa succede da solo

- nasce la pagina dell'itinerario, in italiano, inglese e tedesco
- compare nell'indice `/itinerari` e nel filtro del suo tipo di mezzo
- se è fra i primi tre per `ordine`, compare **in home**
- i veicoli consigliati diventano schede cliccabili
- finisce nella sitemap, con i collegamenti fra le tre lingue

## Togliere o nascondere

Cancella il file per toglierlo. Rinominalo `_golfo-degli-angeli.md` per
nasconderlo temporaneamente senza perderlo.
