"""SouLRent — generatore del set logo.

Monogramma: geometria costruita, non tipografica. La R occupa i due terzi
superiori e chiude sulla propria linea di base; l'asta prosegue e diventa
la L. Contrasto verticale (asta 10, orizzontali 6-8) per armonizzarsi
col serif ad alto contrasto del wordmark.

Wordmark: testo convertito in tracciati. Nessuna dipendenza da font
installati, nessun vincolo di licenza in fase di deposito del marchio.
"""
import json
import os
import cairosvg
from build_wordmark import outline

INK, BONE = "#0F1113", "#F4F1EC"
OUT = "logo"
os.makedirs(OUT, exist_ok=True)
FONT = "instrument"

MONO_W, MONO_H = 68.0, 120.0
MONO_D = (
    "M0 0 L24 0 A19 19 0 0 1 24 38 "
    "L48 85 L38 85 L14 38 L10 38 "
    "L10 112 L68 112 L68 120 L0 120 Z "
    "M10 6 L24 6 A11 13 0 0 1 24 32 L10 32 Z"
)
RAW = json.load(open("wordmark_raw.json"))


def mono(h, x=0.0, y=0.0, fill=INK):
    s = h / MONO_H
    return (f'<path d="{MONO_D}" fill="{fill}" fill-rule="evenodd" '
            f'transform="translate({x:.3f} {y:.3f}) scale({s:.6f})"/>'), MONO_W * s


def word(key, cap, x_left, baseline, fill=INK, d=None, bbox=None):
    """Bordo sinistro dell'inchiostro a x_left, linea di base a y=baseline."""
    r = RAW[key]
    d = d if d is not None else r["d"]
    bb = bbox if bbox is not None else r["bbox"]
    s = cap / r["cap"]
    tx = x_left - bb[0] * s
    p = (f'<path d="{d}" fill="{fill}" transform="translate({tx:.3f} '
         f'{baseline:.3f}) scale({s:.6f} {-s:.6f})"/>')
    return p, (bb[2] - bb[0]) * s, baseline - bb[3] * s, baseline - bb[1] * s


def svg(w, h, body, title):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.2f} {h:.2f}" '
            f'width="{w:.2f}" height="{h:.2f}" role="img" aria-label="{title}">'
            f'<title>{title}</title>{body}</svg>')


def write(name, c):
    open(os.path.join(OUT, name), "w").write(c)


for t, c in (("", INK), ("-inverse", BONE)):
    p, _ = mono(MONO_H, 0, 0, c)
    write(f"logo-monogram{t}.svg", svg(MONO_W, MONO_H, p, "SouLRent monogramma"))

SQ = 512.0
for t, bg, fg in (("", INK, BONE), ("-inverse", BONE, INK)):
    h = SQ * 0.58
    _, w = mono(h)
    p, _ = mono(h, (SQ - w) / 2, (SQ - h) / 2, fg)
    write(f"logo-monogram-square{t}.svg",
          svg(SQ, SQ, f'<rect width="{SQ}" height="{SQ}" fill="{bg}"/>' + p,
              "SouLRent monogramma su quadrato"))

CAP = 100.0
r = RAW[FONT]
s = CAP / r["cap"]
top, bot = r["bbox"][3] * s, r["bbox"][1] * s
for t, c in (("", INK), ("-inverse", BONE)):
    p, w, _, _ = word(FONT, CAP, 0, top, c)
    write(f"logo-wordmark{t}.svg", svg(w, top - bot, p, "SouLRent wordmark"))

LH_CAP, RATIO, GAPF = 64.0, 1.30, 0.55
mh = LH_CAP * RATIO
_, mw = mono(mh)
gap = LH_CAP * GAPF
_, ww, _, _ = word(FONT, LH_CAP, 0, 0)
LH_W = mw + gap + ww
for t, c in (("", INK), ("-inverse", BONE)):
    pm, _ = mono(mh, 0, 0, c)
    pw, _, _, _ = word(FONT, LH_CAP, mw + gap, mh, c)
    write(f"logo-lockup-horizontal{t}.svg",
          svg(LH_W, mh, pm + pw, "SouLRent lockup orizzontale"))

tag_d, _, _, tag_bb = outline(f"fonts/_{FONT}.ttf", "CAGLIARI · SARDEGNA", tracking=155)
LV_MH, LV_CAP, TAG_CAP = 104.0, 50.0, 12.0
G1, G2, G3 = 32.0, 18.0, 18.0
_, lv_mw = mono(LV_MH)
_, lv_ww, _, _ = word(FONT, LV_CAP, 0, 0)
_, tw, _, _ = word(FONT, TAG_CAP, 0, 0, d=tag_d, bbox=tag_bb)
RULE = max(lv_ww, tw) * 0.88
LV_W = max(lv_ww, tw, RULE) + 26
LV_H = LV_MH + G1 + LV_CAP + G2 + G3 + TAG_CAP
cx = LV_W / 2
for t, c in (("", INK), ("-inverse", BONE)):
    yb = LV_MH + G1 + LV_CAP
    yr = yb + G2
    pm, _ = mono(LV_MH, cx - lv_mw / 2, 0, c)
    pw, _, _, _ = word(FONT, LV_CAP, cx - lv_ww / 2, yb, c)
    pt, _, _, _ = word(FONT, TAG_CAP, cx - tw / 2, yr + G3 + TAG_CAP, c,
                       d=tag_d, bbox=tag_bb)
    rule = (f'<rect x="{cx-RULE/2:.2f}" y="{yr:.2f}" width="{RULE:.2f}" '
            f'height="0.9" fill="{c}"/>')
    write(f"logo-lockup-vertical{t}.svg",
          svg(LV_W, LV_H, pm + pw + rule + pt, "SouLRent lockup verticale"))

fh = 32 * 0.70
_, fw = mono(fh)
p, _ = mono(fh, (32 - fw) / 2, (32 - fh) / 2, BONE)
write("favicon.svg", svg(32, 32, f'<rect width="32" height="32" fill="{INK}"/>' + p,
                         "SouLRent favicon"))

y, parts = 78.0, []
for key, label in (("instrument", "Instrument Serif"), ("fraunces", "Fraunces"),
                   ("cormorant", "Cormorant Garamond")):
    p, w, _, _ = word(key, 60, 40, y)
    parts += [p, f'<text x="40" y="{y+30:.0f}" font-family="system-ui,sans-serif" '
                 f'font-size="13" fill="#8A8781">{label}</text>']
    y += 128
write("wordmark-comparison.svg", svg(560, y - 56, "".join(parts), "Confronto wordmark"))

for src, dst, px in [("logo-monogram-square.svg", "favicon-192.png", 192),
                     ("logo-monogram-square.svg", "favicon-512.png", 512),
                     ("logo-monogram-square.svg", "apple-touch-icon.png", 180),
                     ("favicon.svg", "favicon-32.png", 32)]:
    cairosvg.svg2png(url=f"{OUT}/{src}", write_to=f"{OUT}/{dst}", output_width=px)

print(f"monogramma    {MONO_W:.0f} x {MONO_H:.0f}")
print(f"lockup orizz. {LH_W:.0f} x {mh:.0f}")
print(f"lockup vert.  {LV_W:.0f} x {LV_H:.0f}")
