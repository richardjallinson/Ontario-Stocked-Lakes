"""
Ontario Stocked Lakes — app icon.

Draws a brook trout (speckled trout, Ontario's most-stocked species) inside the
outline of a lake, on the same deep navy the Estate File family uses.

Everything is drawn at 4x and downsampled, because PIL has no anti-aliasing:
without supersampling every curve comes out with visible stair-stepping, which
is most of what makes a generated icon look amateur.

Shapes are Catmull-Rom splines through hand-placed control points rather than
polygons, for the same reason — a fish built from straight segments reads as
clip art no matter how good the colours are.

Run:  python3 tools/icon.py            write the icon set
      python3 tools/icon.py preview    also write a home-screen size sheet
"""
from PIL import Image, ImageDraw, ImageFilter
import sys, os, math, json

S = 4096          # supersample canvas
OUT = 1024        # final master size

# ---------------------------------------------------------------- palette
NAVY_TOP   = (0x0E, 0x1C, 0x2E)
NAVY_BOT   = (0x17, 0x31, 0x4D)
LAKE_TOP   = (0x16, 0x33, 0x50)
LAKE_BOT   = (0x1E, 0x48, 0x6E)
CONTOUR    = (0x6E, 0xA6, 0xCE)
BACK_DARK  = (0x12, 0x2A, 0x38)   # trout dorsal
FIN_DARK   = (0x1A, 0x3B, 0x45)   # fins/tail, lifted off the water
FLANK_MID  = (0x2C, 0x5A, 0x63)
BELLY      = (0xD9, 0x9A, 0x46)   # warm amber belly
BELLY_LOW  = (0xC0, 0x7A, 0x30)
CREAM      = (0xF2, 0xE7, 0xD2)
RED_SPOT   = (0xC0, 0x3A, 0x2E)
BLUE_HALO  = (0x8F, 0xC2, 0xE0)
FIN_EDGE   = (0xF4, 0xEC, 0xDD)


