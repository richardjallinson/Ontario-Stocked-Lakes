# Changelog

All notable changes to this project are documented here.
This project follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
