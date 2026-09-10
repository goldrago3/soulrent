---
# ─────────────────────────────────────────────────────────────────────────
#  VEICOLO DI ESEMPIO — DA CANCELLARE
#
#  Questo file non descrive un veicolo reale. Nomi, numeri e testi sono
#  segnaposto, messi qui solo per mostrare come si presenta una scheda.
#
#  Quando arriva un veicolo vero: cancella questo file e creane uno nuovo
#  copiando la struttura. Istruzioni in docs/aggiungere-un-veicolo.md
#
#  Finché `esempio: true` resta scritto qui sotto, il sito mostra un avviso
#  ben visibile sulla scheda. Non toglierlo prima di aver messo dati veri.
# ─────────────────────────────────────────────────────────────────────────
esempio: true

categoria: auto
segmento: signature
nome: 'ESEMPIO signature — non è un veicolo reale'
anno: 2024
ordine: 1

posizionamento:
  it: '[ESEMPIO da sostituire: una riga evocativa sul veicolo, non tecnica]'
  en: '[EXAMPLE to replace: one evocative line about the vehicle, not technical]'
  de: '[BEISPIEL zu ersetzen: eine bildhafte Zeile zum Fahrzeug, nicht technisch]'

# Nessun prezzoIndicativo: il segmento `signature` non espone prezzi (§2).
# Se lo aggiungi, la build si ferma con un errore che te lo spiega.

specifiche:
  alimentazione: benzina
  cambio: automatico
  posti: 4
  bagagli: 2
  potenza: 100 # numero segnaposto

requisiti:
  etaMinima: 30
  anniPatente: 5

incluso:
  - consegna
  - ritiro
  - secondoConducente
  - assistenza
  # Voce libera, per quando non basta una parola dell'elenco:
  - it: '[ESEMPIO da sostituire: una voce libera, scritta nelle tre lingue]'
    en: '[EXAMPLE to replace: a free-form item, written in all three languages]'
    de: '[BEISPIEL zu ersetzen: ein freier Eintrag in allen drei Sprachen]'

# `src` omesso di proposito: senza fotografia il sito mostra un rettangolo
# grigio con le proporzioni giuste. Mai foto scaricate da internet (§13).
immagini:
  - alt:
      it: '[ESEMPIO: foto di copertina, orizzontale 3:2 — descrivi cosa mostra]'
      en: '[EXAMPLE: cover photo, landscape 3:2 — describe what it shows]'
      de: '[BEISPIEL: Titelbild, quer 3:2 — beschreibe, was zu sehen ist]'
  - alt:
      it: '[ESEMPIO: seconda foto, orizzontale 3:2]'
      en: '[EXAMPLE: second photo, landscape 3:2]'
      de: '[BEISPIEL: zweites Bild, quer 3:2]'
  - alt:
      it: '[ESEMPIO: terza foto, orizzontale 3:2]'
      en: '[EXAMPLE: third photo, landscape 3:2]'
      de: '[BEISPIEL: drittes Bild, quer 3:2]'
---
