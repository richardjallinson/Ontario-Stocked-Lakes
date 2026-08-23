# Changelog

All notable changes to this project are documented here.
This project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] — 2026-08-23

Navigation moved to the top, matching the Estate File pattern, plus three
link/search bugs found by clicking every control in a browser harness.

### Fixed
- **The two government shortcuts did nothing on a home-screen install.**
  "2026 Regulations" and "Fish ON-Line" called `window.open(url, "_blank",
  "noopener")`. A features string makes that a popup, and iOS blocks popups in
  a standalone PWA — the button was dead. Both are real `<a target="_blank">`
  links now, which work in the browser, in a home-screen install and in the
  native wrapper.
- **Refusing location left three controls dead.** Near Me, Recent Near Me and
  Find Fish each called `locate()` and then did nothing when it failed: the
  count read "Location unavailable" and the screen never changed. Every view
  now renders regardless, and the empty state says what to do.
- **Find Fish required a location just to open its filters.** It opens now,
  with or without one.
- "1 lakes" → "1 lake".
- Verified the live ArcGIS stocking endpoint and field schema against the
  published service definition: layer, field names and types all still match.

### Changed
- **Bottom tab bar replaced with a scrolling top tab strip in the header**,
  gold underline on the active section — the Estate File layout. Six sections:
  Explore, Find Fish, Near Me, My Lakes, Trips, Regulations.
- New Regulations tab collecting the six official Ontario sources in one place,
  including fishing licences, which the app never linked to before.
- Language switch moved into the header; it was costing a full row above the
  fold.
- Shortcut cards are single-column rows with the icon inline. The 2×2 grid
  forced every title to wrap.
- Stats compressed to one strip; hero tightened. The first screen previously
  showed almost nothing but chrome.

## [1.0.2] — 2026-08-23

Adopts the native-wrapper architecture from the Estate File project, replacing
Capacitor.

### Fixed
- **The backup button would have done nothing on iOS.** The export built a blob
  and clicked an anchor; WKWebView does not reliably download blob URLs, so on
  device the user would tap "Save a backup" and get no file and no error.
  Export now hands the JSON to a native share-sheet bridge when one is present.
- **Every outbound link would have trapped the user.** The app links out to
  ontario.ca, Fish ON-Line, weather.gc.ca and Google Maps in 22 places. In a
  web view those load in place with no way back; the wrapper hands http/https,
  tel and mail to iOS.
- Language pills were 26 px tall, under any reasonable tap target.
- The service worker registered under the native custom scheme, where it is
  pointless and only logs an error. It now registers over http/https only.

### Added
- Bilingual `privacy.html` / `privacy.js` — a hosted policy page for the
  App Store Connect privacy URL field, EN/FR switch, following the Estate File
  page structure.
- `tests/test-browser.js` — 18 rendered-app checks including a direct
  regression for the v1.0.0 blank-app failure.

## [1.0.1] — 2026-08-23

### Fixed
- **The app was blank on device.** `index.html` pointed at `vendor/leaflet/leaflet.js`,
  which only exists after running `scripts/fetch-vendor.sh`. When it 404'd, `L` was
  undefined and the first Leaflet call threw — killing the whole script. No search,
  no stats, no buttons, no data. Leaflet now falls back to the CDN if the vendored
  copy is missing, and `app.js` degrades gracefully if Leaflet is unavailable
  entirely: the map area explains itself and everything else keeps working.
- Card headings rendered iOS system-blue and looked like broken links.
- The favourite star sat underneath the detail sheet's close button.
- The header tagline truncated mid-word.
- The stats strip showed em-dashes during load and after a failure with no explanation.
- The help sheet's brand mark painted as a solid green square.

### Changed
- Emoji in the shortcut cards, layer toggles, list rows and detail sheet replaced
  with a consistent line-icon set; the bottom navigation too.
- Stats compressed into a scannable strip instead of five oversized cards.
- Search fields no longer autocapitalise, autocorrect or spellcheck-underline.
- Remaining "prototype" wording removed from the help and privacy copy.

## [1.0.0] — 2026-08-22

First public release. Supersedes the internal V1A–V1T prototype series.

### Fixed
- **Fatal parse error in `app.js`** that prevented the entire application from
  loading. A stray semicolon in the favourites declaration meant no script ran
  at all — no map, no data, empty shell.
- Duplicate stacked page headers merged into one.
- Blocking `alert()` calls for location errors replaced with a non-blocking
  status message that says what to do next.
- Script tags moved to end of `<body>`, so the onboarding and help dialogs
  exist in the DOM before they are wired up.

### Changed
- Leaflet is vendored locally instead of loaded from a CDN — required for
  offline use and for iOS App Review guideline 2.5.2.
- Service worker rewritten: versioned caches with cleanup on activate,
  `skipWaiting` / `clients.claim`, network-first navigation so releases
  propagate, and the 11 MB advisory dataset cached on first use rather than
  blocking install.
- Web manifest completed with a full icon set, `scope`, `id`, `orientation`,
  `lang` and `categories`.
- Version scheme moved from `V1T` to semantic versioning.

### Added
- Backup export and restore for trips, catches and saved lakes (**Help → Your data**).
- Visible keyboard focus styling and `prefers-reduced-motion` support.
- App icon set.
- MIT licence, contributing guide, GitHub Pages workflow.

## Prototype series (V1A–V1T)

- **V1T** — Branding, help and about, first-run onboarding, UI polish
- **V1S** — English / French architecture
- **V1R** — Environment Canada weather alerts
- **V1Q** — Lake Finder 2.0 and Best Match ranking
- Earlier — Regulations import, waterbody exceptions, stocking history,
  observed species, FMZ and depth layers, consumption advisories, trips and
  catch logs
