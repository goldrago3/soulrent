# SouLRent — set logo

**Rev. 1 · settembre 2026**
Tutti i file sono vettoriali. Il testo è convertito in tracciati: nessuna
dipendenza da font installati e nessun vincolo di licenza in fase di deposito
del marchio.

Apri `preview.html` in un browser per vedere tutto il set in contesto.

## Il marchio

Un'unica asta verticale regge la **R** e la **L**. La R occupa i due terzi
superiori e chiude sulla propria linea di base; l'asta prosegue oltre e si
apre nel piede della L. Un solo glifo, non due lettere accostate.

Contrasto verticale — asta 10, orizzontali 6-8 sulla griglia nativa 68×120 —
così il marchio dialoga con il serif ad alto contrasto del wordmark invece
di stonarci accanto.

## File

| File | Uso |
|---|---|
| `logo-lockup-horizontal.svg` | **Primario.** Header sito, firma email, documenti |
| `logo-lockup-vertical.svg` | Biglietti, footer, cartellonistica, packaging |
| `logo-monogram.svg` | Monogramma nudo, sopra i 20 px |
| `logo-monogram-square.svg` | Avatar social, app icon, portachiavi, ricamo |
| `logo-wordmark.svg` | Solo testo, quando il monogramma è già nella stessa vista |
| `favicon.svg` | Favicon vettoriale |
| `favicon-32.png` `favicon-192.png` `favicon-512.png` | PWA e browser |
| `apple-touch-icon.png` | iOS, 180 px |
| `wordmark-comparison.svg` | Confronto tra i tre serif candidati |

Ogni SVG ha la variante `-inverse` per sfondo scuro.

## Regole

- **Area di rispetto**: margine libero pari alla larghezza dell'asta del
  monogramma, su tutti e quattro i lati.
- **Dimensione minima**: lockup orizzontale 24 px di altezza; monogramma nudo
  20 px. Sotto i 20 px usare sempre il quadrato pieno.
- **Colore**: solo `#0F1113` su chiaro o `#F4F1EC` su scuro. Mai ottone,
  mai gradienti, mai ombre.
- **Proporzioni**: non modificare il rapporto monogramma/wordmark nel lockup.

## Tipografia

Wordmark composto in **Instrument Serif Regular** (SIL Open Font License 1.1,
licenza allegata in `OFL-InstrumentSerif.txt`). La OFL consente esplicitamente
l'uso in un marchio registrato — verifica che ne restino le condizioni al
momento del deposito UIBM.

Alternative già valutate e ugualmente OFL: **Fraunces** (più caldo, più
carattere) e **Cormorant Garamond** (più classico, più leggero). Vedi
`wordmark-comparison.svg`.

## Rigenerare

```
python3 build_wordmark.py    # scarica i font, converte il testo in tracciati
python3 build_logo.py        # compone tutti i file del set
```

## Prima del deposito

- [ ] Verifica anteriorità UIBM — classe 39 (noleggio veicoli e imbarcazioni)
      e classe 43 (ricettività, per la fase SoulExperience)
- [ ] Se il logo viene rifinito da un designer esterno, chiedi dichiarazione
      scritta di originalità
- [ ] Registra `soulrent.it` e `soulrent.com` prima di depositare
