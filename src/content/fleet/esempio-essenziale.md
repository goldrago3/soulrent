---
# ─────────────────────────────────────────────────────────────────────────
#  VEICOLO DI ESEMPIO — DA CANCELLARE
#
#  Questo file non descrive un veicolo reale. Nomi, numeri e testi sono
#  segnaposto, messi qui solo per mostrare come si presenta una scheda.
#
#  A differenza dell'altro esempio, questo è di segmento `essenziale`:
#  è l'unico caso in cui è ammesso un prezzo indicativo (§2).
#
#  Quando arriva un veicolo vero: cancella questo file e creane uno nuovo.
#  Istruzioni in docs/aggiungere-un-veicolo.md
# ─────────────────────────────────────────────────────────────────────────
esempio: true

categoria: auto
segmento: essenziale
nome: 'ESEMPIO essenziale — non è un veicolo reale'
anno: 2023
ordine: 2

posizionamento:
  it: '[ESEMPIO da sostituire: una riga sul veicolo, sobria, non tecnica]'
  en: '[EXAMPLE to replace: one plain line about the vehicle, not technical]'
  de: '[BEISPIEL zu ersetzen: eine schlichte Zeile zum Fahrzeug, nicht technisch]'

# Ammesso solo perché il segmento è `essenziale`. Numero segnaposto.
prezzoIndicativo: 111

specifiche:
  alimentazione: diesel
  cambio: manuale
  posti: 5
  bagagli: 3
  potenza: 100 # numero segnaposto

requisiti:
  etaMinima: 25
  anniPatente: 3

incluso:
  - consegna
  - chilometriIllimitati
  - assicurazione

immagini:
  - alt:
      it: '[ESEMPIO: foto di copertina, orizzontale 3:2 — descrivi cosa mostra]'
      en: '[EXAMPLE: cover photo, landscape 3:2 — describe what it shows]'
      de: '[BEISPIEL: Titelbild, quer 3:2 — beschreibe, was zu sehen ist]'
  - alt:
      it: '[ESEMPIO: seconda foto, orizzontale 3:2]'
      en: '[EXAMPLE: second photo, landscape 3:2]'
      de: '[BEISPIEL: zweites Bild, quer 3:2]'
---