# ---------------------------------------------------------------- geometry
def catmull(points, closed=True, steps=28):
    """Catmull-Rom spline through `points`, returned as a dense polygon."""
    pts = list(points)
    if closed:
        pts = [pts[-1]] + pts + [pts[0], pts[1]]
    else:
        pts = [pts[0]] + pts + [pts[-1]]
    out = []
    for i in range(len(pts) - 3):
        p0, p1, p2, p3 = pts[i], pts[i + 1], pts[i + 2], pts[i + 3]
        for s in range(steps):
            t = s / steps
            t2, t3 = t * t, t * t * t
            x = 0.5 * ((2 * p1[0]) + (-p0[0] + p2[0]) * t +
                       (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 +
                       (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3)
            y = 0.5 * ((2 * p1[1]) + (-p0[1] + p2[1]) * t +
                       (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 +
                       (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3)
            out.append((x, y))
    return out


def gradient(size, top, bottom, box=None):
    """Vertical gradient image, optionally spanning only `box` vertically."""
    g = Image.new("RGB", (size, size), top)
    d = ImageDraw.Draw(g)
    y0, y1 = (0, size) if box is None else box
    span = max(1, y1 - y0)
    for y in range(size):
        t = min(1.0, max(0.0, (y - y0) / span))
        d.line([(0, y), (size, y)],
               fill=(int(top[0] + (bottom[0] - top[0]) * t),
                     int(top[1] + (bottom[1] - top[1]) * t),
                     int(top[2] + (bottom[2] - top[2]) * t)))
    return g


def mask_from(poly):
    m = Image.new("L", (S, S), 0)
    ImageDraw.Draw(m).polygon(poly, fill=255)
    return m


def scale(pts, box):
    """Map normalised (0..1) points into a pixel box (x, y, w, h)."""
    x, y, w, hgt = box
    return [(x + px * w, y + py * hgt) for px, py in pts]


# ---------------------------------------------------------------- the lake
def lake_outline():
    """An irregular, believable lake — not a circle, not a blob."""
    pts = [
        (0.400, 0.045), (0.610, 0.070), (0.755, 0.150),
        (0.880, 0.170), (0.965, 0.300), (0.950, 0.470),
        (0.870, 0.640), (0.720, 0.760), (0.560, 0.830),
        (0.380, 0.900), (0.215, 0.870), (0.115, 0.740),
        (0.090, 0.590), (0.030, 0.470), (0.060, 0.320),
        (0.170, 0.180), (0.270, 0.090),
    ]
    return pts


def shrink(pts, k, cx=0.5, cy=0.5):
    return [(cx + (x - cx) * k, cy + (y - cy) * k) for x, y in pts]


# --------------------------------------------------------------- the trout
def trout_body():
    """Brook trout in profile, facing left. Deep-bodied, blunt snout."""
    return [
        (0.018, 0.492),   # snout
        (0.068, 0.396),   # top of head
        (0.178, 0.330),
        (0.330, 0.296),   # shoulder
        (0.470, 0.302),   # dorsal origin
        (0.618, 0.356),
        (0.730, 0.428),   # peduncle top
        (0.784, 0.470),
        (0.784, 0.556),   # narrow peduncle
        (0.726, 0.600),
        (0.606, 0.676),
        (0.440, 0.732),   # deepest belly
        (0.286, 0.716),
        (0.140, 0.640),
        (0.040, 0.552),   # chin
    ]


def trout_tail():
    return [(0.770, 0.470), (0.858, 0.372), (0.962, 0.318),
            (0.930, 0.512), (0.962, 0.706), (0.858, 0.652), (0.770, 0.556)]


def dorsal_fin():
    return [(0.412, 0.300), (0.470, 0.198), (0.566, 0.196),
            (0.560, 0.262), (0.516, 0.310)]


def adipose_fin():
    return [(0.652, 0.344), (0.700, 0.288), (0.726, 0.300), (0.706, 0.366)]


def pectoral_fin():
    return [(0.212, 0.612), (0.318, 0.708), (0.330, 0.752),
            (0.258, 0.724), (0.196, 0.656)]


def pelvic_fin():
    return [(0.418, 0.718), (0.498, 0.796), (0.492, 0.828),
            (0.412, 0.784), (0.382, 0.734)]


def anal_fin():
    return [(0.596, 0.684), (0.664, 0.752), (0.658, 0.780),
            (0.586, 0.736), (0.568, 0.704)]


def build(size=OUT, flat=True):
    base = gradient(S, NAVY_TOP, NAVY_BOT).convert("RGBA")

    # ---- lake: filled shape with bathymetry contour rings inside it
    lake_box = (S * 0.030, S * 0.105, S * 0.940, S * 0.790)
    outline = lake_outline()
    lake_poly = catmull(scale(outline, lake_box))

    lake_layer = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    lake_fill = gradient(S, LAKE_TOP, LAKE_BOT).convert("RGBA")
    lake_layer.paste(lake_fill, (0, 0), mask_from(lake_poly))
    base = Image.alpha_composite(base, lake_layer)

    # contour rings — the same motif the app uses behind its hero
    ring = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    rd = ImageDraw.Draw(ring)
    rd.line(lake_poly + [lake_poly[0]], fill=CONTOUR + (235,), width=int(S * 0.0105), joint="curve")
    for k, a in ((0.845, 74),):
        p = catmull(scale(shrink(outline, k), lake_box))
        rd.line(p + [p[0]], fill=CONTOUR + (a,), width=int(S * 0.0055), joint="curve")
    base = Image.alpha_composite(base, ring)

    # ---- trout
    fish_box = (S * 0.115, S * 0.318, S * 0.790, S * 0.372)
    body = catmull(scale(trout_body(), fish_box))
    tail = catmull(scale(trout_tail(), fish_box), steps=20)

    fins = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    fd = ImageDraw.Draw(fins)
    for f, col in ((dorsal_fin(), FIN_DARK), (adipose_fin(), FIN_DARK),
                   (pectoral_fin(), BELLY_LOW), (pelvic_fin(), BELLY_LOW),
                   (anal_fin(), BELLY_LOW)):
        poly = catmull(scale(f, fish_box), steps=18)
        fd.polygon(poly, fill=col + (255,))
    # A thin light rim on the lower fins reads as the brook trout's white fin
    # margin. Tracing half the spline instead drew hooks that looked like claws.
    for f in (pectoral_fin(), pelvic_fin(), anal_fin()):
        poly = catmull(scale(f, fish_box), steps=18)
        fd.line(poly + [poly[0]], fill=FIN_EDGE + (120,), width=int(S * 0.0035), joint="curve")

    tail_layer = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    ImageDraw.Draw(tail_layer).polygon(tail, fill=FIN_DARK + (255,))

    body_layer = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    ys = [p[1] for p in body]
    body_grad = gradient(S, BACK_DARK, BELLY, box=(min(ys), max(ys))).convert("RGBA")
    bmask = mask_from(body)
    body_layer.paste(body_grad, (0, 0), bmask)

    # flank shading: a soft mid-tone band so the body isn't a flat ramp
    shade = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shade)
    lat = catmull(scale([(0.06, 0.512), (0.30, 0.470), (0.55, 0.478),
                         (0.77, 0.508)], fish_box), closed=False, steps=24)
    sd.line(lat, fill=FLANK_MID + (120,), width=int(S * 0.052), joint="curve")
    shade = shade.filter(ImageFilter.GaussianBlur(S * 0.012))
    body_layer = Image.alpha_composite(body_layer, Image.composite(
        shade, Image.new("RGBA", (S, S), (0, 0, 0, 0)), bmask))

    # red spots in blue halos — what makes a speckled trout a speckled trout
    spots = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    pd = ImageDraw.Draw(spots)
    placements = [(0.235, 0.470), (0.318, 0.552), (0.392, 0.446),
                  (0.470, 0.560), (0.548, 0.462), (0.612, 0.556),
                  (0.672, 0.492), (0.300, 0.388), (0.512, 0.386)]
    for i, (px, py) in enumerate(placements):
        cx, cy = scale([(px, py)], fish_box)[0]
        halo = S * (0.0150 if i % 3 else 0.0172)
        pd.ellipse([cx - halo, cy - halo, cx + halo, cy + halo], fill=BLUE_HALO + (150,))
        r = halo * 0.52
        pd.ellipse([cx - r, cy - r, cx + r, cy + r], fill=RED_SPOT + (255,))
    body_layer = Image.alpha_composite(body_layer, Image.composite(
        spots, Image.new("RGBA", (S, S), (0, 0, 0, 0)), bmask))

    # eye
    eye = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    ed = ImageDraw.Draw(eye)
    ex, ey = scale([(0.098, 0.452)], fish_box)[0]
    r = S * 0.0168
    ed.ellipse([ex - r, ey - r, ex + r, ey + r], fill=CREAM + (255,))
    r2 = r * 0.56
    ed.ellipse([ex - r2, ey - r2, ex + r2, ey + r2], fill=(0x10, 0x1A, 0x22, 255))

    # gill plate
    gill = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    gd = ImageDraw.Draw(gill)
    gp = catmull(scale([(0.155, 0.360), (0.196, 0.500), (0.150, 0.640)], fish_box),
                 closed=False, steps=20)
    gd.line(gp, fill=(0x0C, 0x1E, 0x2A, 130), width=int(S * 0.0085), joint="curve")
    gill = Image.composite(gill, Image.new("RGBA", (S, S), (0, 0, 0, 0)), bmask)

    for layer in (fins, tail_layer, body_layer, gill, eye):
        base = Image.alpha_composite(base, layer)

    return base.convert("RGB").resize((size, size), Image.LANCZOS)


# ---------------------------------------------------------------- outputs
def write_all(root):
    master = build(OUT)
    web = os.path.join(root, "icons")
    os.makedirs(web, exist_ok=True)
    for name, px in (("icon-192.png", 192), ("icon-512.png", 512),
                     ("icon-1024.png", 1024), ("apple-touch-icon.png", 180)):
        master.resize((px, px), Image.LANCZOS).save(os.path.join(web, name))
    # maskable: inset to the 80% safe zone
    m = Image.new("RGB", (1024, 1024), NAVY_TOP)
    m.paste(master.resize((820, 820), Image.LANCZOS), (102, 102))
    m.resize((512, 512), Image.LANCZOS).save(os.path.join(web, "icon-maskable-512.png"))

    # Xcode AppIcon set, when the App Store bundle is present alongside.
    xc = os.environ.get("XCODE_APPICON")
    if xc and os.path.isdir(xc):
        slots = [("Icon-20@2x.png", "20x20", "2x", "iphone"),
                 ("Icon-20@3x.png", "20x20", "3x", "iphone"),
                 ("Icon-29@2x.png", "29x29", "2x", "iphone"),
                 ("Icon-29@3x.png", "29x29", "3x", "iphone"),
                 ("Icon-40@2x.png", "40x40", "2x", "iphone"),
                 ("Icon-40@3x.png", "40x40", "3x", "iphone"),
                 ("Icon-60@2x.png", "60x60", "2x", "iphone"),
                 ("Icon-60@3x.png", "60x60", "3x", "iphone"),
                 ("Icon-1024.png", "1024x1024", "1x", "ios-marketing")]
        images = []
        for fn, size, sc, idiom in slots:
            px = round(float(size.split("x")[0]) * int(sc[0]))
            # RGB, never RGBA: App Store Connect rejects icons with alpha.
            master.convert("RGB").resize((px, px), Image.LANCZOS).save(os.path.join(xc, fn))
            images.append({"filename": fn, "idiom": idiom, "scale": sc, "size": size})
        json.dump({"images": images, "info": {"author": "xcode", "version": 1}},
                  open(os.path.join(xc, "Contents.json"), "w"), indent=2)
    return master


if __name__ == "__main__":
    root = sys.argv[2] if len(sys.argv) > 2 else "."
    master = write_all(root)
    if len(sys.argv) > 1 and sys.argv[1] == "preview":
        sheet = Image.new("RGB", (760, 320), (0x2A, 0x2A, 0x2A))
        x = 30
        for px in (180, 120, 87, 60, 40):
            r = master.resize((px, px), Image.LANCZOS)
            sheet.paste(r, (x, 40 + (180 - px) // 2))
            x += px + 26
        sheet.save("/tmp/icon-preview.png")
    print("icon written")
