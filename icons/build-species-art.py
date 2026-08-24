"""
Build web/species-art/ — one uniform illustration plate per fish species.

WHY THIS EXISTS
---------------
Anglers want to see the fish. But dropping downloaded images straight into the
app looks exactly like what it is: mismatched crops, different white balances,
some fish facing left and some right, a floating white rectangle on a tinted
card. That reads as clip art.

So nothing goes in raw. Every image is normalised to identical geometry and
composited onto the app's own cream token (#F3EFE4), the same colour the rest
of the interface already uses. Uniformity is the whole trick — it is what makes
the plates look commissioned for the app rather than collected from the web.

WHERE THE IMAGES COME FROM
--------------------------
AI-generated illustrations, one per species, each checked against field marks
before it was accepted into raw-species-art/. See
tools/SPECIES-ART-CHECKLIST.md for the per-species source list.

Nothing here obliges an attribution line, but this app credits every source it
uses — OpenStreetMap, GeoNames, Ontario — and a test enforces that the credit
ships. Consistency is the point, and saying plainly that the plates are
machine-made is the honest version of it.

THE RULE THAT MATTERS
---------------------
A species with no verified image of THAT species gets no plate. Never a
stand-in. Splake is a brook/lake trout hybrid and looks like both; putting a
brook trout painting on the splake card would be inventing information, and
this app does not do that with fish surveys, lodging or empty states, so it
will not start with pictures. A missing plate is honest. A wrong one is not.

USAGE
-----
    mkdir -p raw-species-art
    # drop files in named after the species, e.g. "Walleye.jpg", "Northern Pike.png"
    python3 tools/build-species-art.py

    python3 tools/build-species-art.py --check    # report coverage, write nothing

Writes web/species-art/<slug>.webp and web/species-art/manifest.json.
Needs Pillow: pip3 install --user Pillow

No network. Everything is local; the download step is deliberately manual so a
human has looked at each image before it ships.
"""

import json
import os
import sys

try:
    from PIL import Image, ImageOps
except ImportError:
    print("Pillow is required:  pip3 install --user Pillow", file=sys.stderr)
    sys.exit(1)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, "raw-species-art")
OUT = os.path.join(ROOT, "web", "species-art")

# The app's own cream token. Using the interface colour rather than white is
# what stops the plate reading as a pasted-in rectangle.
CREAM = (243, 239, 228)

# 20:7. Wide enough for a pike or a gar without letterboxing a sunfish.
CANVAS = (1200, 420)
INSET = 0.07                      # breathing room so nothing touches the edge

CREDIT = "AI-generated illustrations"
LICENCE = "AI-generated; commercial use permitted under OpenAI's output terms"

# Scientific names. A field-guide plate carries one, and it is real information
# about the species rather than decoration — which is the test for whether a
# structural flourish earns its place.
BINOMIAL = {
    "Walleye": "Sander vitreus", "Sauger": "Sander canadensis",
    "Northern Pike": "Esox lucius", "Muskellunge": "Esox masquinongy",
    "Grass Pickerel": "Esox americanus vermiculatus",
    "Smallmouth Bass": "Micropterus dolomieu", "Largemouth Bass": "Micropterus salmoides",
    "Rock Bass": "Ambloplites rupestris", "White Bass": "Morone chrysops",
    "Striped Bass": "Morone saxatilis", "White Perch": "Morone americana",
    "Yellow Perch": "Perca flavescens", "Pumpkinseed": "Lepomis gibbosus",
    "Bluegill": "Lepomis macrochirus", "Green Sunfish": "Lepomis cyanellus",
    "Northern Sunfish": "Lepomis peltastes",
    "Black Crappie": "Pomoxis nigromaculatus", "White Crappie": "Pomoxis annularis",
    "Brook Trout": "Salvelinus fontinalis", "Lake Trout": "Salvelinus namaycush",
    "Aurora Trout": "Salvelinus fontinalis timagamiensis",
    "Arctic Char": "Salvelinus alpinus",
    "Splake": "Salvelinus fontinalis \u00d7 S. namaycush",
    "Rainbow Trout": "Oncorhynchus mykiss", "Brown Trout": "Salmo trutta",
    "Atlantic Salmon": "Salmo salar", "Chinook Salmon": "Oncorhynchus tshawytscha",
    "Coho Salmon": "Oncorhynchus kisutch", "Pink Salmon": "Oncorhynchus gorbuscha",
    "Lake Whitefish": "Coregonus clupeaformis", "Cisco": "Coregonus artedi",
    "Round Whitefish": "Prosopium cylindraceum",
    "Rainbow Smelt": "Osmerus mordax", "Burbot": "Lota lota",
    "Brown Bullhead": "Ameiurus nebulosus", "Yellow Bullhead": "Ameiurus natalis",
    "Black Bullhead": "Ameiurus melas", "Channel Catfish": "Ictalurus punctatus",
    "White Sucker": "Catostomus commersonii", "Longnose Sucker": "Catostomus catostomus",
    "Shorthead Redhorse": "Moxostoma macrolepidotum",
    "Silver Redhorse": "Moxostoma anisurum", "Greater Redhorse": "Moxostoma valenciennesi",
    "Quillback": "Carpiodes cyprinus", "Common Carp": "Cyprinus carpio",
    "Fallfish": "Semotilus corporalis", "Lake Sturgeon": "Acipenser fulvescens",
    "American Eel": "Anguilla rostrata", "Bowfin": "Amia calva",
    "Longnose Gar": "Lepisosteus osseus", "Freshwater Drum": "Aplodinotus grunniens",
    "Mooneye": "Hiodon tergisus", "Goldeye": "Hiodon alosoides",
}

