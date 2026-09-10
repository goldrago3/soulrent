"""Converte 'SouLRent' in tracciati SVG usando i font scaricati.
Il testo viene convertito in path: nessuna dipendenza da font installati,
e nessun problema di licenza in fase di deposito del marchio.
"""
import json
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.misc.transform import Transform
import uharfbuzz as hb

TEXT = "SouLRent"


def instance(path, out, axes=None):
    f = TTFont(path)
    if axes and "fvar" in f:
        f = instantiateVariableFont(f, axes, inplace=False, updateFontNames=False)
    f.save(out)
    return out


def outline(font_path, text, tracking=0.0):
    """Ritorna (path_d, advance_totale, upm) in unita' font, y verso l'alto."""
    with open(font_path, "rb") as fh:
        data = fh.read()
    face = hb.Face(data)
    hbfont = hb.Font(face)
    upm = face.upem
    hbfont.scale = (upm, upm)
    buf = hb.Buffer()
    buf.add_str(text)
    buf.guess_segment_properties()
    hb.shape(hbfont, buf, {"kern": True, "liga": True})

    tt = TTFont(font_path)
    glyf = tt.getGlyphSet()
    order = tt.getGlyphOrder()

    from fontTools.pens.boundsPen import BoundsPen

    parts = []
    x = 0.0
    bounds = None
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        name = order[info.codepoint]
        tr = Transform(1, 0, 0, 1, x + pos.x_offset, pos.y_offset)
        pen = SVGPathPen(glyf, ntos=lambda v: f"{v:.2f}")
        glyf[name].draw(TransformPen(pen, tr))
        d = pen.getCommands()
        if d:
            parts.append(d)
        bp = BoundsPen(glyf)
        glyf[name].draw(TransformPen(bp, tr))
        if bp.bounds:
            bounds = bp.bounds if bounds is None else (
                min(bounds[0], bp.bounds[0]), min(bounds[1], bp.bounds[1]),
                max(bounds[2], bp.bounds[2]), max(bounds[3], bp.bounds[3]))
        x += pos.x_advance + tracking
    return " ".join(parts), x - tracking, upm, bounds


def flip_to_svg(d, upm, cap_height, target_cap):
    """Da coordinate font (y su) a coordinate SVG (y giu'), scalate
    in modo che l'altezza delle maiuscole sia esattamente target_cap."""
    from svgpathtools import parse_path
    s = target_cap / cap_height
    return s


if __name__ == "__main__":
    jobs = {
        "instrument": ("fonts/InstrumentSerif-Regular.ttf", None),
        "fraunces": ("fonts/Fraunces-VF.ttf",
                     {"wght": 400, "opsz": 144, "SOFT": 20, "WONK": 0}),
        "cormorant": ("fonts/CormorantGaramond-VF.ttf", {"wght": 500}),
    }
    out = {}
    for key, (src, axes) in jobs.items():
        inst = f"fonts/_{key}.ttf"
        instance(src, inst, axes)
        tt = TTFont(inst)
        upm = tt["head"].unitsPerEm
        cap = getattr(tt["OS/2"], "sCapHeight", None) or int(upm * 0.7)
        d, adv, _, bb = outline(inst, TEXT, tracking=upm * 0.01)
        out[key] = {"d": d, "advance": adv, "upm": upm, "cap": cap, "bbox": bb}
        print(f"{key:12} upm={upm} cap={cap} adv={adv:.0f} bbox={[round(v) for v in bb]}")
    with open("wordmark_raw.json", "w") as fh:
        json.dump(out, fh)
