---
# ─────────────────────────────────────────────────────────────────────────
#  ITINERARIO DI ESEMPIO — DA CANCELLARE
#
#  Non è un itinerario reale. Nomi, tempi, distanze e testi sono segnaposto,
#  messi qui solo per mostrare come si presenta la pagina.
#
#  Finché `esempio: true` resta scritto qui sotto, il sito mostra un avviso
#  ben visibile. Non toglierlo prima di aver messo dati veri.
#
#  Istruzioni in docs/aggiungere-un-itinerario.md
# ─────────────────────────────────────────────────────────────────────────
esempio: true

vertical: mare
ordine: 1

titolo:
  it: '[ESEMPIO da sostituire: nome dell’itinerario, 2-5 parole]'
  en: '[EXAMPLE to replace: route name, 2-5 words]'
  de: '[BEISPIEL zu ersetzen: Name der Route, 2-5 Wörter]'

sommario:
  it: '[ESEMPIO da sostituire: una riga che dice dove si va e perché, max 140 caratteri]'
  en: '[EXAMPLE to replace: one line saying where you go and why, max 140 characters]'
  de: '[BEISPIEL zu ersetzen: eine Zeile zu Ziel und Grund, max 140 Zeichen]'

# Numeri segnaposto.
durata:
  valore: 8
  unita: ore
distanzaKm: 40

# Slug di veicoli esistenti in src/content/fleet/.
# Se scrivi uno slug che non esiste, la build si ferma.
veicoliConsigliati:
  - esempio-signature

tappe:
  - nome:
      it: '[ESEMPIO: nome della prima tappa]'
      en: '[EXAMPLE: name of the first stop]'
      de: '[BEISPIEL: Name des ersten Stopps]'
    descrizione:
      it: '[ESEMPIO da sostituire: cosa si vede e cosa si fa qui, 2-4 righe]'
      en: '[EXAMPLE to replace: what you see and do here, 2-4 lines]'
      de: '[BEISPIEL zu ersetzen: was es hier zu sehen und tun gibt, 2-4 Zeilen]'
    tempoMinuti: 90
  - nome:
      it: '[ESEMPIO: nome della seconda tappa]'
      en: '[EXAMPLE: name of the second stop]'
      de: '[BEISPIEL: Name des zweiten Stopps]'
    descrizione:
      it: '[ESEMPIO da sostituire: cosa si vede e cosa si fa qui, 2-4 righe]'
      en: '[EXAMPLE to replace: what you see and do here, 2-4 lines]'
      de: '[BEISPIEL zu ersetzen: was es hier zu sehen und tun gibt, 2-4 Zeilen]'
    tempoMinuti: 120
  - nome:
      it: '[ESEMPIO: nome della terza tappa]'
      en: '[EXAMPLE: name of the third stop]'
      de: '[BEISPIEL: Name des dritten Stopps]'
    descrizione:
      it: '[ESEMPIO da sostituire: cosa si vede e cosa si fa qui, 2-4 righe]'
      en: '[EXAMPLE to replace: what you see and do here, 2-4 lines]'
      de: '[BEISPIEL zu ersetzen: was es hier zu sehen und tun gibt, 2-4 Zeilen]'

# `src` omesso: senza fotografia il sito mostra un rettangolo grigio delle
# proporzioni giuste. Mai foto scaricate da internet (§13).
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