# The species worth having. Ordered by how many Ontario lakes hold them, so if
# you only get through the first dozen you have covered most cards anyone opens.
PRIORITY = [
    "Yellow Perch", "Northern Pike", "Walleye", "Smallmouth Bass", "Pumpkinseed",
    "Brook Trout", "Lake Trout", "Cisco", "Lake Whitefish", "Rock Bass",
    "Brown Bullhead", "Largemouth Bass", "Burbot", "White Sucker", "Bluegill",
    "Black Crappie", "Rainbow Trout", "Muskellunge", "Sauger", "Common Carp",
    "Channel Catfish", "Lake Sturgeon", "Bowfin", "Longnose Gar", "Brown Trout",
]


def slug(name):
    out = []
    for ch in name.lower():
        out.append(ch if ch.isalnum() else "-")
    s = "".join(out)
    while "--" in s:
        s = s.replace("--", "-")
    return s.strip("-")


def plate(path):
    """Normalise one raw illustration into a cream plate.

    Raw plates arrive on white or transparent backgrounds at wildly different
    sizes. Lift the near-white to transparency, trim to the fish, scale to a
    common height, and centre on cream. After this every plate is
    interchangeable geometry, which is what makes the set look deliberate.
    """
    im = Image.open(path)
    im = ImageOps.exif_transpose(im).convert("RGBA")

    # Near-white to transparent, so the fish sits on cream rather than in a
    # white box. Threshold is deliberately high: pale bellies are not quite
    # white, and clipping them would eat the fish.
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if r > 244 and g > 244 and b > 244:
                px[x, y] = (r, g, b, 0)

    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)

    cw, ch = CANVAS
    max_w, max_h = int(cw * (1 - 2 * INSET)), int(ch * (1 - 2 * INSET))
    scale = min(max_w / im.width, max_h / im.height)
    im = im.resize((max(1, int(im.width * scale)), max(1, int(im.height * scale))),
                   Image.LANCZOS)

    canvas = Image.new("RGBA", CANVAS, CREAM + (255,))
    canvas.alpha_composite(im, ((cw - im.width) // 2, (ch - im.height) // 2))
    return canvas.convert("RGB")


def main():
    check = "--check" in sys.argv

    have = {}
    if os.path.isdir(RAW):
        for f in sorted(os.listdir(RAW)):
            stem, ext = os.path.splitext(f)
            if ext.lower() in (".jpg", ".jpeg", ".png", ".webp", ".gif", ".tif", ".tiff"):
                have[stem.strip()] = os.path.join(RAW, f)

    print(f"raw folder : {RAW}")
    print(f"found      : {len(have)} image(s)")
    print()

    missing = [s for s in PRIORITY if s not in have]
    extra = [s for s in have if s not in BINOMIAL]

    if missing:
        print(f"Not yet supplied ({len(missing)} of {len(PRIORITY)} priority species):")
        for s in missing:
            print("   -", s)
        print()
    if extra:
        # Not an error. But a name that is not a species the app displays will
        # never be shown, and a typo is the likeliest reason.
        print("Filenames that match no known species — check the spelling:")
        for s in extra:
            print("   ?", s)
        print()

    if check:
        print("--check: nothing written.")
        return

    if not have:
        print("Nothing to build. See tools/SPECIES-ART-CHECKLIST.md for what to fetch.")
        return

    os.makedirs(OUT, exist_ok=True)
    entries = {}
    for name, path in have.items():
        if name not in BINOMIAL:
            continue
        img = plate(path)
        fn = slug(name) + ".webp"
        img.save(os.path.join(OUT, fn), "WEBP", quality=82, method=6)
        entries[name] = {"f": fn, "sci": BINOMIAL[name]}
        kb = os.path.getsize(os.path.join(OUT, fn)) / 1024
        print(f"  {name:22} -> {fn:28} {kb:6.1f} KB")

    manifest = {
        "credit": CREDIT,
        "licence": LICENCE,
        "note": "Decorative illustrations. Not identification references.",
        "canvas": list(CANVAS),
        "count": len(entries),
        "species": dict(sorted(entries.items())),
    }
    with open(os.path.join(OUT, "manifest.json"), "w") as fh:
        json.dump(manifest, fh, ensure_ascii=False, separators=(",", ":"))

    total = sum(os.path.getsize(os.path.join(OUT, e["f"])) for e in entries.values())
    print()
    print(f"Wrote {OUT}")
    print(f"  {len(entries)} plates, {total/1024:.0f} KB total")
    print()
    print("Reminder: a species with no plate shows no plate. Never substitute a")
    print("lookalike — the app does not invent fish any more than it invents surveys.")


if __name__ == "__main__":
    main()
