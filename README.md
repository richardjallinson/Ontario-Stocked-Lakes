# Ontario Stocked Lakes

Live: https://richardjallinson.github.io/Ontario-Stocked-Lakes/

Find Ontario stocked lakes by distance, species and stocking year — then check
the regulations, access points, weather and consumption advice before you go.

An offline-capable web app (PWA) built on Ontario and federal open data.
Bilingual English / French.

> **Not an official Government of Ontario application.** The regulation data
> bundled here is a summary and is not a complete legal representation. Always
> confirm the current rules with the
> [Ontario Fishing Regulations Summary](https://www.ontario.ca/document/ontario-fishing-regulations-summary)
> before you fish.

---

## Running it locally

The app needs to be served over HTTP — opening `index.html` from the file
system breaks `fetch()` and the service worker.

```bash
git clone https://github.com/richardjallinson/Ontario-Stocked-Lakes.git
cd Ontario-Stocked-Lakes

# One-time: pull Leaflet into vendor/ (not committed)
./scripts/fetch-vendor.sh

# Serve
python3 -m http.server 8080
# or: npx serve .
```

Open <http://localhost:8080>.

Location features need a secure context. `localhost` counts as secure, so
geolocation works in local development without HTTPS.

## Deploying

Any static host works. A GitHub Pages workflow is included at
`.github/workflows/pages.yml` — it runs the vendor fetch, syntax-checks the
JavaScript, and publishes the repository root.

Enable it under **Settings → Pages → Source: GitHub Actions**.

## What's in here

| Path | What it is |
| --- | --- |
| `index.html` | App shell |
| `app.js` | All application logic — data loading, map, filters, trips, i18n |
| `styles.css` | Styles |
| `sw.js` | Service worker: shell precache, on-demand dataset cache |
| `manifest.webmanifest` | PWA manifest |
| `ontario-waterbodies.json` | Aquatic Resource Area index — every named lake and pond (~2 MB) |
| `ontario-stocking.json` | Bundled stocking snapshot (~2 MB) |
| `ontario-regulations-2026.json` | Imported 2026 regulation summary (~1 MB) |
| `fish-advisories-2025.json` | Fish consumption advisory locations (~11 MB) |
| `ontario-places.json` | GeoNames town gazetteer, for "12 km N of Apsley" |
| `ontario-nearby.json` | OpenStreetMap camping and lodging within 10 km |
| `icons/` | App icons |
| `vendor/leaflet/` | Vendored Leaflet — no CDN at runtime |
| `scripts/fetch-vendor.sh` | Downloads Leaflet into `vendor/` |

### Bundled data

These are built once on a machine with a network and committed, so the app
opens and searches with no signal. Rebuild them from `tools/`:

| File | Tool | Source |
| --- | --- | --- |
| `ontario-waterbodies.json` | `build-waterbodies.py` | Ontario Aquatic Resource Area |
| `ontario-stocking.json` | `build-stocking.py` | Ontario fish stocking table |
| `ontario-places.json` | `build-gazetteer.py` | GeoNames (CC-BY) |
| `ontario-nearby.json` | `build-nearby.py` | OpenStreetMap (ODbL) |

The waterbody index is what makes the app cover the province rather than only
the lakes somebody has stocked. It also decides what a lake sheet lists:
baitfish and the family-level survey placeholders are hidden from display, and
when that empties a list the app says which of the three reasons applies rather
than implying the lake holds no fish. See `HIDDEN_SPECIES` and `speciesGap()`
in `app.js`.

### Live data sources

The app calls these at runtime; nothing is proxied and no API keys are needed.

- **Fish stocking** — ArcGIS FeatureServer, used to refresh the bundled snapshot on demand
- **Fishing access points** — Protected fishing access FeatureServer
- **Fisheries Management Zones, lake surveys, bathymetry** — Ontario LIO Open Data services
- **Weather alerts** — [Environment and Climate Change Canada GeoMet API](https://api.weather.gc.ca)
- **Map tiles** — CARTO Voyager / Positron basemaps (OpenStreetMap data), plus Ontario's own LIO Topographic tile cache as the "Topo" option, under the Open Government Licence – Ontario. CARTO's free
  basemap tier requires the "© OpenStreetMap contributors © CARTO" attribution
  the app already displays; review https://carto.com/basemaps before heavy
  commercial use

## Features

- Search every named Ontario lake by name, township or species — stocked or not
- Find Fish: distance, species, stocking year, minimum quantity, access filter, Best Match ranking
- Map layers: fishing access points, Fisheries Management Zones, depth contours
- Per-lake detail: stocking history, observed species, regulations, access, depth, consumption advice, weather alerts
- Saved lakes, trip notes and catch logs — stored on device, with backup export/restore in **Help**
- Works offline after first load
- English / French throughout

## Privacy

There is no account, no server and no analytics. Location is requested only
when you use a location feature and is never transmitted anywhere. Trips,
catches and saved lakes live in `localStorage` on your device — use
**Help → Save a backup** before resetting a device or clearing site data.

## Data licensing and attribution

Ontario datasets are used under the
[Open Government Licence – Ontario](https://www.ontario.ca/page/open-government-licence-ontario).
Weather alerts are used under the
[Environment and Climate Change Canada Data Server End-use Licence](https://eccc-msc.github.io/open-data/licence/readme_en/).
Map tiles © OpenStreetMap contributors, [ODbL](https://www.openstreetmap.org/copyright).

Neither the Government of Ontario nor the Government of Canada endorses this
application or is responsible for its contents.

## Contributing

Issues and pull requests are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).

## Licence

Source code is [MIT](LICENSE). The bundled government datasets are covered by
their own licences, above.

---

**Version v1z.** `APP_VERSION` in `app.js` and `VERSION` in `sw.js` both read
`v1z` and must always match. See [CHANGELOG.md](CHANGELOG.md) for what changed.
