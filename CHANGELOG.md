# Changelog

Bundles are named sequentially — v1a, v1b, v1c — matching the Estate File
convention. `APP_VERSION` in `app.js` and `VERSION` in `sw.js` carry the same
marker and must always match.

## v7k — 2026-09-04

### Fixed — press-and-hold on the map did nothing on a phone
- Reported on-device: holding a finger on a lake's own map never opened the
  new-spot panel. The handler and `currentLakeForSpots` were both fine.
- Cause: the vendored Leaflet is **1.1.1**, which predates the `TapHold`
  handler added in Leaflet 1.8. On iOS a long press therefore never becomes
  a `contextmenu` event, so `spotLongPress` was never called. The code
  comment asserting Leaflet handles this was written against a newer
  Leaflet than the one actually bundled. It worked on a desktop right-click,
  which is presumably where it was tested.
- Rather than move the whole app onto a new Leaflet mid-release, added
  `attachTapHold()`: 550 ms, cancelled by a drag over 10px or a second
  finger, swallows Safari's synthesised click, and gives a 10 ms haptic tick
  on hold. Attached to both the main map and the lake-sheet map.
- Tests added, including one that keeps the hand-rolled handler in place for
  as long as the vendored Leaflet is older than 1.8. Suite: 108 → 113.

## v7j — 2026-09-04

### Fixed — the species wheel listed survey records, not sport fish
- Seen on-device: the Explore species filter offered 60+ entries including
  Blue Pike (extinct in Ontario since the 1980s), five kinds of Redhorse,
  three buffalo, Mooneye, Goldeye and Warmouth. `HIDDEN_SPECIES` was being
  applied correctly to the wheel — the names simply were not in it.
- 29 names added: Blackfin/Deepwater/Shortnose Cisco, Blue Pike, Bigmouth
  and Black Buffalo, Quillback, Lake Chubsucker, Northern Hog / Spotted /
  Longnose Sucker, five Redhorse, Mooneye, Goldeye, Fallfish, Grass Carp,
  Green / Northern / Orangespotted Sunfish, Warmouth, Spotted Gar,
  Grass Pickerel, Pink and Sockeye Salmon.
- Deliberately kept: Common Carp, Bowfin, Freshwater Drum, Longnose Gar,
  White Sucker, White Perch, Channel Catfish, the bullheads, Burbot,
  Round Whitefish, Cisco / Lake Herring, American Eel. Ontario anglers fish
  for these.
- Test added both ways: fails if a hidden name reappears, and fails if a
  sport species is ever quietly hidden.

### Fixed — privacy policy named CARTO
- CARTO left the basemap list in August 2026. The English page still named
  them; the French page already said OpenStreetMap. Both now read
  "OpenStreetMap and Natural Resources Canada Toporama", matching what the
  app actually requests.
- Test added. Suite: 88 → 108.

## v7i — 2026-09-04

Not yet submitted. Folded into the next App Store build alongside the
description/promo text refresh.

### Fixed — Trevor Allinson missing from in-app copyright footer
- Both `versionStamp` renders in `app.js` (Help section and Explore footer)
  now read `© 2026 Richard J Allinson and Trevor Allinson`. The v7h handoff
  claimed this was done; the shipped 1.1 build shows it was not. Caught by
  Richard on-device, confirmed by grep on the v7h bundle.
- `tests/test-appstore.js` gains a copyright check that fails if either stamp
  omits Trevor, or if the two copies of `app.js` (web / native) diverge.
  Suite: 84 → 88.
- `APP_VERSION` and `sw.js` `VERSION` bumped to v7i.

## v6z — 2026-09-01

Submitted to App Store Connect 2026-09-01.

### Changed — nine more survey-only species hidden from lake sheets
- `HIDDEN_SPECIES` in `app.js` gains nine names that the ARA survey records
  but no angler targets, so they stop appearing as dead-end chips:
  - Deepwater forage: Kiyi, Bloater, Shortjaw Cisco, Nipigon Cisco,
    Pygmy Whitefish (29 lake records between them).
  - Minnow-scale fish: Brindled Madtom, Northern Madtom, Topminnows.
  - Hybrid junk record: Goldfish x Carp.
- All nine spell exactly as they occur in `ontario-waterbodies.json`, so the
  filter matches. None is a stocked species. The set now holds 135 names with
  no duplicates; 75 species remain visible.
- Display filter only, as before — nothing is removed from the data.

### Known inconsistency — deferred
- Blackfin Cisco, Deepwater Cisco and Shortnose Cisco remain visible even
  though they are deepwater ciscoes in the same class as Shortjaw and
  Nipigon. Hide all five or show all five in a future bundle; the current
  split is not principled.

### Verified
- `web/` and `native/www/` byte-identical; the four GitHub files
  (`app.js`, `index.html`, `styles.css`, `sw.js`) identical to `web/`.
- `tests/test-appstore.js`: 28 of 28 pass.
- Service-worker precache list matches the bundle.
- `APP_VERSION` / `VERSION` → `v6z`.

### Note on this changelog
- No entries were written for v4q through v6y. Those bundles shipped without
  changelog entries; this file resumes at v6z. If the intervening changes
  matter, reconstruct them from the bundles themselves — do not infer them
  from this file.

## v4p — 2026-08-27

### Fixed — after a plain Search, the way back was greyed out
- Press Search with no filters set and every lake appears. Clear filters —
  the one control that returns to the start screen — stayed disabled, so
  there was no way back to the prompt from that state.
- The handler was never the problem: it already resets `searched`, forgets
  the last search and re-renders the prompt. Only the arming test was too
  narrow, checking the filter widgets but not whether a search had run.
  Clear is now armed by filters **or** a completed search, and re-syncs on
  every render since `searched` flips after the previous sync.
- Found by the browser suite, which had been stopping at this point.

### Note on the test suite
- `tests/test-browser.js` still halts here, and it is not the app's fault:
  the suite predates v4h (which gave Clear its disabled state) and clicks the
  button unconditionally, including twice in a row where the second click has
  nothing to do. Roughly 50 of its 256 assertions have ever run. Updating the
  suite to match the intended behaviour is its own job and is NOT done —
  until it is, treat "browser tests pass" as unproven for most of the app.
- `tests/test-appstore.js` is unaffected: 28 of 28 pass.

### Changed
- `APP_VERSION` / `VERSION` → `v4p`.

## v4o — 2026-08-27

### Fixed — the eating guide was the one screen still hardcoded in English
- Found in a pre-Xcode audit of every tab and function. The app carries 342
  bilingual strings with strict en/fr parity — except the consumption-advisory
  panel, where every label, button, validation message and result ("Fish
  species", "Check Eating Advice", "General population", "meals/month"…) was
  typed straight into the markup. A French user got a fully French app until
  the exact screen that tells them what is safe to eat.
- All 17 strings now go through t() with French translations. Species in the
  dropdown display their French names via speciesLabel() while keeping the
  dataset's English name as the value, so advice matching is unchanged.
- The length field also gained `inputmode="numeric"` — the catch form already
  did this; now the eating guide opens the same numeric pad.

### Fixed — French numbers were formatted in English
- `num()` always used en-CA, so the French splash would have said
  "Chargement de 12,170 lacs…". It now follows the app language:
  **12 170** in French, 12,170 in English — everywhere counts appear.

### Audited — no other findings
- Verified across both bundles: service-worker precache list vs bundle files,
  cache lifecycle (activate deletes stale caches), all 85 element ids
  referenced by code, full i18n parity, every fetch() target present, all
  eight data files parse, waterbodies count 12,170 in all three copies, no
  duplicate HTML ids, all manifest icons present, no debug leftovers, and
  byte-identical parity between web/ and native/www/. The four Swift bridge
  files, app icons, localization and privacy manifest are all in native/.

### Changed
- `APP_VERSION` / `VERSION` → `v4o`.

## v4n — 2026-08-27

### Fixed — the eating guide zoomed the app in and left it there (Trevor)
- Reproduce: Stoco Lake → eating guide → pick a species → tap the size
  field. The whole app zoomed in and stayed zoomed.
- Cause: iOS auto-zooms any focused form control whose text is smaller than
  16px, and a standalone web app never zooms back out. The eating guide's
  controls use `font:inherit`, which computes under 16px inside the panel.
- Fix, two layers: `maximum-scale=1` in the viewport meta stops the
  auto-zoom itself (Apple ignores the cap for user pinch in Safari, so
  accessibility zoom still works), and a 16px floor on every control that
  takes typing — eating guide, catch form, trip notes, Find filters, list
  add row — removes the trigger on any iOS version that ignores the meta.

### Changed
- `APP_VERSION` / `VERSION` → `v4n`.

## v4m — 2026-08-27

### Added — the splash counts lakes again, and can never lie again
- v4l removed "Loading 10,948 Lakes" because the number was baked into the
  artwork. The count is back, but live: the caption reads the index size from
  the last successful load (`osl-lakecount` in localStorage) the instant the
  splash paints, then corrects itself the moment this launch's index lands.
  With the v4l data it says **"Loading 12,170 Lakes"** — and if the index is
  ever rebuilt, the splash follows it with no code change.
- First-ever run has no remembered count and says "Loading Ontario lakes…"
  until the data arrives mid-splash. French: "Chargement de 12 170 lacs…".
- No number appears anywhere in the source. That is the point.

### Fixed — the lake list scrolled underneath an open lake page (Trevor)
- With a lake sheet open, a drag that started on the dimmed backdrop — or a
  flick past the end of the sheet's own scroll — moved the list behind it, so
  the sheet closed onto a different part of the list than it opened from.
- Two layers, one for each path: `overscroll-behavior:contain` on the sheet
  stops its scroll from chaining to the page at either end, and while any
  sheet is visible the body is frozen in place (`position:fixed` at the saved
  offset — the only lock iOS Safari honours) and restored to the exact scroll
  position when the last sheet closes.
- All four sheets (lake, trip, settings, help) open and close by toggling one
  `hidden` class from a dozen call sites, so the lock watches the class with
  a MutationObserver instead of patching every site.

### Changed
- `APP_VERSION` / `VERSION` → `v4m`.

## v4l — 2026-08-27

### Fixed — the splash counted 10,948 lakes from two datasets ago
- **The stale number was pixels, not a string.** v4k fixed the alt text and
  audited every translation string, and the phone still said "Loading 10,948
  Lakes" — because the caption was baked into the embedded splash JPEG itself.
  A version stamp reading v4k under a v4g lake count is exactly the confusion
  the stamp was added to prevent.
- **The artwork no longer carries a caption.** The count line was removed from
  the image, and the caption is a live element again: `.splashMsg` with
  `data-i18n="splashLoading"` ("Loading Ontario lakes…" / "Chargement des lacs
  de l'Ontario…"). It renders in the active language and cannot go stale,
  because there is no number in it.

### Fixed — the bundle shipped the 10,001-waterbody index
- `web/ontario-waterbodies.json` (and `native/www/` in the App Store bundle)
  is now the 2026-08-26 rebuild: **12,170 waterbodies**, Steenburg Lake with
  its full survey (Largemouth Bass, Smallmouth Bass, Splake, Yellow Perch) and
  Lake Erie with its full list. The `⚠️-REPLACE-WATERBODIES-BEFORE-USE` step
  is done and the warning file is gone.
- **On phones that have visited before:** the data cache is
  stale-while-revalidate, so the first launch after this update still serves
  the old index while fetching the new one in the background. The second
  launch has the 12,170-lake data. (The full cache-versioning fix remains
  open — see STILL OUTSTANDING in v4j.)

### Changed
- `APP_VERSION` / `VERSION` → `v4l`.

## v4j — 2026-08-27

### Fixed — stocked lakes hid the species surveys had recorded
- **The report.** Trevor found heavily-fished lakes showing a single species:
  Steenburg Lake as Splake alone, Lake Erie as Rainbow Trout alone. He also
  spotted the pattern that cracked it — it never happened on an unstocked lake.
- **The cause was one ternary, repeated in three places.** `app.js` chose
  `l.stocked ? l.species : anglerSpecies(l.present)` on the result card, the
  map popup, and the lake-sheet header, so a stocked lake displayed only what
  had been stocked into it and dropped every surveyed species on the floor.
  Only stocked lakes took that branch, which is exactly why unstocked ones
  looked fine.
- **It was worse than a display gap.** `okSpecies()` has always filtered on
  the union of both lists. Filter to Walleye and Lake Ontario came back —
  then the card listed five salmonids and no walleye.
- **`displaySpecies()` is now the one headline list**: stocked species first,
  because they are why the lake is in the app, then every surveyed species the
  filters can already find, deduplicated, forage still hidden. Used by the
  result card, the map popup and the lake-sheet header, which also stops
  calling `l.species.join` raw so a French sheet no longer opens with English
  species names.

### Fixed — the waterbody index was reading 40% of the province
Two independent defects in `tools/build-waterbodies.py`, both silent.

- **Layer 1 was never queried.** ARA Summary — the table holding the species —
  has no geometry of its own; Ontario represents it through *either* the water
  polygon segment class *or* the water line segment class. The build read
  polygons only. Steenburg Lake has 0 records in layer 2 and 1 in layer 1, so
  no filter change could ever have found it. That layer holds 7,188 Lake or
  Pond segments, 4,175 of them named.
- **`OFFICIAL_WATERBODY_NAME IS NOT NULL` discarded 16,093 of 31,905 polygon
  segments.** LIO lets a waterbody be officially "Not Listed", which is what
  the corporate and alias name fields exist for. Lake Erie is one of them: no
  official name, corporate name "Lake Erie", **105 recorded species** that had
  never reached the app. `waterbody_name()` now coalesces official → corporate
  → alias1.
- **`centre()` returned None for line geometry**, so any waterbody that did
  arrive from layer 1 was skipped by `if not pt: continue` without a word. It
  now takes the midpoint of the longest path — the shoelace formula silently
  returns a plausible-looking centroid in the Atlantic for an open path, so the
  branch is explicit rather than shared.
- Segments skipped for unusable geometry are counted and reported at the end.
  Silent skips are how this hid for months.
- `report_types()` referenced the removed `SERVICE` constant and would have
  crashed on first use of `--types`. Repaired, and its query no longer filters
  on official name, which was making it under-report the type vocabulary.

**Result: 10,001 waterbodies → 12,170; 9,254 with species → 11,275.** 2.5 MB,
up from 2.2 MB. Steenburg Lake now carries Largemouth Bass, Smallmouth Bass,
Splake and Yellow Perch. Lake Erie carries 105.

### Deliberately excluded
16,700 Lake or Pond segments across both layers have no name in any field. The
app is searched by name, so those would be blank rows; the WHERE clause leaves
them out on purpose and says so in a comment. **That is not the Lake Erie bug
repeating.** About 7,750 of them do carry species and would suit a map or
nearby-water view — a product decision, not a build one.

### Note
The `Lake or Pond` type filter was investigated and is correct. The vocabulary
is exactly the six documented values and both lakes are typed that way. Don't
widen it.

## v4k — 2026-08-27

### Fixed — splash screen quoted a stale lake count
- The loading screen's image carries an `alt` attribute that Safari can show
  while the (large, inlined) image decodes: "Ontario Stocked Lakes. Loading
  10,948 lakes." That number was frozen from an old build and had drifted
  10.9% behind the real total by the time v4j shipped 12,170 waterbodies.
- The app's own translation strings already handle this correctly — both
  `splashWarning` keys (EN and FR) describe the screen without quoting a
  count, because JS applies the translated text once it runs. The static
  HTML `alt`, shown before JS runs, had simply never been brought in line
  with that pattern.
- `alt` now reads "Ontario Stocked Lakes. Loading lakes…", matching the
  translation key's wording exactly. There is no longer a number in the
  static markup to go stale, so this can't recur regardless of how the
  waterbody count changes in future builds.
- No functional change beyond the version stamp.

## v4i — 2026-08-26

### Changed — Clear gets two solid states
- **Idle: a quiet grey chip.** The dashed outline shipped in v4h was a
  mistake: in interface convention a dashed box means "empty slot" or "drop
  something here", so it read as a gap in the grid rather than a button at
  rest. It is now a solid faint fill with a soft border — still plainly not
  one of the white dropdowns, still plainly inactive.
- **Armed: the palette's water blue with white text**, 5.5:1. Blue rather
  than lime on purpose: lime already means "go" on Search and My Location,
  and Clear undoes rather than starts. Different job, different colour, and no
  risk of a reset being mistaken for a primary action.
- The idle text sits at 4.3:1 on its fill — dim enough to read as inactive,
  dark enough to still be legible, which a true disabled grey would not be.

### Considered and rejected
- Moving Clear up beside Search and My Location. Those two are "go" actions;
  a reset next to them invites mis-taps whose cost is losing filters just set.
  Clear also acts *on* the filters, so sitting among them is most of what
  makes it legible without explanation — and being dim most of the time, it
  would have made that card look half-broken.

### Notes
- The suite now checks the idle state has a real fill and is not dashed, and
  that the armed state is a genuinely different colour rather than only a
  class change — the v4h tests would have passed on the dashed version.
- A later flat colour rule needed re-scoping again, this time to white for the
  filled blue chip. Fifth instance this session.

## v4h — 2026-08-26

### Changed — the Clear button
- **It no longer looks like a fourth filter.** Clear sat in a 2x2 grid with
  three dropdowns wearing the identical white card, border and shadow, so the
  only thing distinguishing an action that wipes your filters from a control
  that picks a value was the word on it. It is now transparent and outlined:
  same footprint, so the grid stays tidy and its position stays predictable,
  but it plainly is not one of the selects.
- **It is inert when there is nothing to clear.** It was previously live at
  all times, including on a fresh screen where tapping it did nothing
  whatsoever — which is the behaviour that teaches people to ignore a control.
  It now disarms until a filter is actually set, then comes to full strength.
- `filtersAreSet()` counts the search box and `townOrigin` as well as the
  three selects and the sort: "Within 100 km of Tweed" is a filter even though
  no `<select>` changed, and Clear resets it, so it has to arm for it.
- The state syncs from `markFiltersDirty` and `clearFiltersDirty`, which every
  filter input already routes through, plus once at startup — a restored
  search should arrive with Clear already armed rather than lying about it.
- The disarmed state carries a different `aria-label` ("Clear filters —
  nothing is set"), because a screen reader cannot see the dimming.

### Notes
- A later flat `.clearbtn{color:...}` rule was overriding the dimmed colour;
  it is now scoped to `.armed`. That is the fourth time this session a late
  duplicate rule has quietly beaten an earlier one.
- The suite asserts both states and that Clear's fill differs from the
  selects' — checking the class alone would have passed on the old build.

## v4g — 2026-08-26

### Fixed — the rectangle on the splash screen
- **The mismatch was inside the artwork, not between the artwork and the
  page.** The source mockup drew the splash as a phone-shaped card (#000E21)
  floating on a lighter backdrop (#091627), and that baked-in frame is the
  edge Richard could see. Matching the CSS background to the image's outer
  edge — which is what v3u did, correctly, at the time — could never fix it.
- The card's own background is also a subtle vertical gradient, so no single
  flat colour meets it at every height.
- **Fix:** a quadratic was fitted to the card's background column using only
  the 923 rows containing no trout and no text, that curve was painted into
  the artwork's margins, and the CSS gradient stops are read from the same
  curve. Fill and page come from one function and therefore cannot disagree.
  Measured deviation down the full height is under 2 levels per channel.
- Two earlier attempts are worth recording because both failed in instructive
  ways: extending the card's edge pixels outward smeared the trout's glow into
  the right margin, and using each row's median picked up the fish wherever it
  spanned most of the row. Fitting only quiet rows avoids both.
- The comment now says to re-derive these values if the artwork is ever
  regenerated or re-saved — JPEG re-encoding shifts them, which is exactly how
  the v3u value drifted once the splash text was recoloured in v4d.

## v4f — 2026-08-26

### Changed
- **Water and rock texture behind the search and My Location card.** Richard
  wanted the card to feel like a fishing section rather than a plain panel.
  v4e had stripped the photo off it entirely because two full-strength crops
  of the same lake read as one interrupted wallpaper; this brings it back at
  roughly a seventh of that strength — enough to catch the light and read as
  water, not enough to compete with the controls on top of it.
- **Zero new bytes.** It reuses `img/header-lake.webp`, already bundled and
  already in the service worker's shell, pinned to its bottom-right corner —
  the shoreline-and-rocks part of that crop. No second file to download, and
  no way for the card's texture to be missing offline while the header's is
  present. The image folder stays at 142 KB.
- Strengths were compared side by side offscreen before choosing. At the
  first values the texture was invisible: all cost, no effect. The shipped
  values show the water and the rocks while white body text measures 8.5:1
  at its worst and the muted subtitle 5.8:1, both clear of the 4.5 floor.

### Notes
- The suite now asserts the card reuses the header plate rather than adding
  its own file — the pairing is the point, since a separate file would have
  to be added to the shell cache too or it would vanish offline.

## v4e — 2026-08-26

### Changed — layout economics, not more colour tuning
- **The lake photo is off the search card.** Header and card were two crops of
  the same scene stacked with a thin navy strip between them: one wallpaper
  interrupted rather than two designed surfaces, and the card's three lines of
  body text were fighting trees for legibility. The header carries the
  photograph; the card carries the controls. Returns 126 KB — the bundle's
  image folder drops from 265 KB to 142 KB.
- **The trout has its own backing.** Every crop of this plate has trees on the
  right; there is no patch of open sky to move the logo onto. So instead of
  fighting the photograph, a soft radial pool of shadow sits exactly where the
  logo lands. A neon-blue cutout needs separation from busy green, and this
  gives it that without darkening the whole header.
- **Chrome tightened.** The mark drops 150px to 122px, the brand column gap
  8px to 6px, and the tab row's padding 14/11 to 10/8. Header plus tab strip
  was eating roughly 40% of a 390x844 screen, which put the first lake below
  the fold — the wrong trade for an app used on the water, where the data is
  the point and the photograph is the frame.
- **The shortcut tiles are balanced.** A lime tile beside a dark navy one made
  Recent Near Me read as disabled. Both are bright now and only the hue
  differs, which distinguishes them without ranking them; the icon still
  measures 5.2:1 on the blue.

### Notes
- `card-lake.webp` is deleted, removed from the service worker's shell list,
  and the suite asserts the card is not carrying a photo — if it ever comes
  back, the cache entry has to come back with it.

## v4d — 2026-08-26

### Changed — lime green everywhere the accent appears
- **The accent is now lime, sampled from Richard's reference rather than
  guessed**: #8AD720 on the wordmark, #7BC71F on the active tab, #67C114 on
  the EN pill. Navy text on this lime measures 8.6:1, so buttons keep the
  navy-on-accent grammar they already had.
- **A second variable exists for a reason:** lime on WHITE is 1.8:1 —
  unreadable. Anything sitting on a white card (filter icons, the sort label)
  uses `--accent-dark` #4F8A0F at 4.2:1 instead. Swapping one variable for
  the other everywhere would have made the filter row illegible.
- The eyebrow "ONTARIO" moves from gold to lime, matching the reference.

### Changed — the splash text is lime, the trout is not
- ONTARIO, "Tight Lines!" and the 10,948 figure are repainted lime. The text
  is baked into the artwork, so this is a pixel operation, not a CSS change.
- **The trout keeps its gold.** The fish is full of gold and amber, and a
  naive colour swap would have turned it into a lime fish. The repaint is
  restricted to the rows below the artwork, and verified afterwards: zero gold
  pixels remain below the fish, and 9,894 gold pixels remain inside it.
- Each pixel keeps its own brightness through the swap, so antialiased letter
  edges stay smooth rather than turning into a hard-edged sticker.

### Changed — the header is deeper
- Saturation +38%, contrast +14%, brightness +6% on the header plate (+30%
  and +10% on the card). The trout logo is a saturated neon-blue cutout, and
  it was floating against a pale washed background; it needs real colour depth
  behind it to sit properly.

## v4c — 2026-08-26

### Changed — the header is the bright plate now
- **Switched back to the vivid source.** v4b used the second, more
  photographic plate, which is why the header read as moody rather than the
  saturated look Richard asked for. Both plates are re-cut from the bright
  one, still sitting on the waterline so there is actual lake in them.
- **The scrim drops from 88%→15% to 62%→4%.** The heavy wash was flattening a
  vivid picture into mud. Readability now comes from text shadows — a dark
  halo on the glyphs themselves — rather than a curtain over the whole image.
  That is the standard way to put text on photography, and it was the right
  answer three versions ago.
- Three strengths were rendered offscreen and compared before choosing; the
  card scrim gets the same treatment, kept slightly heavier because it carries
  three lines of body text rather than two words.
- "Lakes" brightens to #3FD17A so it holds against the vivid plate.

## v4b — 2026-08-26

### Fixed — three reasons v3z/v4a looked wrong
- **The header had no lake in it.** The crop took the top 6–80% of the plate,
  which is sky and cloud. An app called Stocked Lakes was showing weather.
  The band now sits on the waterline — a little sky, the treeline, open water
  — measured off the plate rather than eyeballed.
- **The search card's photo was never visible.** A `.hero` rule 400 lines
  further down the stylesheet set `background` wholesale and silently wiped
  the plate declared earlier. Same class, same specificity, later in the file,
  so it won — the same failure mode as the shortcut cards in v3y and the
  wordmark in v3z. The plate is now declared in the rule that wins, and the
  earlier declaration is reduced to geometry with a note saying why.
- **The header controls were hairline outlines over a busy photo**, which read
  as noise. They are filled rounded tiles now, 38px, and the active language
  is the one filled-green control — navy on green, the same grammar as Search.

### Notes
- Both plates re-cut from the newer source. 265 KB total.
- I rendered the header offscreen and looked at it before packaging this
  time, rather than shipping and asking Richard to be the renderer. That is
  what caught the sky-only crop.

## v4a — 2026-08-26

### Fixed — what went wrong in v3z
- **"Lakes" rendered as small grey body text on its own line** instead of
  large green beside "Stocked". Cause: `.headerBrand span` already existed for
  the header's small grey subtitle line (11.5px, #A8C2DA, display:block), and
  it beats a bare `.wmAccent` on specificity. The new rule is
  `.headerBrand h1 .wmAccent` and it resets every inherited property
  explicitly rather than only setting colour. The suite now asserts the
  *computed* size, display and colour, since checking the class name would
  have passed on the broken build.
- **The tab labels sat on open water.** The plate ran the full height of the
  header, so Explore / My Lakes / Trips / Regulations floated over the
  brightest part of the photo. The tab strip now has a solid navy band, which
  is what stops the picture — deliberately, rather than an explicit height
  offset on the plate, because the strip's height changes with the text-size
  setting.
- **The wordmark had no shadow.** On flat navy it did not need one; on sky it
  does, and the descenders were disappearing into the clouds even with the
  scrim. Added to the wordmark and eyebrow.

### Added — the rest of the reference
- **Captions under the header controls** — Settings / English / Français /
  Help, matching the reference. Decorative only: the buttons keep their
  aria-labels so a screen reader is not made to read each name twice.
  Two new i18n keys, EN and FR at 345 each.
- **The active tab is green icon-and-all**, with a thicker underline, and
  inactive tabs lift to a lighter blue so the active one reads at a glance.
- The stocking-date line moves from gold to the deeper accent green.

### Notes
- The plate, scrims and their measured contrast figures are unchanged from
  v3z; this release is the wordmark, the tab band and the missing chrome.

## v3z — 2026-08-26

### Added — the lake photography
- **`web/img/header-lake.webp` (104 KB) and `web/img/card-lake.webp` (132 KB)**,
  both cut from the single generated plate Richard supplied. 236 KB total,
  bundled and in the service worker's SHELL rather than DATA_FILES: chrome
  that only appears after the first online visit would defeat bundling it.
- The header now carries the lake behind the wordmark; the search card
  carries it behind the controls, on the right where the mockup shows trees.

### The scrims are structural, not decorative
- Measured on the actual shipped WebP: white text over the bare photo lands
  at **3.4:1** against the 4.5:1 readability floor, and over the bright cloud
  patches at **1.15:1**, which is invisible. In daylight on the water that
  header would be unreadable, and it is the kind of thing App Store review
  flags.
- The header scrim is a left-weighted black gradient, ~88% down to ~15%,
  which puts the wordmark at **12:1** and the worst cloud patch at **6.6:1**
  while the right side stays clear enough to read as water behind the trout.
  The card scrim runs ~90% to ~30% for the same reason and measures 13:1.
- Both plates sit **on top of the existing flat colour**, not instead of it,
  so a failed image decode degrades to exactly the v3y header and card rather
  than to unreadable text. The suite asserts that the flat colour is still
  there.
- If the plate is ever regenerated, re-measure: a brighter sky needs a
  heavier scrim. The numbers above are for this specific image.

### Changed — the rest of the mockup
- **Section tabs carry icons** above their labels (fish, map, case, book).
  Scoped to `.tabs` deliberately: `.ti` was already the map-layer toggle badge
  and must not inherit the tab treatment. The suite checks both survive.
- **The wordmark splits** — "Stocked" white, "Lakes" in the accent green.
- **Shortcut cards are tinted** pale green and pale blue instead of white.
- Page background moves to a lighter blue.
- **The trout watermark is gone from the hero card.** It existed because there
  was no photo to put there; now there is one, and two overlapping textures
  behind the same text was one too many. The trout still leads the header.

### Notes
- Bundle cost is 236 KB shipped to every phone. Worth it for the look, but it
  is real weight and it is why both plates are compressed harder than they
  would be on a website.
- The plate is a generated landscape, not a photograph of a real Ontario lake.
  Fine as decoration — the trout artwork already is — but no caption anywhere
  should imply it is a specific place.

## v3y — 2026-08-26

### Changed — colour pass
- **New accent green** (`--accent`, `#2FAE60`, checked at 5.4:1 contrast with
  navy text — same margin gold buttons already relied on) takes over the
  app's calls to act: Search, My Location, the trip-start button, the active
  tab underline, and the active EN/FR pill.
- **The hero card's gradient** shifts from navy-on-navy to a deep green
  (`--accent-deep`) fading into the existing navy, so the identity moves
  toward the "sport" feel without needing a photo, and without losing the
  8:1+ contrast the white heading and gold text rely on.
- **The two shortcut-card icon tiles are two-tone**: Recently Stocked in the
  new accent green, Recent Near Me in the existing water blue — two colours
  read faster than two identical green squares with different glyphs inside.
- **`--gold` narrows to a deliberate second accent** rather than the app's one
  CTA colour: it now marks only the stocking-date line and the focus ring,
  both places where it always meant "official" or "pay attention here," not
  "tap this."

### Fixed — three dead rule-sets from an older shortcut-card design
- Richard reported "Recently Stocked" and "Recent Near Me" looking off, and
  asked to size the heading down a point. The actual cause was bigger than a
  font size: three complete rule-sets from a pre-v3x card design — icon
  beside a narrow text column, at one point a single stacked column, and
  before that the cards were `<a>` tags rather than `<button>`s — were never
  removed when the current icon-above-heading card replaced them. Because
  they carried the same CSS specificity and sat later in the file, they were
  still winning outright: the heading was rendering in a ~100px-wide side
  column, which is why "Recently Stocked" wrapped onto three lines no matter
  what its font size was.
- All three dead blocks are removed. The card now genuinely has the icon
  above the heading, full card width to work with, and a 20px radius that a
  fourth leftover (`.quick a`, from when the cards were links) had quietly
  been overriding to 15px the whole time.
- The heading itself also drops one point, 16px to 15px, and its unit changes
  from `rem` to `px` to match every other size in this file.
- **New suite assertion** checks the actual rendered geometry — that the
  heading spans most of the card's width and sits below its icon — rather
  than only checking class names, so a regression here fails the suite
  instead of waiting for a screenshot to catch it again.

### Notes
- Layout shapes from v3x — pill selects, sort row, shortcut-card structure —
  are unchanged in this pass; only colour and the dead-CSS fix above.

## v3x — 2026-08-26

### Changed — layout pass (colours deliberately unchanged)
- **The hero is a raised card** with a larger radius and a deeper shadow, and
  the app's own trout artwork is sunk into its corner at 13% opacity. That
  reuses `icons/header-mark.png`, already bundled — zero new bytes, and a
  bundled mark cannot fail to load at a lake, unlike the mockup's photo.
- **The trout mark in the header is half again as large**, closer to the
  weight it carries in the mockup.
- **The three filter selects are icon pills** — fish, calendar, map pin — with
  a soft shadow and a larger radius. The icon is a sibling of the `<select>`,
  absolutely positioned, because a `<select>` cannot contain markup; the
  select carries left padding to make room.
- **Clear gets an × glyph**, the stocking-date line a calendar, and the
  four-ways hint a fish in a translucent tile.
- **Sort is its own full-width card**, label and value on one row, instead of
  a select shoved against the right edge.
- **The shortcut cards** carry their icons in filled rounded tiles.

### Notes
- This is the layout half only, as agreed: shapes, spacing, icons and
  elevation. The green-on-blue palette and the photographic background from
  the mockup are a separate pass, so that if the colour turns out wrong on a
  real screen it is not tangled up with layout worth keeping.
- `#dataAge` is now a span inside the dated line rather than the paragraph
  itself, so the app's `textContent` write cannot wipe the icon beside it. The
  suite asserts that, since a future edit pointing back at the `<p>` would
  silently delete the glyph.

## v3w — 2026-08-26

### Fixed
- **The "API KEY REQUIRED" watermark on every map.** In August 2026 CARTO
  began requiring an API key for its basemaps and watermarking every
  unauthenticated tile — and the raster service the app used is being retired
  outright, so a key would only have postponed the same failure. Both CARTO
  layers are replaced, and nothing keyed replaces them:
  - **"Map"** is now OpenStreetMap's own tile service. Keyless; the
    attribution it requires was already the app's habit.
  - **"Ontario topo"** was never CARTO and is untouched — government host,
    no key, and the style anglers arguably wanted first anyway.
  - **"Plain"** is now genuinely plain: no tile layer at all, just the marker
    on a calm background. It used to be CARTO's light style, which made
    "Plain" the oddest of the three to need a network. It is now the one
    basemap that works at a lake with no signal.
- Both the main map and the lake-sheet mini map draw from the same table, so
  one change fixed both.

### Notes
- The suite now asserts no basemap points at CARTO **and** that no
  replacement carries a key/token parameter — the lesson being encoded is not
  "CARTO bad" but "no third-party credential in a shipped app", the same
  principle as the access-point endpoint swap.
- Tiles viewed while online remain visible offline only where previously
  browsed, as before; bundled data never depended on any of this.

## v3v — 2026-08-26

### Changed
- **The gold warning text is gone from the splash artwork** — "Don't
  completely close the app…" no longer appears at startup, per Richard.
  Painted out with each row's own card fill sampled beside it, so the
  gradient survives and no patch shows; verified zero gold pixels remain and
  the map's glow is untouched. The card, trout, wordmark, "Tight Lines!" and
  the "Loading 10,948 Lakes" line are all exactly as they were.
- The alt text now says what the picture says — name and loading line — in
  both languages. An alt describing text that is not there is as wrong as
  alt="" was back when the text existed.
- The advice itself still lives at the foot of Explore under the map, where
  v3p put it. Only the startup copy is gone.

### Notes
- This shipped as v3v rather than as a modified v3u deliberately. The service
  worker's shell cache is keyed by version, so same-version-different-bytes
  is exactly the stale-cache trap from the v3g–v3j saga: if v3u had touched a
  phone, a rebuilt v3u would serve the old splash from cache indefinitely.
  Version bumps are what force the fresh fetch; they are cheap, and
  re-cutting a shipped version never is.
- All four v3u presentation fixes carry through unchanged: matched
  background, no corner arcs, left-to-right fill bar driven by
  SPLASH_MIN_MS.

## v3u — 2026-08-26

### Fixed (splash presentation, all four from Richard's field report)
- **The artwork's rectangle no longer shows.** The splash background was
  #0E1B2E while the image's own edges average #071426 — close enough to look
  almost right, far enough to draw a faint frame around the picture. The CSS
  background is now #071426, sampled from the shipped image's actual edge
  pixels rather than chosen. A note in styles.css says to resample if the
  artwork is ever regenerated.
- **The two white corner arcs at the top are gone** — hairline remnants of
  the source mockup's rounded frame, painted out in the corner regions with
  the card's own local fill so no smudge or patch shows. Cropping them off
  instead would have clipped the map's glow, which reaches within 30 px of
  the arc.
- **The progress bar fills once, left to right, reaching 100% exactly as the
  splash ends** — no more side-to-side shuttle. Reduced-motion users get the
  full bar immediately, as before.
- The fill duration is not a second constant to keep in step with
  SPLASH_MIN_MS: JavaScript sets it from SPLASH_MIN_MS directly, and the
  suite asserts the inline style equals 5000ms. Timing pairs drifting apart
  has bitten three times this project; this pair is prevented from existing.

### Notes
- The results-area mini bar keeps its shuttle animation deliberately: that
  load has no known duration, so a fill would be a lie about progress. The
  splash's duration is fixed, which is what makes a fill honest there.
- The version stamp stays for this round — it has earned its keep — and comes
  out closer to release.

## v3t — 2026-08-26

### Added
- **Trips, catches, saved lakes and recents are now durable in the native
  app.** They lived only in localStorage, which iOS treats as website data —
  purgeable under storage pressure, and wiped outright by "Clear Website
  Data". A season of catch logs sat in storage the OS is allowed to clear. The
  real copy is now an ordinary JSON file in the app's Documents folder, which
  iOS never evicts, device backups include, and app updates survive.
- How it works: startup fetches `__storage/osl-user.json`, which the custom
  scheme handler serves from Documents (on the plain web the fetch 404s and
  localStorage remains the store, unchanged). Every save still writes
  localStorage first, then hands the same payload to a new `persistStore`
  native bridge that writes the file atomically. Newer copy wins at startup,
  decided by a `savedAt` stamp kept in both places — which also makes
  migration automatic: the first run simply writes the file that was not
  there.
- Writes ride a `WKScriptMessageHandler` rather than the custom scheme because
  WKWebView strips request bodies on custom-scheme fetches — a long-standing
  WebKit quirk.
- On the plain web, `navigator.storage.persist()` is requested as a best
  effort; browsers that support it stop treating the storage as evictable.
- Language, units and text size deliberately stay plain localStorage: losing
  them costs two taps.

### Native (requires an Xcode paste — see the readme)
- **New file `StorageBridge.swift`** — receives the payload, writes
  Documents/osl-user.json atomically, refuses absurdly tiny payloads so a page
  bug cannot overwrite a good file with nothing.
- **`LocalSchemeHandler.swift`** — now serves `/__storage/` from Documents,
  with the same path-traversal guard against the Documents root.
- **`ContentView.swift`** — two lines: register `persistStore`, dispatch it.

### Notes
- The suite stubs the bridge (a plain browser has no `window.webkit`) and
  serves a Documents fixture with a future `savedAt`, so both directions are
  asserted: a newer file replaces localStorage at startup, and toggling a
  favourite hands a stamped payload to the bridge. The web fallback path is
  what the rest of the suite has always run on, unchanged.

## v3s — 2026-08-26

### Added
- **`web/ontario-access.json` is now in the bundle** — 2,429 fishing access
  points, built from Ontario's Fish ON-Line service and committed. The
  "Nearest fishing access" card works offline from this release; nothing needs
  running to switch it on.

### Fixed
- **Placeholder values are no longer stored or shown.** The source writes
  "Unknown" into ownership and material where a human would leave the field
  blank — 1,682 of 2,429 sites for material alone. Stored as-is, a card would
  have read "Boat Launch • 2.1 km NE • Unknown", presenting a non-answer as a
  fact. That is the township mistake in a different coat. `build-access.py`
  now drops "Unknown", "Not applicable", "Other", "None" and their variants on
  the way in, and the shipped file has had 3,168 such values stripped. An
  omitted field prints nothing, which is true.
- **Unnamed sites lead with their type.** 673 sites have no name in the
  source, and the build tool gives those a generic label — which was being
  printed as a heading directly above a line saying "Boat Launch". Saying
  nothing twice. An unnamed site now shows its type as the heading and
  "unnamed site" beneath.
- The file is 239 KB after both fixes, down from 288 KB.

### Notes
- Verified against Moira Lake: nearest launch 1.7 km, with parking, no fee,
  last verified 2013. Rice Lake: 0.5 km.
- The suite's fixture now includes an unnamed site, and asserts that no
  placeholder text reaches the card.

## v3r — 2026-08-26

### Added
- **`tools/build-access.py`** — downloads Ontario's fishing access points from
  the government's own Fish ON-Line service and writes
  `web/ontario-access.json`. Pages with `resultOffset` (the layer caps at 2000
  per request), orders by `OBJECTID` so paging cannot silently skip or repeat,
  retries the transient LIO timeouts, and warns if it kept noticeably fewer
  records than the service reported.
- **The "Nearest fishing access" card is back on the lake sheet, offline.**
  It reads the bundled file, lists the six nearest launches within 15 km with
  distance and bearing, and links to directions.
- It shows the fields the old live version never had: parking, wheelchair
  accessibility, user fee, ramp material, and the year Ontario last verified
  the site. "Boat launch • 2.1 km NE • parking • no fee • Concrete • last
  verified 2023" instead of "Access point".
- Flags keep three states, not two. "No parking" and "nobody recorded whether
  there is parking" are different answers, so an unrecorded flag prints
  nothing rather than guessing — the same rule as the fish-survey wording.

### Why bundled rather than the live endpoint
- The old version queried ArcGIS on demand, so it answered only with a signal.
  "Where do I put the boat in" is asked standing at a lake, which is precisely
  where there is none. That is why v2u removed the access filter and v3o
  removed the layer: a feature that only works with a connection does not
  belong in an app built for the shore.
- It also moves off the endpoint the app used to depend on — an individual's
  ArcGIS Online account that had republished Ontario's data and could have
  vanished without notice. The source is now the government's own host.

### Notes
- **The file is not in this bundle.** Run `python3 tools/build-access.py` on a
  machine with a network, then commit `web/ontario-access.json`. Until then
  the card says the data has not been built rather than implying the lake has
  no access.
- `ontario-access.json` is already listed in the service worker's data cache,
  so it will be picked up and cached as soon as it exists.
- The suite ships an access fixture and checks both directions: a point inside
  the radius appears with its details, one outside does not.

## v3q — 2026-08-26

### Removed
- **The "Ontario Open Data" card** from the Regulations tab, the "Ontario Open
  Data — Fishing Regulations" link from Help's sources list, and the "Ontario
  2026 Regulation Dataset" link from inside the rule cards. `ONTARIO_REGS_DATASET_URL`
  went with them. These were convenience signposts to the raw datasets; nothing
  required them.
- That last one also removed a hardcoded "2026" from a place the v3m expiry
  work had not reached.

### Kept, deliberately
- **The attribution stays.** OpenStreetMap's ODbL and GeoNames' CC-BY require
  attribution as a licence condition, not as a courtesy — removing it would
  mean using that data without a licence, and it is also the kind of thing App
  Store review asks about. `web/LICENSE` already said the ODbL line "must not
  be removed" and the suite already enforced it.
- What remains is the credit line at the foot of Settings and Help — "The
  government, OpenStreetMap and GeoNames data it uses stay under their own
  licences" — and the OpenStreetMap line on the lodging card. Neither points
  anyone at a dataset they could use instead of the app.
- The suite now asserts both halves separately: the Open Data signposting is
  gone, and the attribution is present. Previously one test covered the whole
  block, so removing the licensed part would have looked like the same change
  as removing the optional part.

## v3p — 2026-08-26

### Removed
- **The App link section in Settings.** It displayed the public web address
  with Copy and Share buttons, which is a way to hand out the free version of
  something being prepared for sale. `APP_URL` went with it — nothing else
  used it.
- Note this also removes the only Share affordance in the app. That is the
  intent, not an oversight.

### Added
- **The low-signal advice now also sits at the foot of Explore, under the
  map.** The splash carries it for five seconds at launch, which is easy to
  miss and easier to forget by the time it matters. This puts it where someone
  is actually standing when it becomes relevant — planning a trip, looking at
  the map. Translated, and shown on Explore only.

### Notes
- The two My Lakes requests in the same message were already fixed in v3o: the
  sort and distance controls are shared between Explore and My Lakes (one set
  of elements, `data-show="explore favorites"`), so changing the defaults once
  changed both. The v3n screenshot showed the old values because v3o had not
  been installed.

## v3o — 2026-08-25

### Changed
- **Distance defaults to "Any distance"** again, not 50 km. A default that
  silently excludes most of the province is not something the person asked
  for; the filter is one tap away when it is wanted. Clear returns it there.
- **"Best guess" is gone from the sort wheel and "Closest" is the default.**
  Best guess ranked by a blend that favoured recently stocked lakes, which is
  a preference dressed as an answer — and it was the mechanism behind the v2t
  bug that buried every unstocked lake behind 2,100 stocked ones. Closest is
  what someone standing at a boat ramp means.
- With no position to measure from there is nothing to be closest to, so the
  order falls through to name relevance and then the alphabet, which `apply()`
  already did. No new fallback was needed.

### Removed
- **The "Show fishing access points" map layer**, its endpoint, its state, the
  `nearestAccess()` / `accessIcon()` helpers, and the "Nearest fishing access"
  card on the lake sheet. The layer needed a live connection, so it was blank
  at a lake — the only place the question is ever asked. With nothing left to
  load the data, the card could only ever have been a permanent apology.
- **The "Show lake depth contours" map layer** and `renderDepth()`. The lake
  sheet's depth card stays: it reports the max and mean depth Ontario has on
  record, from bundled data, and says plainly when there is none.
- The Fisheries Management Zone layer is untouched — that one works, and the
  regulations are written against it.

### Notes
- `tools/ACCESS-POINT-SOURCE.md` has been updated rather than deleted. The
  data is still worth having; the note now records that the live approach was
  removed and that bundling is the only sensible way to bring it back.
- Two tests would have quietly stopped testing anything and were rewritten:
  the location-refusal fallback used to rely on the 50 km default to trigger a
  location request and now sets the radius itself, and the Clear-resets-sort
  check now expects `closest` rather than the option that no longer exists.
- `sortDefault`, `showAccess`, `showDepth`, `accessStatus`, `depthStatus` and
  `accessNotLoaded` are left in the string table as orphans, per the standing
  policy.

## v3n — 2026-08-25

### Added
- **`tools/ACCESS-POINT-SOURCE.md`** and a matching comment above `ACCESS_API`
  in `app.js`, recording where fishing-access data should come from. No
  behaviour change — this is a note written where the person who needs it will
  actually be standing.
- The point: `ACCESS_API` currently reads from an individual's ArcGIS Online
  account (`smaglio2`) that republished Ontario's data. It works, but it can
  disappear without notice, and the failure would look identical to the
  ordinary offline case — the card would just stop filling in. The official
  source is layer 0 of Ontario's Fish ON-Line map service, on the same
  government host already used for zone boundaries.
- The note records the useful fields the official layer carries and the
  current one does not — parking, accessibility, user fee, ownership, ramp
  material, and the date Ontario last verified the site — plus the paging
  requirement (MaxRecordCount 2000) and the licence check still outstanding.
- It also records what *not* to do: bring back the access search filter. That
  was v2l's mistake and it was explicitly unwanted. A visible map layer and a
  card on a lake sheet are a different thing from silently removing lakes from
  a list.

### Notes
- Two jobs are described in order of value: repoint the URL (small, removes a
  dependency on a stranger's account), then bundle the data (larger, and the
  real prize, since access points are needed at the lake where there is no
  signal). Neither is done here.

## v3m — 2026-08-25

### Added
- **Regulations now expire, and say so.** Ontario publishes a new summary each
  year and the new rules take effect on 1 January, so the bundled file is good
  through 31 December of its own year and not a day after. Past that, every
  place regulations appear carries a red banner naming the season and stating
  plainly that the seasons, limits and sizes below are out of date, with the
  link to Ontario's current summary right beside it.
- **The year is read from the data file's own metadata**, not hardcoded — so
  regenerating `ontario-regulations-2026.json` for next season is all that is
  needed to clear the warning. Nothing to remember to edit.
- The lake sheet stops calling last season's rules "Current". The link becomes
  "Check current FMZ 18 regulations" once the file is out of date, which is an
  instruction rather than a false claim.
- Hardcoded years removed from the interface: the Regulations tab and the
  shortcut card no longer say "2026" when the data might not be.

### Why this exists even though the plan was to update on 1 January
- Updating the data on New Year's Day fixes the file, not the phones. App
  Store review takes days; people update when they feel like it; someone who
  installed in September and hasn't reopened is still on September's bundle;
  and an angler at a lake with no signal is running whatever was last cached —
  which is offline-first working exactly as designed. There is also a window
  where the old summary has expired and the new one is not published yet.
- The app is careful about honest empty states everywhere else. This was the
  one place it would have confidently asserted something false, and the person
  most exposed is the one who trusts it. It costs nothing while current and
  fails safe when not.

### Notes
- Tested by overriding `regsYear()` rather than moving the system clock, which
  the browser harness cannot do. The suite checks both states: silent and
  cost-free while current, and warning present in the lake sheet and the
  Regulations tab once stale.

## v3l — 2026-08-25

### Changed
- **The splash holds for five seconds**, up from three.
- **The progress bar moves again.** The artwork had a bar printed into it,
  which by definition could not animate. That painted bar is cropped off and a
  live one takes its place directly underneath, sized to match the image so it
  reads as part of the design. "Loading 10,948 Lakes" stays in the artwork
  above it.
- The bar still honours reduced-motion settings, where it renders as a full
  static bar rather than sliding.

### Notes
- The suite's splash timing wait moved from 2,500 ms to 4,600 ms to clear the
  new floor. A timing test tuned to an old duration passes without testing
  anything, which is the third time that has come up — worth remembering that
  `SPLASH_MIN_MS` and that wait are a pair.

## v3k — 2026-08-25

### Fixed
- **The splash artwork is now embedded in `index.html` as a data URI.** As a
  separate file it kept not reaching the phone — the last attempt rendered a
  broken-image icon on the first screen anyone sees. Inlined, it cannot be
  forgotten in an upload, cannot 404, cannot be served stale by a cache, and
  needs no second request: it paints with the document.
- `splash.jpg` / `splash-v3j.jpg` are gone from the bundle and from the
  service worker's precache list. There is no splash file to manage any more.
- The suite now checks `naturalWidth`, not merely that the element exists — a
  broken `src` still produces an element, which is exactly how a broken splash
  shipped without a test noticing.

### Notes
- v3j is confirmed working from the field: the build stamp read v3j and the
  startup timing was right, which means the stale-cache fix landed and the
  v3i startup work (11 MB advisory file off the critical path, and the
  30.6-million-operation match reduced to a Map lookup) is now genuinely
  running. Those two versions were the actual fix; this one is just making
  sure the picture arrives.
- `index.html` is ~144 KB now, most of it the embedded image. It is precached
  and same-origin, so it costs one download ever, versus a separate file that
  cost several failed attempts.

## v3j — 2026-08-25

### Fixed
- **Updates were being installed with stale contents, which explains both
  complaints at once.** The service worker's `install` step used
  `cache.addAll()`, and `addAll()` goes through the browser's ordinary HTTP
  cache — so if Safari still held `app.js` or `splash.jpg` from an earlier
  release, it copied that stale file straight into the brand-new versioned
  shell cache. The cache said v3i; the contents were older. The old splash
  picture kept reappearing **and the old JavaScript kept running**, which
  means the v3i startup fix was very likely never actually executing. Install
  now forces a network fetch for every shell file.
- The splash image is also versioned in its filename now — `splash-v3j.jpg` —
  so no cache at any layer can serve yesterday's picture under today's name.

### Added
- **A build stamp in the corner of the splash.** "The old picture is showing"
  and "it is still slow" were the same bug seen twice, and there was no way to
  tell from outside which build was running. Now the version is readable on
  screen for three seconds at every launch.

### Notes
- The v3i work stands unchanged underneath: the 11 MB advisory file is still
  off the startup path, and the 30.6-million-operation match is still a Map
  lookup. If the stamp reads v3j and startup is still slow, that is new
  information and the next thing to chase — but it will be the first time
  those fixes have actually run.
- The stamp is one line in `styles.css` (`.splashVer`) if it should come out
  before release.

## v3i — 2026-08-25

### Fixed
- **The twenty-five-second startup freeze.** It was never the download. The
  11 MB fish-advisory file was fetched at startup and then matched to lakes
  with a nested scan: 10,948 lakes × 2,799 advisory locations = **30.6 million
  `normName()` calls**, every one of them string work, all on the main thread.
  The splash was leaving on schedule and the app underneath was locked solid,
  which from the outside looks identical to a slow load.
- The matching is now a single `Map` lookup per lake — O(n+m) instead of
  O(n×m), roughly 14,000 operations instead of 30 million.
- **And the file is no longer fetched at startup at all.** Nothing on the
  search screen uses it; only the advisory panel inside a lake sheet does. It
  now loads the first time a lake sheet is opened, and the sheet redraws
  itself when the data lands — guarded by the lake key, so a slow load cannot
  repaint a lake the person has already navigated away from. That takes 11 MB
  of the 17 MB startup payload off the critical path entirely.

### Changed
- **The splash uses the full artwork**, including the gold warning at the top
  and the "Loading 10,948 Lakes" line with its progress bar, as supplied. The
  live caption and bar underneath were removed — they would have been a second
  copy of the same thing an inch below the first — and the image now gets the
  full screen rather than sharing it.
- Alt text updated to describe the whole image, warning and loading line
  together, in both languages.

### Notes
- The baked-in "10,948" is now a fixed number in a picture. It is correct
  today. When the lake index next grows, the artwork needs regenerating or it
  will quietly understate the count — worth a line in the release checklist.
- `splashLoading` is left in the string table as an orphan, same policy as the
  other retired keys.

## v3h — 2026-08-25

### Changed
- **New splash artwork**, Richard's latest mockup: the trout graphic now
  carries a baked-in warning — "don't completely close app if you are
  expecting low or no cell reception" — above the fish. The floor is back to
  three seconds, long enough to actually read that line, up from one.
- The live "Loading Ontario lakes…" caption and progress bar underneath are
  unchanged and still separate from the artwork — the supplied mockup's own
  "Loading 10,948 Lakes" caption was cropped off rather than baked in, because
  that count is not known this early (the splash is deliberately not gated on
  the data, per v3f) and a static number would drift the moment the dataset
  changes. The live caption already says the honest, general version of the
  same thing.
- Richard sent a second, cleaner render of the same design partway through
  this build; that is the one shipped. The alt text below was reworded to
  match its wording exactly.

### Fixed
- **The warning is now readable by a screen reader.** The splash image
  carried `alt=""` because it used to be pure branding — decorative, correctly
  silent. It now contains an actual instruction, and `alt=""` would have made
  a screen reader skip it entirely. It has real alt text, and — since this app
  is bilingual throughout — that alt text translates with everything else
  rather than being stuck in English. A new `data-i18n-alt` attribute pattern
  drives it, alongside the existing `data-i18n-aria`.

## v3g — 2026-08-25

### Fixed
- **Every app update was throwing away the cached lake data.** The data cache
  was named `osl-data-${VERSION}`, and activation deletes every cache that is
  not current — so each of the twenty-odd releases forced the next launch to
  re-download the ~4 MB of stocking records, lake index, gazetteer and
  regulations. That was the recurring fifteen-second start: not the first
  visit, every visit after an update. The data cache is now version-free and
  survives releases; app code and datasets have different lifetimes and now
  have different caches.
- **Data files are served stale-while-revalidate.** The cached copy answers
  immediately — that is the fast start — and a background fetch refreshes it,
  so a new stocking snapshot is at most one launch behind. The snapshot date
  shown in the app tells you which one you are looking at, and Settings keeps
  the manual check.

### Notes
- Two launches to judge any update, as always: the service worker hands over
  the old shell once while installing the new one. From this version onward,
  the update itself no longer costs a data re-download on top of that.
- Genuine first-ever visits still download the full datasets — there is no
  way around that — but from then on the start should be a second or two on
  any connection, including none.

## v3f — 2026-08-25

### Removed
- **Townships are gone entirely** — from the lake cards, the lake sheet, the
  search index, the search hint, and the app no longer calls Ontario's
  township boundary service at all. `townshipLabel()`, `assignTownships()`,
  `loadTownshipsForLakes()` and the layer URL are deleted, not merely unused.
- The reason: the boundaries came from a live government layer and were
  putting lakes in the wrong township. The geometry code was verified correct
  — the v2x polygon-hole fix and the 0.001° precision are both still in place
  — so the app was faithfully reporting an answer that was wrong at source. A
  confidently wrong township is worse than no township.
- Nothing of value is lost. The Fisheries Management Zone is what regulations
  are actually written against, and `whereLine()` already says "about 3.3 km
  SE of Madoc", which is what people wanted a township for in the first place.
- The search hint now offers four ways rather than five, in both languages.

### Fixed
- **The splash sat for ten to fifteen seconds.** It was dismissed at the end
  of `afterStockingLoaded()`, and v3b deliberately awaits both 2 MB datasets
  before exposing anything — so the splash inherited the entire load. It now
  comes down on its own one-second timer, independent of the data.
- Showing the app before the data lands is safe because the app already tells
  the truth about it: the count reads "Loading…", the results area reads
  "Loading…" with a progress bar and a line explaining what is being fetched,
  and searching early returns "no data yet", which is accurate. What v3b
  forbade was presenting a *partial* lake list as complete — an empty one that
  says it is still loading is a different thing, and the honest one.

### Notes
- The suite now asserts the splash is up while `lakes.length === 0`, which is
  only possible if it is not gated on the data. Asserting it merely appears
  and disappears would pass on the fifteen-second version too.

## v3e — 2026-08-25

### Changed
- **The splash floor is one second rather than three.** Long enough to
  register the artwork, short enough that nobody is waiting on it. Three read
  as being held up once the novelty wore off.
- `SPLASH_MIN_MS` is still the single place to change it.

### Notes
- The suite's "still visible" check moved to immediately after page load. It
  used to sit after a 1,200 ms settle, which is now past the floor — it would
  have kept passing while testing nothing. A timing test that outlives the
  timing it was written for is worse than no test.

## v3d — 2026-08-25

### Changed
- **The splash is held for a minimum of three seconds.** On a warm cache the
  merged lake database was arriving in a few hundred milliseconds, so the
  artwork flashed past before it could be read — and the point of it was to
  give people something to look at instead of half-built controls.
- The floor is measured from page load, not from the moment the data is ready,
  so a slow load is never made slower: the wait is only ever the remainder,
  and it is zero when loading already took longer than three seconds.
- Tunable in one place — `SPLASH_MIN_MS` at the top of the splash helper in
  `app.js`.

### Notes
- The failure path and the twelve-second failsafe both go through the same
  helper, so they inherit the floor without special-casing. Twelve seconds is
  still well clear of three.
- The suite now checks both halves: the splash is still up a second into the
  run, and gone once the floor has passed. Asserting only that it eventually
  disappears would have passed happily on the version that flashed.

## v3c — 2026-08-25

### Added
- **A splash screen.** The trout artwork holds the screen with "Loading
  Ontario lakes…" and a moving bar until the merged lake database is ready,
  then fades and is removed. Requested after people were tapping half-loaded
  controls; the splash sits over everything, so there is nothing to mistap.
- The artwork is the supplied art with the baked-in caption and bar cropped
  off, so the caption underneath can actually change and the bar can actually
  move — a painted-on "Loading" becomes a lie the moment loading fails.
  Recompressed to 146 KB and precached by the service worker, so from the
  second launch (and always, in the iOS app) it appears instantly.
- It is dismissed from exactly two places — the moment the first result set is
  real, and the load-failure screen — plus a twelve-second failsafe, because
  no artwork is worth stranding someone behind. It is removed from the DOM
  after fading, not just made transparent: an invisible full-screen layer
  would swallow every tap forever.
- The caption translates, and the bar respects reduced-motion settings.

### Fixed
- **The v3b App Store bundle had drifted out of sync**: `native/www/` still
  carried the v3a app.js and sw.js while `web/` had v3b. The iOS wrapper would
  have shipped the previous version. Re-synced; the byte-identical rule is
  the invariant that exists to catch exactly this.
- The suite still asserted the amber partial-index notes that v3b removed —
  it would have failed on its own fixtures. It now asserts v3b's actual
  model: one merged collection before the first search, and no partial state
  to describe.
- Removed a dead `indexNote` remnant left by the v3b rewrite (a constant
  empty string and the branch that could never fire).

## v3b — 2026-08-25

### Fixed
- **Explore now starts from one complete lake database.** The bundled stocking snapshot and Ontario waterbody index are loaded together and merged before the first searchable result set is exposed. There is no longer a startup window where Search can see only stocked lakes and a later species search can see a different collection.
- **Removed the confusing amber partial-index messages from normal lake search.** The app no longer presents partial stocked-only results as a usable search state. If the core lake index genuinely cannot load, Search stops and shows one clear reload message instead.
- **Species, lake-name and distance searches now operate on the same merged `lakes` collection from the first search onward.** This fixes the reported “lake appears only after species search” behaviour at its source rather than hard-coding Smallmouth Bass or a 50 km workaround.

## v3a — 2026-08-24

### Fixed
- **Searching a lake by name returned nothing when a species wheel was set,
  and would not say why.** Moira Lake with Brook Trout selected gave "0 lakes"
  and "No lakes match these filters" — technically correct, since Moira has 33
  species on record and Brook Trout is not among them, and completely useless,
  because the lake was right there and the reason was a wheel two scrolls up
  the screen.
- **v2y turned this from an edge case into a trap.** Once the last search is
  replayed on launch the species wheel persists, so you can open the app, type
  a lake you know exists, and be silently filtered by a choice you made
  yesterday.
- The empty state now counts what the text and distance matched before the
  wheels were applied, names the wheel that removed them, and offers one tap
  to clear it: "7 lakes match your search, but the Brook Trout filter is
  hiding them." The filters still AND together — "lakes called X that hold
  walleye" is a real question — but a filter that removes everything now
  announces itself.
- **No species plate is drawn over an empty list.** A large confident fish
  above "0 lakes" reads as a result rather than as decoration.

### Notes
- The suppression count is computed in the same pass as the filter rather than
  by filtering the set twice, so the message costs nothing on 10,948 lakes.
- Trevor's report in the same thread — Moira appearing only after a smallmouth
  bass search — is the v2z parallel-fetch bug, not this one. Both presented as
  "the lake is missing" and had nothing else in common.
- The v2z entry below was written twice across an interrupted edit; the
  duplicate has been removed and the fuller wording kept.

## v2z — 2026-08-24

### Fixed
- **Searches made in the first seconds after launch returned stocked lakes
  only.** `ontario-waterbodies.json` is 2.2 MB and was requested only *after*
  the stocking file had been fetched, parsed and built into lakes — so for the
  first few seconds the app held about 2,100 stocked lakes and nothing else,
  and any search in that window came back stocked-only with nothing on screen
  saying so. On a phone over cellular that window is seconds, not
  milliseconds. Reported by Trevor, who searched inside it.
- The index fetch now starts in the same breath as the stocking fetch and is
  awaited when there is something to merge into. Two parallel requests instead
  of two sequential ones, for no extra work.
- **A search that ran before the index landed now says it is partial**, in an
  amber note above the results, and the note clears itself when the index
  arrives and the results fill in. A partial list of lakes is the one thing
  this app must never present as complete.
- **The index failing outright no longer fails silently.** It used to be
  swallowed deliberately — "a file most users will never know exists" — which
  meant the app could hold a fifth of Ontario's lakes with nothing to explain
  why. That is the same present-but-invisible failure as the v2t sort bug. It
  now says the index needs a connection the first time.

### Changed
- **First run asks for location, from the Start Exploring tap.** v2y refused
  to prompt at startup on the grounds that a permission dialog is a poor
  greeting. Trevor pointed out that anyone opening a find-me-a-lake app
  expects to be asked — and he is right. The rule should have been "never
  prompt without context", not "never prompt at startup". This is a tap on a
  button reading Start Exploring, on the screen that has just explained what
  the app does, which is both context and the user gesture the permission API
  wants. It is asked once and never again; declining costs nothing, because
  every distance feature already degrades to a province-wide search.
- The Settings note on reopening the last search says the distance narrows
  once a position arrives, rather than warning it may come back wider.

## v2y — 2026-08-24

### Added
- **The app reopens your last search.** Search smallmouth bass within 50 km
  once and that is what greets you every launch — and everyone else gets their
  own search rather than yours. Survives a refresh, a force-quit and a reboot,
  because it is stored rather than held in memory.
- **A toggle in Settings under "When the app opens"**: reopen my last search,
  or start fresh. Turning it on from a screen you have already searched
  captures that search rather than waiting for the next one; turning it off
  forgets what was stored rather than just ignoring it.
- **Clear forgets the saved search too.** Clear has meant start over since
  v2m; it would be strange for it to leave the next launch showing what you
  just cleared.
- The town centre is stored with its coordinates, not just its name, so a
  restored town search does not have to wait for the gazetteer to load.

### Notes
- **It deliberately does not ask for your location at startup.** A permission
  prompt is a poor way to greet someone opening an app. `apply()` ignores the
  distance filter without a position, so the worst case is a search wider than
  the one you saved, never a wrong one — and the Settings note says so.
- This does not undo v2m. Explore still holds its results back until asked; a
  search you made yourself is something you asked for, which a canned default
  species would not have been.
- Rejected: hard-coding smallmouth bass at 50 km. It would open every user's
  app on one angler's fishing, and there would be no way to tell an
  intentional default from a bug.

## v2x — 2026-08-24

### Fixed
- **Points inside a polygon's holes counted as inside the polygon.** A GeoJSON
  Polygon's first ring is its outer boundary and every ring after it is a hole
  punched out of it. `pointInGeometry()` tested `.some()` across all the rings
  without distinguishing them, so a point sitting in a hole came back inside.
  Township and zone outlines are full of holes — a township wholly enclosed by
  another is exactly that shape.
- **This decided which Fisheries Management Zone a lake was in**, and the FMZ
  is what the regulations link is built from. A lake in a hole could take the
  enclosing zone's number and send someone to the wrong seasons and limits.
  That makes this the more serious half of the bug, even though the visible
  symptom was a township name.
- **Township outlines were generalised four times more coarsely than the
  zones** — `maxAllowableOffset` 0.005 degrees, roughly 550 m of slack in each
  boundary, enough to walk a township line clear across a lake. Moira Lake
  sits close to the Madoc/Huntingdon line, which is how it came back as
  Huntingdon. Now 0.001, about 110 m, with a matching precision bump.
- Reported by Richard, who knows where his own lake is.

### Notes
- Stocked lakes take their township straight from the government stocking
  table and were never affected; only survey-only waterbodies are resolved by
  polygon lookup, and Moira Lake is one of those.
- The fix is verified directly in the suite against a donut polygon rather
  than through a live boundary, since the township and zone services cannot be
  reached from the test environment.

## v2w — 2026-08-24

### Added
- **Trips can be deleted.** There was no way to remove one: the logbook only
  ever grew, so a stray tap on "Start a fishing trip" left an empty trip in it
  permanently. A red delete sits on each trip card and at the bottom of the
  trip sheet.
- It takes two taps in both places, the same as deleting a catch. A trip is a
  season of someone's fishing and there is no undo behind it.
- Every control inside a trip card stops the click reaching the card, which
  opens the trip — otherwise arming a delete would open the sheet on top of
  the question it had just asked.

### Fixed
- **The trip sheet printed dashes where "Not stocked" was the fact.** An
  unstocked lake showed "Stocked: —" and "Latest stocking: —", which reads as
  missing data rather than as the answer. It now says the lake is not stocked,
  and shows the stocking lines only when there is stocking to show. The same
  honest-empty-state rule the lake cards have followed since v2a; the trip
  sheet was simply never brought into line.
- **An ended trip left its checklist fully editable.** Catches were locked and
  notes were read-only, but you could still tick "bring the net" for a trip
  you had come home from, add items to it, or clear the lot. The checklist is
  now kept as it was, and says why.
- **Starting a trip twice on the same lake made a duplicate.** Nothing on the
  lake sheet showed a trip was already running, so a second tap on "Start a
  fishing trip" silently created a second empty one. It now reopens the trip
  that is already open and says so.

## v2v — 2026-08-24

### Added
- **The lake sheet has its own map.** Tapping a lake always panned the main
  map to it — and then covered that map with the sheet, so the pan was
  invisible and the feature looked missing. The sheet now shows the lake on
  its own 190px map, marked and centred, directly under the "about X km from
  Y" line.
- It is a second Leaflet instance sharing the tile cache with the main map, so
  tiles for a lake you were just looking at are usually already there — which
  matters on a weak signal at a lake.
- The map is a bonus, not a dependency: if Leaflet failed to load, or the lake
  has no coordinates, the sheet renders exactly as before. Every fact in it
  still arrives without a map.

### Removed
- **"Show Depth Contours" is gone from the lake sheet.** It turned on a layer
  on the main map and then closed the sheet to reveal it — the button worked,
  but only by dismissing the thing you were reading. The depth card now states
  what Ontario actually has on record for that lake, and says plainly when it
  has nothing rather than implying the lake is shallow.
- The depth-contour layer on the Explore map is untouched; that one is a
  visible control over a visible map.

### Fixed
- **The access card told you to use a map you could not see.** It read "Turn
  on Show fishing access points on the map to load Ontario access data" while
  sitting inside a sheet covering that map. It now says the list has not
  loaded and that it needs a connection, which is the honest reason and the
  one that matters at a lake.

### Notes
- `detail()` rebuilds the sheet's innerHTML on every open, replacing the map's
  container. Reusing the instance would have drawn into a detached node — a
  grey box from the second lake onward. The map is torn down and rebound when
  the container changes. `invalidateSize()` runs once the sheet is on screen,
  because a map created inside a hidden element measures itself as zero.

## v2u — 2026-08-24

### Removed
- **"Only lakes with a nearby fishing access point" is gone.** It was added in
  v2l when Find Fish was folded into Explore, on the argument that "lakes I
  can actually get a line in the water at" is a real-world question. In
  practice it depended on a live government API, so at a lake — offline, which
  is where this app is used — it filtered against an empty list and returned
  nothing. v2o stopped it lying about that, but a filter that only works with
  a signal does not belong in an offline-first app, and it was not wanted.
- `hasNearbyAccess()` went with it; nothing else called it. `committed.access`
  and its handling are gone from `commitFilters()`, `apply()`, `runSearch()`,
  `loadAccess()` and Clear.
- **The map layer is untouched.** "Show fishing access points" still works and
  is a different thing: it draws the access points you can see and judge, it
  does not silently remove lakes from a list.

### Notes
- One control left on that row now — the sort — so Explore is a little
  shorter again.
- The `onlyAccess` and `accessDataPending` strings stay in the table as
  orphans, same policy as the Find Fish strings: inert, and pruning risks more
  than it saves.

## v2t — 2026-08-24

### Fixed
- **Unstocked lakes were being buried, not excluded — which looks identical.**
  The distance filter itself had no stocked gate since v2p; the culprit was
  the default "Best guess" sort, which ranked by stocking year. Every stocked
  lake (1990–2025) outranked every unstocked lake (year 0), and with only the
  first 250 results rendered, the unstocked lakes were all in the data and all
  off the screen — sorted behind up to 2,100 stocked ones. The path that
  triggered it most reliably was a search with location refused: the
  province-wide fallback fell into exactly this sort.
- The default order is now distance whenever there is a centre to measure
  from, and the alphabet when there is not. Stocking year never enters a sort
  the person did not ask for. Recency ordering still exists — the sort
  dropdown and the Recently Stocked shortcut — as something you choose.
- The suite proves it from both directions: with no centre, the order is
  alphabetical and an unstocked lake appears on the first screen; with a
  centre placed beside the unstocked fixture lake, that lake comes first.

### Changed
- **The list heading no longer says "Explore stocked lakes"** over a list that
  is deliberately both. It reads "Explore Ontario lakes", in both languages.
- **My Location is gold, like Search.** They are the same kind of act — start
  a search — and the outlined ghost treatment read as secondary chrome next
  to the thing it equals. (The white-on-white pill in the field report was a
  mixed install: v2s markup with pre-v2s styles, so the button had no styling
  at all.)

### Notes
- Recent Near Me keeps its stocking-recency order. Its card says "newest
  stocked lakes close to you" — it is allowed to be about stocking because it
  says it is. The rule broken by the default sort was imposing that
  preference on searches that never asked.

## v2s — 2026-08-24

### Added
- **My Location, the fifth way to search.** A button under the search box that
  drops any town centre and searches around you. Near Me carried "Use my
  location" until v2l folded it into Explore, and the control left with the
  tab — so after a town search there was no way back to your own position
  except Clear, which also threw away the species and the distance. This
  clears only the centre.
- It empties the search box as part of that, because a town name left sitting
  there would re-establish the town as the centre on the very next search.
- It sits under the search row rather than beside it: that row is already an
  input plus a Search button, and a third control there pushes the input below
  a usable width on a 375pt phone.

### Changed
- **The hint names five ways by kind rather than four by example.** It read
  "a lake (Moira Lake), a fish (Walleye), a town (Belleville) or a township
  (Huntingdon Twp)" — the examples proved the features worked but made the
  line long, and naming one lake and one town on a province-wide app is
  parochial: Moira and Belleville mean nothing in Kenora. It now reads "by
  fish species, by lake, by town, by township, or from your location", in
  both languages.
- The pre-search prompt follows the same wording and points at My Location
  rather than at the two shortcut cards.

## v2r — 2026-08-24

### Fixed
- **Searching a township exactly as the app prints it found nothing.**
  `townshipLabel()` renders the stored value "HUNTINGDON" as "Huntingdon Twp",
  and that is what every result card shows — but only the raw value was
  searchable. `phraseIn()` requires a query's tokens to appear consecutively
  in the field, and "twp" appeared in no field at all, so the two-word form
  matched nothing. People type what they can see. Both forms now match.

### Added
- **The search box explains itself.** A line under it names all four things it
  accepts, with a working example of each: a lake (Moira Lake), a fish
  (Walleye), a town (Belleville) or a township (Huntingdon Twp). The
  placeholder cannot carry four on a 375pt phone — it was already clipping at
  three — so the explanation sits under the box rather than inside it.
- The hint deliberately survives `body.filtering`, which hides the rest of the
  hero copy. The moment someone most needs to know they could have searched a
  town is right after a search that found nothing.
- All four examples are verified against the bundled data rather than
  invented: Moira Lake is in the waterbody index, and Huntingdon Twp only
  became a working query because of the fix above.

## v2q — 2026-08-24

### Fixed
- **The two Explore shortcut cards were hidden from launch, and the hero copy
  with them.** `body.filtering` hides them — it means "the person has narrowed
  something" — and it was set whenever `#radius` held any value at all. v2n
  made 50 km the default, so `filtering` became true the moment the app
  started and stayed true forever. Meanwhile the pre-search prompt card was
  telling people to "tap Recently Stocked or Recent Near Me above", pointing
  at two buttons that were not there. The distance now counts as narrowing
  only when it differs from the default.
- Reported by Richard, who noticed the shortcuts were missing from his own
  screenshot before I did.

### Changed
- **The search box now says it takes town names.** It read "Search a lake,
  township or species" — and in Ontario a township is Huntingdon Twp, not
  Belleville, so the placeholder actively failed to advertise the town search
  added in v2o. It reads "Lake, town or species", which also stops it being
  clipped on a 375pt phone.
- The pre-search prompt names two real towns as examples, in both languages.
  Township matching still works; it is simply no longer what the box claims to
  be for.

### Notes
- Hiding the hero heading and tagline when filtering was the pre-existing
  behaviour that quietly cancelled out the duplicate-copy complaint from v2n.
  With this fixed, both lines are visible again on a cold launch, and that
  duplication is once more worth deciding on.

## v2p — 2026-08-24

### Changed
- **Stocked and unstocked lakes always appear together, each labelled for
  what it is.** The "Include lakes that aren't stocked" checkbox is gone. It
  shipped checked, so all unchecking it ever did was hide four fifths of
  Ontario behind a filter most people would never realize they had flipped —
  and the pills already tell the two apart at a glance: a year for a stocked
  lake, "Not stocked" for the rest.
- The suite now asserts both pill kinds render side by side in one result
  list, rather than only that unstocked lakes exist in the data.

### Notes
- The `includeUnstocked` translation strings stay in the table, per the same
  policy as the Find Fish strings — orphaned keys are inert, and pruning them
  risks more than it saves.

## v2o — 2026-08-24

### Added
- **Type a town, search around it.** "Belleville" now centres the search on
  Belleville: the distance filter applies from there, results sort by distance
  from there, every card's distance is measured from there, and the list is
  titled "Lakes near Belleville". The bundled GeoNames gazetteer — 5,430
  Ontario places — answers this entirely offline, and a town search never asks
  for your location because it brings its own centre.
- Only an exact place-name match counts, so "Rice" keeps finding Rice Lake
  rather than becoming the hamlet of Rice Point. Species names win the tie
  outright: "Splake" is a fish even if a place by that name exists, and the
  suite plants one in the gazetteer to prove it. Where two places share a name
  the larger population wins.
- Town plus species works together: pick a species from the wheel and type a
  town, and the live Ontario lookup runs around the town instead of around
  you. The live lookup is centre-aware now in general.
- Enter in the search box runs `runSearch()` itself instead of a hand-rolled
  copy of part of it, so a typed town behaves identically to a tapped Search.

### Fixed
- **The access-point filter filtered against nothing.** The checkbox tests
  lakes against a list fetched from a live government API. Until that fetch
  finished — or if it failed, which it will offline, meaning at a lake — the
  list was empty, `hasNearbyAccess()` returned false for every lake, and the
  screen said "No lakes match these filters." That message was a lie: the
  filters were fine; the filter's own data was what was missing. Shipped in
  v2l, reported by Richard from the field within the day.
- The filter now simply does not act until the list exists: a search made in
  the meantime runs without it and says so in a toast, in both languages, and
  when the list arrives the search re-runs by itself so the filter takes
  effect without another tap.

### Notes
- "Hastings county" still finds nothing, correctly reported as no match:
  search covers lake names, townships, districts and species, and county
  names exist nowhere in the data. The gazetteer does carry the village of
  Hastings, so that word now centres a search on the village — which is
  closer to what was probably meant anyway.
- The gazetteer loads asynchronously at startup. A town typed in the first
  second or so may fall through to a plain name search; searching again once
  the app has settled will centre correctly. Not worth a loading gate.

## v2n — 2026-08-24

### Changed
- **Explore opens at 50 km rather than "Any distance".** A first search used
  to scan all 10,900 lakes in no particular order, which is not an answer to
  anything. An angler asking about walleye almost always means near here.
  "Any distance" is still one tap away.
- **The dataset stats moved to the onboarding card.** Four tiles reading
  10,900 lakes / 47,000 records / 25 species / 2025 are a first-impression
  device: interesting exactly once, and answering no question you have while
  standing at a lake. The onboarding card is the thing shown exactly once, so
  that is where they belong.
- **Two of the four Explore shortcuts are gone.** 2026 Regulations and Fish
  ON-Line were external links that already appear in Help and in the
  Regulations tab, at the same URLs — prime real estate spent duplicating a
  tab one tap away. Recently Stocked and Recent Near Me stay: those act on the
  app's own data and nothing else does what they do.

### Fixed
- **A refused location used to dead-end a search.** `runSearch()` defers to
  `locate()` when a distance is set without a position, and the failure path
  only set a status line and raised a toast — it never called `apply()`, so
  the screen sat unchanged. Harmless while the default was "Any distance";
  with a 50 km default it would have been the common case. It now falls back
  to a province-wide search and says so, in both languages.
- **My Lakes is exempt from the distance filter.** `#radius` is shared between
  Explore and My Lakes, so a 50 km default would have made a saved lake
  disappear from your own list as soon as you drove home from it.

### Notes
- The stale `.dashboard` CSS — `repeat(5,1fr)` for four tiles, and a
  last-child column span — is overridden rather than untangled; inside a 440px
  card the stats want a plain 2×2.
- The "real anchors, not window.open" assertion moved rather than went away.
  It now runs against the Regulations tab, where those links still live, since
  window.open being blocked in a standalone iOS app is a property of the app
  and not of the two cards that happened to be tested for it.
- The hero still carries both a heading and a tagline saying much the same
  thing, directly above the search box. Left alone this round.

## v2m — 2026-08-24

### Changed
- **Explore holds its results back until you search.** Opening the app painted
  250 result cards and dropped 400 Leaflet markers on the map before anyone
  had asked for anything — the slowest thing at startup, and 10,900 lakes in
  no particular order are not an answer to any question. Reported by Trevor.
- The data still loads in the background exactly as before. Only the rendering
  waits: `lakes` is built, filtered and counted on load, and `shown` is
  computed as it always was. Nothing about the load sequence changed.
- In its place, a prompt naming the number of lakes available and how to reach
  them, plus the dashboard, hero and the two shortcut buttons, which all still
  populate — so the app does not look dead while it is holding back.
- **Clear returns Explore to the prompt** rather than silently re-showing
  everything. Clear means start over.
- **My Lakes and Trips are exempt.** Those views are their contents; holding
  them back would just be broken.
- Recently Stocked and Recent Near Me count as searches, as does pressing
  Enter in the search box — that path bypasses `runSearch()` and had to be
  flipped separately.

### Fixed
- **Every empty-state message was hardcoded English.** "No saved lakes yet",
  "Turn on location", "Searching every lake in Ontario", "No stocked lakes
  match these filters" and the rest never translated, so the moments the app
  most needs to explain itself were the least translated part of it. All six
  now go through `t()`, in both languages, and stay distinct from one another
  — no saved lakes, no location, no data yet and no match are four different
  situations and should not collapse into one "nothing here".
- The no-match message said "No stocked lakes match these filters" while
  Explore has included unstocked lakes by default since v2a. It says "lakes".

### Notes
- `apply()` is untouched, so every count, every filter and the whole staged-
  search mechanism behave identically. The change is confined to `render()`.

## v2l — 2026-08-24

### Removed
- **Find Fish and Near Me are gone. Four tabs, not six.** Six overflowed the
  strip — "Trips" was clipped at the right edge on a 375pt phone.
- **Near Me was a preset, not a feature.** A radius selector plus a distance
  sort, both of which Explore already had. Nothing was lost removing it.
- **Find Fish's headline capability was already in Explore, and was in fact
  narrower there.** Both call `araNearby()` against Ontario's fish survey API,
  so lakes outside the bundled data enter the results either way — but Explore
  also calls `searchProvince()` for lake-name lookups when local results come
  back thin, which Find Fish never did. Find Fish only ever queried by species.
- **Minimum fish stocked is dropped rather than moved.** It fought the app's
  own default: Explore includes unstocked lakes, and a minimum-stocked number
  silently excludes every one of them. Find Fish carried special-case code for
  exactly that conflict. It is a specialist filter nobody reaches for at a lake.
- Dead code removed with it: `runFindFish`, `renderFindResults`,
  `bestMatchScore`, `ruleSummaryForResult`, `findMode`, and the mode-toggle
  wiring. Best Match went too — its scoring read `_findKm`, `_findQty` and
  `_findYear`, fields only ever set by the Find Fish search, so it could not be
  ported honestly without inventing them.

### Added
- **Explore gains an explicit sort**: best guess, closest, most recently
  stocked, most fish stocked. This is the one thing Explore genuinely could not
  do — its ordering was implicit and there was no way to ask for it. An
  explicit sort overrides name-relevance ranking, because someone who asked for
  "most recently stocked" means it.
- Sorting by most fish stocked ranks on stocked totals only. An unstocked lake
  has no number to rank on, so it sorts to the bottom rather than being dropped
  or counted as a zero next to a lake that genuinely received no fish.
- **Explore gains the access-point filter.** Ticking it loads the access-point
  file if it is not already loaded, rather than silently matching nothing.
- **The species plate moved into Explore** rather than leaving with the view it
  was born in. It appears when a single species has been named — picked from
  the wheel or typed in the box — and never for "All species", which would be
  the app choosing a fish on the angler's behalf.

### Fixed
- **`buildFilters()` would have thrown on load.** `$("findYear")` was
  dereferenced without a guard, so removing the panel turned a dead control
  into a startup crash. Caught before packaging, not after.
- **The filter hint never hid and never translated.** The markup read
  `hiddendata-i18n="filtersChanged"` — `hidden` and `data-i18n` run together
  into one meaningless attribute. So "Filters changed — tap Search to apply"
  was permanently visible and permanently English. Both fixed.
- **Onboarding sent people to Find Fish.** `startExploring` called
  `setView("findfish")`, which would have left the app on no view at all. It
  goes to Explore, and the suite now clicks the button rather than trusting it.
- Clear now resets the sort and access controls too, and changing the sort
  marks the search pending like every other staged filter.

### Notes
- Find Fish's orphaned translation strings are left in place. `within` looked
  orphaned but is used programmatically by `data-i18n-within`, so removing the
  block wholesale would have broken the distance dropdowns for no user benefit.
- `.findpanel` and its sibling styles stay too. `.findPlate` is still live —
  the plate uses it in its new home.

## v2k — 2026-08-24

### Added
- **Catches can be edited.** There was no way to correct one: fixing a typo in
  a weight meant deleting and retyping, and the replacement took a fresh
  timestamp, so a fish caught at 6:45 reappeared as caught at 7:20. The pencil
  beside each catch opens the same form, prefilled, with Save changes and
  Cancel. An edit keeps the original id, timestamp and saved location — it is
  the same fish, corrected — and the row is marked as edited so the log does
  not quietly claim to be what was first written down.
- **Deleting a catch now asks first.** The × deleted immediately. This gets
  used with cold wet hands in a moving boat and a catch log cannot be
  recovered, so the first tap arms the row and states the question, and a
  second tap on Delete commits it. The confirmation is drawn in the sheet
  rather than a browser dialog, which in a standalone iOS app can land behind
  the sheet it belongs to.
- **A units toggle at the top of the catch log.** It writes the same setting
  as the one in Settings — one setting, a second door. The moment you want to
  switch is standing over a fish with a tape in your hand, not three sheets
  away.
- Edit and delete are separate 34px buttons with a gap between them, since one
  of them destroys data and they sit side by side.

### Notes
- Editing deliberately does not offer the "save current catch location"
  checkbox. The location belongs to where the fish was caught, and you are not
  standing there any more when you correct a typo.
- The suite covers the new paths: prefill, save, cancel-without-writing, that
  an edit updates in place rather than adding a second catch, that the
  timestamp survives, that one delete tap deletes nothing, and that the in-log
  toggle and the Settings control are the same setting.

## v2j — 2026-08-24

### Fixed
- **Tapping a trip did nothing. The whole Trips tab was dead.** `openTrip()`
  declared `const t = trips.find(...)`, which shadowed the global `t()`
  translation function. Five lines later the catch form called
  `t('catchSpeciesPh')` — calling a trip object as a function. That threw
  `TypeError` partway through building the HTML, so the sheet was never filled
  and never un-hidden. `addCatch()` had the same shadowing.
- It failed only for **active** trips, because the catch form sits inside an
  `${active ? ... : ""}` branch and the template is evaluated lazily. Since a
  trip is active from the moment it starts, the feature was broken for every
  real user while a completed trip would have opened fine.
- No test had ever clicked a trip, which is why "no uncaught errors across the
  whole run" stayed green through every release that shipped this.
- **Eleven strings in the trip UI were hardcoded English** — "Active trip",
  "Completed", "Catch Log", "Lake snapshot", "Released", "Kept", "Save Trip
  Notes", "End Fishing Trip" and others — so Trips was half-English in French.
  All of them now go through `t()`.

### Added
- **The trip sheet has three tabs: Catch log, Checklist and Notes.** It used
  to be one long scroll — snapshot, log, form, notes, end-trip — so logging a
  fish meant scrolling past everything else with cold hands. End Fishing Trip
  stays pinned below the tabs, away from the tap you make forty times a day.
- **A gear checklist per trip.** Fifteen default items — licence, PFDs, first
  aid, rain gear, telling someone where you are going — plus your own, added
  inline. Defaults are stored by key and translated at render, so the list
  still reads correctly after a language switch; custom items keep their own
  wording, since there is nothing to translate them against.
- **Catches record weight as well as length**, and species is now a picker
  seeded from that lake's stocked and survey-recorded species, forage species
  filtered out, with free text as a fallback. If the lake has no species on
  record the picker is not shown at all — a blank dropdown would imply the
  lake holds no fish, which is not what "no data" means.
- **Units are switchable in Settings: metric (cm/kg) or imperial (in/lb).**
  Measurements are stored canonically in centimetres and kilograms and
  converted only for display, so switching reinterprets nothing already
  logged. Switching while a trip sheet is open re-renders it immediately.
- Trip cards show checklist progress for trips that are still running.
- The suite now starts a trip, opens it, logs a fish, reads it back in the
  other unit system, confirms the stored value did not change, ticks a
  checklist item, adds a custom one, checks the French rendering, and confirms
  an ended trip offers no catch form.

### Notes
- Trips saved before v2j are migrated on load, not discarded: the old
  free-text `size` string becomes a numeric `lenCm`, `wtKg` is added as null,
  and a checklist is attached. A logbook is the least disposable thing in this
  app. The same migration runs after a backup restore, since the file may
  predate this version.

## v2i — 2026-08-24

### Fixed
- **The version stamp read "vv2h".** The template was `• v${APP_VERSION}` and
  `APP_VERSION` already carries its own `v`. Long-standing — v2g read "vv2g"
  and so did every version before it.
- **The illustration credit ran into the next sentence.** "AI-generated
  illustrations They are shown to help you picture the fish." The credit
  string from the art manifest is a noun phrase, and the template joined it to
  `plateAboutNote` with a bare space.
- **Help credited the U.S. Fish and Wildlife Service media library, which is
  not where the artwork came from.** USFWS blocks automated access and the
  plates are AI-generated; the link was left behind when the source changed.
  Crediting a source that was not used is the same failure as an empty state
  that says "nothing here" when it means "no data". The link is gone.

### Changed
- **The licence is no longer MIT.** MIT granted anyone the right to copy,
  modify, distribute and sell this app, which is incompatible with a paid
  release — and the notice read "Ontario Stocked Lakes contributors", naming
  nobody. `LICENSE` is now all rights reserved, © 2026 Richard J Allinson,
  with the third-party terms listed separately so it is clear the reservation
  covers the application and not the data it carries.
- **Help and Settings carry the ownership line.** Version, then
  © 2026 Richard J Allinson, then a scoping note in both languages: the
  government, OpenStreetMap and GeoNames data stays under its own licences.
  The scoping matters — that data is not the author's to licence, and a bare
  copyright line under a screen full of Crown data would imply otherwise.
- `CONTRIBUTING.md` no longer invites pull requests. Merged code would leave a
  contributor holding copyright in part of a proprietary application. Issues
  and data corrections are still welcome.

### Added
- The suite now checks Help: that the stamp is not doubled, that the copyright
  line is present and scoped, that no `fws.gov` credit remains, and that the
  art credit ends in punctuation before the following sentence.

### Notes
- Removing the app's own URL from Help was considered and rejected. It changes
  nothing while the repo is public and the Pages site is live — a web app's
  source is readable in the browser regardless. The licence, the repo's
  visibility and whether a free build stays online are the levers that matter.

## v2h — 2026-08-24

### Changed
- **One shape for the four header controls.** The cog and `?` were circles
  while EN and FR were rounded rectangles, so a single row carried two
  geometries and two widths. That mismatch, more than any one control, is what
  read as unfinished. All four are now a 32px square with a 10px radius.
- The gaps are equal too. They were 5px between the round controls and 6px
  inside the language pair — uneven space between items that look like a set.
- **Controls are brighter.** v2g's `#5A7699` border measured 3.27:1, barely
  over the WCAG floor of 3:1 for interface components, and at that level they
  read as disabled rather than pressable. The border goes to `#7691B2`
  (4.72:1) and the glyphs to `#B4C9DC` (9:1). The dimming existed to stop a
  white EN pill out-shouting a 24px wordmark; a 28px wordmark does not need
  that protection.
- **The wordmark is 28px, up from 24px.** At 375pt — a live width on the
  iPhone X, XS and 11 Pro — v2g's narrow-phone rule dropped it to 22px, and
  the app's own name read as a caption beside a 120px fish. The narrow-phone
  and very-narrow sizes go 22px -> 26px and 20px -> 24px to match.
- **Tablets get their own sizing.** 32px controls are a phone floor, not a
  considered size: 28px puts all four under the 30px tap target the browser
  suite enforces, so 32px is simply the smallest thing that passes. At 740px
  and up the controls step to 38px and the wordmark to 34px. 740px catches
  every iPad in portrait — mini 744, Air 820, 11-inch 834, 12.9-inch 1024 —
  and all of them in landscape.

### Added
- **The header layout is now tested, not eyeballed.** v2f shipped a title
  rendering under the gear at 375px because the layout was checked at 320, 390
  and 768 and never at the width between them. The suite now asserts, at 320,
  375, 390, 430, 744, 834 and 1024: the wordmark is not clipped, the brand
  column does not run under the mark, all four controls share one size and one
  radius, every control holds the 30px tap target, and the wordmark never
  falls below 24px.

### Notes
- The larger wordmark costs no header height. The brand column measures about
  103px against the mark's 120px, so the mark still sets the header's height
  and it stays where v2g put it.
- The mark is unchanged at 120px.
- The wide gap between the controls and the mark on iPad is untouched.
  `.headerTop` uses `space-between` with no cap on content width, so on a
  1024pt canvas the two pin to opposite edges. It is a deliberate hold, not an
  oversight — worth deciding on its own rather than folding into this pass.

## v2g — 2026-08-24

### Changed
- **Header rebuilt around the mark.** The brand and controls stack in a left
  column; the illustration takes the right at 120px, roughly double v2f. It
  now reads as an illustration rather than a blue smudge — at 54px the trout,
  the treeline and the water were all lost.
- Title 20px -> 24px, which the freed column makes room for.
- **Controls are outlined rather than filled.** A white EN pill was the
  brightest element in the header, out-shouting the app's own name. The border
  is #5A7699, 3.27:1 against the header — just over the WCAG floor of 3:1 for
  interface components. An earlier outlined pass measured 1.43:1 and the
  buttons read as floating glyphs rather than things you press. Glyphs sit at
  7.5:1. This app is used in sun on open water, so contrast is not cosmetic.
- Controls 36px -> 30px. That is the floor, not a preference: at 28px all four
  drop below the 30px tap target the browser suite enforces.

### Fixed
- **The title rendered underneath the gear at 375px.** v2f set `nowrap` with
  no overflow guard and was verified at 320, 390 and 768 — never at 375, which
  is a live width on the SE and the 13 mini. The new layout is checked at 320,
  375, 390, 430 and 768, with no clipping and no overlap at any of them.

### Notes
- The header goes 121pt -> 187pt, about 15% to 23% of a phone screen, and it
  is sticky on every view. That is the deliberate price of the larger mark.
- Below 390px the mark steps to 104px and the title to 22px; below 340px the
  mark hides entirely. The decoration gives way, never the app's name.

## v2f — 2026-08-24

### Added
- **A mark in the header.** The Ontario silhouette with a brook trout, sized
  at 54px so it sits inside the header's existing height — the header stays
  121pt and this is a sticky element on every view, so extra height would have
  cost screen space on every screen in the app.
- The artwork was supplied on an opaque near-black panel with a rounded-square
  rim. Both were removed: the panel by flood-filling from outside the neon
  outline, the rim by isolating the artwork as its own connected region, then
  alpha derived from luminance so the neon glow fades out instead of ending on
  a hard dark halo against the header's `--green`.
- Precached in `sw.js` as shell rather than left to cache on first sight. It
  appears on every screen, so it should be there on the first offline launch.

### Changed
- Title 23px -> 20px and the control cluster tightened. Four controls plus a
  mark leave roughly 155pt for the wordmark; at 23px it clipped to
  "Stocked L...". Measured at 320, 390 and 768px rather than assumed.
- **A pre-existing clip is fixed.** At 320px — still a live width on the older
  SE — "Stocked Lakes" needed 143px and had 107, so it was already truncating
  before any of this. Below 360px the mark now hides and the title drops to
  18px, which fits in 112px of 112. The mark gives way rather than the
  wordmark: one is decoration, the other is the app's name.

### Notes
- Round controls stay at 36px. Shrinking them buys width but moves toward the
  tap-target floor, which matters for a cold hand at a lake.

## v2e — 2026-08-24

### Fixed
- **An unsubmitted search applied itself when you changed tabs.** Explore's
  filters are staged: the Search button shows "pending" and nothing happens
  until you press it. But `setView()` calls `apply()` on every tab switch, and
  `apply()` read the search box's live DOM value — so typing "walleye" and
  tapping Near Me silently filtered the list from 10,948 lakes to 2,938 with
  the button still showing unapplied changes and nothing confirmed. The
  staging promise was only ever true if you never left the tab.
- `apply()` now filters against a committed snapshot that only advances on a
  real submission: a Search press, Clear, or one of the shortcut buttons that
  deliberately bypass staging. A search you *have* confirmed still carries to
  Near Me, which is the wanted behaviour and is now covered by a test.
- Five separate code paths write into the shared `#radius` field — Explore's
  dropdown, Near Me's own selector, `setView("near")`, "Recent near me" and
  the recent-lakes reset. All five now keep the snapshot in step; previously
  only some of them did, which is what made the original bug intermittent.

### Changed
- **The stale version labels are gone from user-facing copy.** The advisory
  card said "V1K will not guess which advisory applies" and three regulation
  warnings said "V1O will not display a guessed legal limit" — internal
  version markers left in sentences an angler reads, and both several versions
  out of date. They now say "this app" and "the app". `REG_ENGINE_VERSION` was
  declared once and never read: the three V1O mentions were hardcoded
  literals, not interpolations of it, so the constant was removed too.

### Notes
- Five assertions added covering the staged-filter contract end to end,
  including that Clear still resets immediately. 62 passed, 0 failed.
- Unrelated, found while testing: `runSearch()` defers to `locate()` when a
  radius is set but no position is known, and returns without applying. On a
  phone with location granted this is invisible. Worth knowing it exists.

## v2d — 2026-08-24

### Changed
- **The two species cards no longer read as the same list twice.** A lake
  detail showed "Fish species present" and then "Fish observed" — overlapping
  species, no stated difference, and on Crowe Lake the second was a strict
  subset of the first. They are different facts: presence comes from the
  bundled ARA summary of what lives in the waterbody; the other is Fish
  ON-Line's record of what a crew actually netted.
- The netting card is now headed "Counted in netting surveys" and says plainly
  how it differs, including that fewer species appear there because a fish can
  live in a lake without turning up in a netting.
- **The catch counts are now shown.** They were already being fetched and
  summed per species, then thrown away at render. A chip now reads "Walleye —
  47 caught", which identifies the card as survey data at a glance. Where a
  record carries no count the chip says so rather than showing a bare zero.
- Empty and loading states reworded to the same standard as the rest of the
  app: no netting record matched is stated as an absence of records, not an
  empty lake, and the loading line notes the data is unavailable offline.
- French strings added for all of the above; the card was previously
  English-only in both languages.

## v2c — 2026-08-24

### Fixed (test suite only — no app behaviour changed)
- **The waterbody fixture that never existed.** `test-browser.js` mocks the
  stocking snapshot but passed every other local request through to disk, so
  once `ontario-waterbodies.json` was restored, the real 10,001-lake file
  leaked into the suite and three counting assertions failed. The suite now
  mocks the waterbody snapshot the same way it mocks stocking: the six fixture
  lakes plus one survey-only lake (Heron Lake), so merging is exercised
  without live data.
- **An assertion that could never pass.** The hidden-species wheel check
  passed a string to `page.evaluate` with an argument; Playwright treats a
  string as an expression and discards the argument, so the call returned
  `undefined` and the assertion failed unconditionally. It now passes a real
  function. The wheel itself was verified clean — zero hidden species offered.
- The initial card count expectation moved from 6 to 7: unstocked waterbodies
  show by default (`#showUnstocked` ships checked), and the fixture now
  contains one.

### Notes
- Fifteen assertions behind the `wbBuilt` guard had never actually run,
  because every v2a bundle was missing `ontario-waterbodies.json`. They run
  now: 57 passed, 0 failed.

## v2b — 2026-08-24

### Fixed
- **Bass limits were missing in 18 of Ontario's 20 zones.** `REG_CATEGORY`
  mapped Largemouth and Smallmouth Bass to their own zone-table rows, but only
  zone 20 breaks bass out that way; every other zone lists them under
  "Largemouth and Smallmouth Bass or any combination". The lookup missed, and
  the app reported that the zone table did not list a limit when it did. Bass
  is among the most-fished species in the province, so this was the gap most
  likely to be read as "no limit".
- A species may now carry more than one candidate regulation category, and the
  zone decides which applies. Zone 20 keeps its separate rows; zone 1, which
  genuinely has no bass row, still correctly shows no limit. Species that are
  deliberately unmapped — rock bass, suckers, shiners — are unchanged and still
  say the table does not list them rather than guessing.

### Notes
- The species-art credit now reads "AI-generated illustrations". The previous
  line attributed the plates to Duane Raver of the U.S. Fish and Wildlife
  Service and claimed a public-domain licence; the images are AI-generated, so
  both the credit and the licence were wrong. The v2a entry above has been
  corrected to match.
- `fish-advisories-2025.json`, `ontario-stocking.json` and
  `ontario-waterbodies.json` were absent from the v2a bundles and have been
  restored. Verify data files before packaging.

## v2a — 2026-08-24

Version naming continues past v1z as v2a. The scheme stays alphabetic; only the
leading number moves.

### Added
- **Fish illustrations.** A species plate on the rule card when you tap a
  species chip, and at the head of Find Fish results when you have searched for
  a particular fish. AI-generated illustrations, each checked against field
  marks before being accepted.
- The plate is treated as a field-guide plate rather than a photo dropped on a
  card: every illustration is normalised to identical geometry and composited
  onto the app's own `--cream` token, full-bleed to the card edge, with a
  hairline rule and the scientific name in the display serif beneath. Uniform
  geometry is what makes a set of collected images look commissioned; mismatched
  crops on white rectangles are what make them look like clip art.
- `tools/build-species-art.py` does the normalising and writes a manifest.
  `--check` reports coverage without writing. `tools/SPECIES-ART-CHECKLIST.md`
  lists the 25 species worth having, in order of how many Ontario lakes hold
  them, with the licence rules for sourcing them.
- Plates are cached by the service worker on first sight, like the datasets, so
  they are there at the lake with no signal.
- `tools/fetch-species-art.py` pulls the illustrations from the USFWS National
  Digital Library automatically. It accepts a catalogue item only when the
  item's title names the species, verifies every download is a real JPEG, and
  skips — loudly — anything it cannot confirm. Two entries were verified by
  hand against government pages before the script existed and are pinned. A
  skipped species shows no plate, by design.

### Notes
- **These are decorative and the app says so.** Every plate is captioned
  "Illustration — not for identification", and Settings explains why: Ontario
  has species that are easily confused and whose limits differ. Lake trout and
  splake are the obvious pair, and a watercolour with no distinguishing marks
  called out is how somebody ends up keeping a fish they should have released.
  Identification is a different feature and Ontario already publishes it.
- **A species with no verified image of itself gets no plate — never a
  stand-in.** Splake is a brook/lake trout hybrid that resembles both; putting a
  brook trout painting on its card would be inventing information, which this
  app does not do with fish surveys, lodging or empty states. Aurora Trout is
  out for the same reason. Tests enforce that the manifest and the files agree
  in both directions, so a plate cannot be quietly renamed to fill a gap.
- The illustrations are public domain and need no attribution, but the app
  credits them anyway, in Settings alongside Ontario, GeoNames and
  OpenStreetMap. Consistency is the point.
- **This ships unbuilt.** `web/species-art/` is absent, so v2a renders exactly
  as v1z until the images are fetched and the tool is run — the same pattern as
  the gazetteer and the lodging data. Nothing was bundled that had not been
  verified as the right fish.
- The species plate is shown only where one species has been named: a tapped
  chip, or a search for a specific fish. The app never picks a "headline" fish
  for a lake, because it has no honest basis for choosing one.

## v1z — 2026-08-24

### Added
- `tools/build-waterbodies.py --types` reports every `WATERBODY_TYPE` the ARA
  service actually uses, with counts, in one request. The build filter is a
  literal string match, so a guessed type value matches nothing and the build
  comes back smaller with no error — this exists so the vocabulary is read
  rather than guessed.
- `--type "Lake or Pond,Reservoir"` builds against an explicit list of types,
  replacing the all-or-nothing choice between the default lakes filter and
  `--rivers`.
- **Every named lake in Ontario, not just the stocked ones.** The bundled
  Aquatic Resource Area index ships in `web/ontario-waterbodies.json`, so the
  app opens with 10,948 lakes instead of 2,124. Moira Lake, Rice Lake and
  every other self-sustaining fishery finally exists. 1,177 stocked lakes join
  their ARA record by `WATERBODY_LID` and gain recorded species, depth, surface
  area, water clarity and thermal regime; the remaining 8,824 arrive as new,
  never-stocked entries. The loader and the merge shipped in v1x — this is the
  data they were waiting for, so the wiring did not change.

### Changed
- **Baitfish are no longer listed.** ARA records every fish a survey crew
  netted, which is correct for a fisheries dataset and wrong for a lake sheet:
  an angler was scrolling past Iowa Darter, Blacknose Shiner and Creek Chub to
  find Walleye. 126 entries are now hidden from display — minnows, shiners,
  dace, chubs, sticklebacks, sculpins and darters, plus lampreys, gobies,
  Ruffe, Goldfish, Alewife and Gizzard Shad. Carp, suckers, redhorse,
  bullheads, rock bass and bowfin all stay; the line is baitfish, not glamour.
  Rainbow Smelt stays too, because Ontario has a real spring dip-net fishery
  for it. 74 species remain visible.
- **Family and genus placeholders are gone.** "Unidentifiable", "Sunfishes",
  "Perches", "Moxostoma sp." and 22 others were never species. The card
  promises "tap one for its limits and season" and there is no season for
  `Sander sp.`, so every one of those chips was a dead end.
- The exclusion is applied in one place and consumed everywhere — the species
  filter, Find Fish, search matching, the map popups, the result-row summary
  and the `+N` count all read the same list. A filter that offered a fish the
  cards never showed would return lakes that looked wrong.
- **Nothing is deleted from the data.** `l.present` still holds every recorded
  species. This is a display filter, and the app says so when one empties a
  list.

### Fixed
- **French swapped two sort options.** `translateStaticUI()` labelled the sort
  wheel by option index — `bestMatch` to 0, `closest` to 1 — but the markup
  order is `closest, best, recent, quantity`. So in French "Closest" read
  *Meilleure correspondance* and "Best Match" read *Le plus proche*. The four
  options now carry `data-i18n` keys and the index assignment is gone.
- The tab strip, the run button, onboarding and the Find Fish mode note were
  set by hand in JS, two of them with inline `appLang==="fr"?…` ternaries that
  bypassed the translation table entirely. All of them carry keys now.
- 28 more hardcoded English strings translated: the loading and status lines,
  the catch-log and trip-notes fields, the "Best Match" badge, the
  "Recorded here (not stocked)" pill, the empty-result sentences, the weather
  alert fallbacks, the lake depth/area/clarity labels and the thermal regime
  values.
- `settings` was defined twice in each language block, and the two French
  values disagreed — *Réglages* and *Paramètres*. The later definition won
  silently. Removed the earlier one, so nothing about the rendered app changes.
- The `README.md` version footer, which v1x dropped entirely.

### Notes
- The translation table is now 205 keys with full English/French parity, and
  the French species table covers all 74 displayable species plus the 12
  stocked ones. A species outside the table still falls through to English,
  which remains the right failure: an English name is honest, an invented
  French one is not.
- **A blank species list is never "no fish".** There are three reasons a list
  comes back empty and they are three different facts, so they get three
  different sentences: 747 lakes have no survey at all, 144 were surveyed and
  held only forage species, and 21 have records that stop at a family or
  genus. Saying "only baitfish" about a lake whose record reads "Pikes" would
  be a lie — there *is* a pike-family fish in there, ARA just never keyed it.
  All 912 keep the link to Ontario's data.
- The bundled index is the complete province under the tool's filter: a full
  re-run against the live service exhausts at 15,812 features and merges to the
  same 10,001 waterbodies. The filter is `OFFICIAL_WATERBODY_NAME IS NOT NULL
  AND WATERBODY_TYPE = 'Lake or Pond'`, which is why some famous waters are
  absent — Lac Seul is typed as a reservoir, Georgian Bay is part of Lake
  Huron rather than its own record, and the Great Lakes themselves are not
  inland "Lake or Pond" records, which is also why the Great Lakes FMZs are
  near-empty. Widening the type filter (reservoirs, `--rivers`) is a product
  decision for a future bundle; the loader reads whatever is in the file, so
  no code changes would be needed.

## v1x — 2026-08-24

### Changed
- **French is now actually French.** The FR toggle had been translating eight
  elements — the tab strip, the tagline, the Find button, onboarding — while
  roughly a hundred hardcoded English strings sat untouched underneath. What a
  francophone angler got was French tabs on an English app. Every string in
  the markup now carries a translation key, `translateStaticUI()` walks them
  all, and the table runs to 150 keys with full English/French parity.
- **Species and life stages are translated.** Omble de fontaine, touladi,
  truite moulac, doré jaune. These are the words on every single card, so
  leaving them in English was the most visible part of the gap. Filter values
  stay English underneath, so nothing about matching changes. A species not in
  the table falls through unchanged — an English name is honest, an invented
  French one is not.
- **The app says why the regulations stay English.** Ontario publishes seasons
  and limits in English only in this dataset. In French, Settings now says so
  rather than leaving the reader to wonder whether the translation broke.

### Fixed
- The stocking snapshot line kept its English wording after a switch to
  French. It was written once when the data loaded and never re-rendered.

### Notes
- **The French has not been reviewed by a francophone.** It follows the usage
  in Ontario's French fisheries material, but nobody who speaks French has
  read it. A wrong species name is a credibility problem in exactly the
  communities this is for — the northeast, where the stocked lakes are. Worth
  a read-through before this reaches the App Store.

## v1w — 2026-08-24

### Changed
- **The stocking table no longer downloads on every cold open.** It was the
  one dataset in this app fetched live — 12,832 records, every field, pulled
  from ArcGIS before the user had asked for anything. On wifi that was
  invisible. On a weak signal it was a spinner and a chunk of cellular data,
  and with no signal at all the app had no stocking data whatsoever, which is
  a strange state for something whose whole argument is that it works at the
  lake. It is now built by `tools/build-stocking.py` and bundled like the
  regulations, the advisories, the gazetteer and the lodging index: 12,826
  records, 2.1 MB, read from disk. The app opens with no network at all.
- **The live API is still there, on request.** Settings gains "Check for new
  stockings", which does exactly what the old startup fetch did — but because
  someone asked, and it reports what it found.
- **The snapshot is dated wherever it appears.** "Ontario stocking data as of
  2026-08-23" sits under the dashboard and in Settings. Bundled data has an
  age, and letting it read as live would be the same failure as an empty state
  claiming there is nothing there.

### Notes
- If `ontario-stocking.json` has not been built, the app falls back to the
  live API exactly as it did in v1v, so a fresh checkout still works.
- Only the eleven fields the app actually reads are kept; the API returns far
  more and the rest were being downloaded and discarded. Keys are shortened in
  the file and expanded at load, which roughly halves it.
- The browser suite now mocks the bundled snapshot rather than the API. It had
  been mocking the API, which after this change would have tested the fallback
  path while the real 12,000-record file leaked in behind it.

## v1v — 2026-08-24

### Added
- **The trip data is now actually in the bundle.** `ontario-places.json` and
  `ontario-nearby.json` were built for v1u but only ever reached the repo, so
  the web app had the where-line and the lodging card while the iOS build
  quietly had neither — the graceful degradation working exactly as designed,
  on a phone that was never meant to degrade. Both files now ship in `web/`
  and `native/www/` in the App Store bundle, and in `web/` in the GitHub one.
  5,430 places, 3,649 stays.

### Fixed
- **Campsite plot numbers no longer show up as places to stay.** OpenStreetMap
  tags individual pitches inside a campground with their bare number, so the
  lodging card could offer you "17 — Campground, 4 km NE", which reads as a
  bug rather than a booking. `tools/build-nearby.py` now skips any name with
  no letter in it, and the shipped data has had the same filter applied: 127
  entries removed, none of them a real business.
- `.DS_Store` files swept from both bundles. `.gitignore` already covered
  them; they had been packaged anyway.
- **Leaflet was not vendored in the App Store bundle.** `web/vendor/leaflet/`
  held only its README, so the packaged iOS app would have fetched its mapping
  library from unpkg.com at runtime — a blank map at the lake, in an app whose
  entire argument is that it works in airplane mode, and a guideline 2.5.2
  problem besides. The GitHub bundle had the files all along; they are now in
  both, in `web/` and `native/www/`.
- **The browser suite was testing nothing.** It blocked only the Leaflet CDN
  and let everything on the local server through, including the vendored copy
  — so the moment Leaflet was vendored correctly, the "map explains itself
  when Leaflet is missing" check began asserting against an app where Leaflet
  was present. It now refuses the vendored path too, which is the v1.0.0
  dead-on-device regression the suite was written to catch. The App Store
  bundle had been passing this check only because it was missing the library.

### Notes
- `ontario-waterbodies.json` still is not built. `tools/build-waterbodies.py`
  and the service-worker cache entry are both in place and waiting; until it
  is generated the app simply behaves as it always has.

## v1u — 2026-08-23

### Added
- **The lake sheet now says where the lake is.** "About 22 km N of Lakefield"
  under the lake name, composed offline from a bundled gazetteer of Ontario
  towns (GeoNames, CC-BY). Nearest town wins, weighted so a town people have
  heard of beats a hamlet slightly closer. Built once with
  `tools/build-gazetteer.py`; if the file has not been built, the line simply
  does not appear.
- **Camping & lodging within 10 km**, a new card on the lake sheet: named
  campgrounds, motels, lodges, cabins and RV parks from OpenStreetMap (ODbL —
  legal to bundle, with the attribution the card carries), each with distance,
  bearing and a Directions link. Works in airplane mode, which is the point.
  Built once or twice a year with `tools/build-nearby.py`.
- OSM coverage in cottage country is patchy, so the card's empty state says
  "no data for this area", never "nothing nearby" — the same rule as the
  fish-survey wording, and for the same reason. Do not soften it.
- Both new data files are cached by the service worker on first use, like the
  other large datasets, and both are optional: without them the sheet renders
  exactly as v1t did. A browser test asserts that.

### Fixed (packaging)
- READ-THIS-FIRST carried a version stamp seventeen letters stale (v1c), an
  icon instruction pointing at a `tools/icon.py` that does not exist (the
  script is `icons-from-master.py`), and per-file test counts that disagreed
  between the two bundles. The version stamp is now part of the release
  checklist; test counts are no longer hand-written anywhere.
- `tools/__pycache__` is no longer shipped in the bundle.

## v1t — 2026-08-23

### Changed
- **Nothing searches until you press Search.** Every filter change used to run
  a search immediately, and a species query reaches out to Ontario's servers —
  so changing species and then distance fired two searches and two requests
  that nobody asked for. On a weak signal at a lake that is somebody's data
  and somebody's battery.

  Search box, species, year, distance and the unstocked toggle are all staged
  now. Press Search, or Enter, and it runs once.

- **The Search button shows when something is waiting**, with a hint line
  under the filters, so a staged change never looks like the app ignoring you.
  Reduced-motion is respected.
- **One request per search, not two.** A bare species name was being sent as a
  lake-name lookup as well as a species lookup. If the query is a species, only
  the species query goes out.
- The distance filter asks for your location once, when you press Search,
  rather than the instant the dropdown changed.
- **Clear still applies immediately** — having to press Search after clearing
  would be its own small absurdity.
- The count no longer gets stranded on "Searching all Ontario lakes…" after a
  lookup finishes.

## v1s — 2026-08-23

### Fixed
- **The Explore search box could not find a species.** It had its own province
  lookup, but that lookup only asked Ontario for lakes whose NAME matched — so
  typing "walleye" searched for a lake called Walleye, found none, and fell
  back to the handful of stocked walleye lakes already loaded. Moira Lake,
  which holds walleye but has never been stocked, could not appear no matter
  what.

  The species-and-area query already existed; it was wired only into Find
  Fish. The Explore box now uses it too. Searching "walleye" from Moira with
  50 km set returns Moira Lake (0.0 km), Oak Lake (10 km SW), Stoco Lake
  (12 km SE) and the stocked Crowe Lake (21 km W).

- Choosing a species from the Explore dropdown does the same thing — it used
  to filter only what was already loaded.
- A query can be both a place and a fish ("Trout Lake" versus "trout"), so the
  species lookup runs regardless of what the name search returned.
- The species search uses whatever distance is set, defaulting to 100 km. With
  no location granted it says so plainly rather than returning a short list
  and looking broken: a species search needs somewhere to search from.

## v1r — 2026-08-23

### Fixed
- **Distance disappeared every time the app was reopened.** Your position was
  held in memory only and never written down, so each launch started with no
  location and the distance column silently dropped out until you tapped the
  prompt again. The last fix is now kept on the device and restored before the
  first render, so distances are there the moment the app opens.
- If the browser already holds location permission, a fresh fix is fetched
  quietly in the background and the distances update in place. A cold launch
  never raises a prompt on its own.
- A stored position older than two weeks is discarded rather than shown as
  though it were current.

Nothing is transmitted — it is the same coordinate the app already had,
kept beside your saved lakes. The privacy page and the in-app privacy note
both say so now.

## v1q — 2026-08-23

### Removed
- **Historical stocking data, completely.** It fetched roughly 151,000 records
  in 1,000-row pages on every single launch, which is why the dashboard sat on
  "Loading…" long after everything else had settled. Gone: the API constant,
  the paged fetch, the row store, the normaliser, the dashboard stat and the
  "Historical Stocking" block in the lake sheet.

  Nothing else depended on it. The stocking data the app actually uses — the
  current recreational stocking table — is untouched, and so is everything
  built on it.

- The stats strip is four cards now: stocked lakes, stocking records, species,
  latest year. The grid was hard-wired to five columns and would have left a
  gap.

## v1p — 2026-08-23

### Fixed
- **Search matched inside words.** It was a plain substring test, so searching
  "rice lake" returned Mau**rice Lake**, P**rice Lake** and Cla**rice Lake** —
  the query sits inside each of those words. Matching is now anchored to word
  starts: a token has to begin a word.

  Two further rules make it behave the way a person expects:

  **Words must be adjacent.** "pine lake" matches Pine Lake and Jack Pine
  Lake, where the two words sit together — but not Pine Tree Lake, where they
  do not. Same reason "trout lake" skips Trout Creek Lake.

  **Only the last word is a prefix.** That is the one still being typed.
  Earlier words must match whole, so "pine lake" no longer matches Pineapple
  Lake. "walle" still finds Walleye and "brook tr" still finds Brook Trout.

  Fields are also matched separately, so a phrase cannot straddle two of them
  — a Trout in the name plus a Township elsewhere is not a match for
  "trout township".

- **Results are ranked by how well the name matches.** An exact name comes
  first, then a name that starts with the query, then one that contains the
  words, then lakes matched on species or township. "Rice Lake" no longer sits
  below "Big Rice Lake" because of alphabetical order.
- The Find Fish "Lake name" box had the same substring problem and uses the
  same matching now.

### Added
- Regression test for it, so this cannot come back quietly.

## v1o — 2026-08-23

### Added
- **Basemap switcher** on the map: Map, Topo, Plain. The choice is remembered.
  - **Topo** is Ontario's own LIO Topographic tile cache — lakes, rivers,
    wetlands and bush drawn properly, rather than as pale shapes on a road
    map. Same Open Government Licence – Ontario as the rest of the app's data.
  - **Plain** is a light basemap for when the pins matter more than the ground.
- **The map now frames the results.** It used to sit wherever it was last
  dragged while the list below showed something else entirely — which is why a
  Near Me search could show one pin somewhere off to the side. It fits to
  whatever is in the list, includes your position on the location-based views,
  and caps the zoom so a single result doesn't slam to street level.

### Not included, deliberately
Satellite imagery. Esri's World Imagery is the obvious source and it is not
free: its terms require an ArcGIS licence and exclude commercial use, so it
cannot ship in an App Store build. If you want satellite, it needs a paid tile
provider — Mapbox or MapTiler — with an API key.

### Fixed
- The basemap buttons did not show which one was active when the map itself
  had failed to load.
- The new buttons were under the 30px tap-target minimum; the browser suite
  caught it.

## v1n — 2026-08-23

### Fixed
- **Township was missing from survey lakes.** The township lookup was gated on
  having the user's location, which was the wrong dependency entirely — the
  lakes have their own coordinates. A plain name search with location off
  therefore never resolved a township for any of them. It now builds its
  bounding box from the lakes in the result set, so one request covers the
  whole list whether or not location has been granted.
- **Distance was silently absent** when location had not been granted, which
  reads as a missing feature rather than a missing permission. Results now
  carry a "Turn on location — to show how far each lake is from you" prompt
  that grants it in one tap and disappears once distances are showing.

Township, zone and distance now appear on every card in every view — Explore,
Find Fish, Near Me and My Lakes all render the same card.

## v1m — 2026-08-23

### Fixed
- **No lake was showing its Fisheries Management Zone.** The zone boundaries
  were being requested at full shoreline detail — 20 polygons tracing every bay
  and island in Ontario, including the Great Lakes. That payload was too large
  to arrive, so the point-in-polygon assignment never ran and every card came
  back without a zone. The request is now generalised to roughly 200 m, which
  is far finer than needed to decide which zone a lake sits in, and the map
  layer is unaffected.
- The request also retries once on failure, instead of one dropped connection
  costing every card its zone for the session.
- Added an offline fallback: the bundled regulation package records a zone
  against every waterbody with an exception or an additional opportunity, so
  those lakes get a zone with no network at all.

### Changed
- Result cards now lead with **township · FMZ · distance** — the three things
  that identify which lake you are looking at. Everything else follows.
- Townships were rendering as the raw stocking values, shouting in capitals:
  "ADRIAN", "MCTAVISH". They are now "Adrian Twp" and "McTavish Twp", with
  Mc and O' names capitalised correctly.
- The zone is a distinct gold chip so it reads at a glance in a long list.

## v1l — 2026-08-23

### Added
- **Township and distance on every result.** Ontario has several Rice Lakes,
  several Trout Lakes and a great many Long Lakes; a name alone is not an
  answer. Each card now leads with the township and how far away the lake is.
- **Distance carries a compass bearing** — "66 km SW" rather than "66 km".
  Two of the three Rice Lakes in testing were both 66 km out; only the
  direction told them apart.
- Distance also appears in the lake sheet, and township is shown in Find Fish
  result rows.

### How townships are resolved
Stocked lakes already carried a township from the stocking table. Survey
waterbodies did not — the Aquatic Resource Area dataset has no township field.
Those are resolved against Ontario's **Geographic Township Improved** layer:
one envelope query covering the whole search area, then point-in-polygon
locally with the same helper the FMZ assignment already uses. One request per
search area, not one per lake, and the township outlines are heavily
generalised since they only need to be accurate enough to say which one a
point falls inside.

If that lookup fails, the app carries on — distance and bearing still tell the
lakes apart.

### Fixed
- Result cards were about to show the distance twice, once from the new label
  and once from an older "65.8 km away" string. The old one is gone.

## v1k — 2026-08-23

### Fixed
- **The species picker was a text box; the wheel is back.** It became a text
  input in v1i only because the old dropdown could be filled from stocked
  species alone, which left Black Crappie unpickable. It is a `<select>` again
  — the native iOS scroll wheel — now seeded with 23 Ontario sport fish plus
  everything the app discovers in stocking and survey data. Scroll to Black
  Crappie, pick a distance, search.
- **"★ Infinity Best Match."** `Math.max()` over an empty array returns
  -Infinity, which propagated through the score whenever stocking data hadn't
  loaded. Guarded, and the score is now clamped to 0–100.
- Best Match was scored purely on stocking recency and volume, so a lake nobody
  stocked scored on figures that do not exist. Unstocked lakes are now scored on
  what is actually known about them — how thoroughly they have been surveyed,
  size, access, zone.
- The **Find Fish button still read "Find Stocked Lakes"** because the label is
  set from the translation table, which had not been updated. Now "Find Fish
  Near Me" / "Trouver du poisson près de moi".
- Sort option labels were assigned by position, so re-ordering them would have
  mislabelled every option. Keyed by value now.

### Changed
- **Sort defaults to Closest.** When the question is "where is this fish", the
  nearest lake is the answer; Best Match is stocking-weighted.
- The mode switch moved to the top of the panel. It determines what the entire
  search means and was buried under six fields.
- **Reset button** in the panel. A leftover lake-name filter silently returns
  nothing, which is exactly what a stale "Moirs" in the box was doing.
- Stocking year and Minimum fish stocked are dimmed in survey mode — they
  cannot apply to a lake nobody stocked.
- Panel subtitle: "Find which lakes hold a species, near you."

## v1j — 2026-08-23

### Added
- **Tap any species for its limits.** In a lake sheet, each species is now a
  button. Tapping it opens the sport limit, conservation limit and season for
  that species in that lake's Fisheries Management Zone, drawn from the 2026
  regulation data already bundled in the app.
- Aggregate limits are called out as aggregate, so a shared limit is not read
  as a per-species one.
- If the waterbody has its own exception, it is shown in an amber panel above
  the zone limit and labelled as overriding it — because it does.

### Notes on accuracy
- Ontario lists limits under about twenty regulation **categories**, not by
  individual fish. "Black Crappie" has to resolve to "Crappie", "Walleye" to
  "Walleye and Sauger or any combination", "Pumpkinseed" to "Sunfish". Where
  the mapping is used, the card says which category it came from.
- Species that cannot be confidently mapped — rock bass, suckers, shiners,
  sculpin and most baitfish — are **deliberately left unmapped**. The app says
  the zone table does not list a limit under that name and sends you to the
  official summary. It does not guess. A wrong limit shown confidently is the
  one failure in this app that ends with somebody keeping a fish they should
  have released.
- Every card carries the reminder that sanctuaries, bait and gear rules and
  in-season variation orders can override what is shown, with a link to the
  official FMZ page.

## v1i — 2026-08-23

### Fixed
- **Find Fish could only find stocked fish.** It filtered stocking records, so
  a lake with no stocking history was thrown out before its species were even
  looked at. Searching Black Crappie — or muskie, or crappie, or bass in most
  lakes that hold them — returned nothing, because those fish are rarely
  stocked. It now searches where the fish actually are.

### Changed
- **Find Fish asks Ontario's survey data for the species around you.** It sends
  a spatial query to the Aquatic Resource Area service using a bounding box
  derived from your position and the chosen distance, then trims the box to a
  true radius (a square box would have reported lakes up to 40% further away
  than asked for).
- **Two modes**, switchable in the panel. "Anywhere the fish are" (default)
  searches survey records and stocking together. "Stocked lakes only" is the
  old behaviour.
- **Species is now a combobox instead of a dropdown.** The dropdown could only
  ever offer species someone had stocked, which made Black Crappie literally
  unpickable. It suggests everything the app knows about and accepts anything
  typed.
- "Minimum fish stocked" is disabled in survey mode — the figure is meaningless
  for a lake nobody stocked.
- Result cards for a survey match show "Recorded in this lake / Not stocked"
  instead of "0 matching stocked, most recent —", which read as though the
  species was absent.
- Unstocked lakes get the hollow blue marker in Find Fish results too.
- Empty results now say what to try, and distinguish "nothing surveyed nearby"
  from "nothing stocked nearby".

## v1h — 2026-08-23

### Added
- **Live province-wide lake lookup.** Type three or more characters and, if the
  local data turns up fewer than five matches, the app asks Ontario's Aquatic
  Resource Area service directly. Moira Lake, Rice Lake and everything else in
  the province now appear without the bundled index having been built.
  - Runs only when a search comes up short, so the normal case costs no network.
  - Each term is queried once per session.
  - Fails silently — offline is the expected state for this app, not an error.
  - Multiple ARA segments of one lake are merged: species unioned, deepest
    reading kept, centre taken from the largest segment rather than averaged
    (averaging two arms of a lake can put the marker on dry land).
  - Results join to the stocking table on WATERBODY_LID, so a stocked lake is
    enriched rather than duplicated.

### Fixed
- A lake that has never been stocked was showing "Latest stocking —",
  "Stocking records 0", "Township —" and "MNRF district —". Those cells are now
  omitted and replaced with a single "Not stocked".

### Note
The bundled index from `tools/build-waterbodies.py` is still worth building —
it is what makes province-wide search work **offline** and instantly. The live
lookup is the fallback, not a replacement.

## v1g — 2026-08-23

### Added
- **Lakes that have never been stocked.** The app was built entirely from the
  stocking table, so a lake only existed if it had been stocked — Moira Lake,
  Rice Lake and hundreds of other real fisheries were simply absent. It now
  also carries Ontario's Aquatic Resource Area data, which Ontario calls the
  authoritative source for fish species distribution and which covers 20,000+
  waterbodies.
- **Fish species present**, in every lake sheet — the species recorded in
  provincial surveys, shown separately from the stocking history so the two are
  never confused. Stocked lakes gain this too: a lake stocked with brook trout
  may also hold smallmouth, perch and pike, and now says so.
- Maximum and mean depth, surface area, water clarity (Secchi depth) and
  thermal regime, where surveyed.
- Species search and the species dropdown now cover recorded species, not just
  stocked ones — searching "walleye" finds walleye lakes whether or not anyone
  stocked them.
- "Include lakes that aren't stocked" filter, on by default. Unstocked lakes
  carry a "Not stocked" pill and a hollow blue map marker; stocked lakes keep
  the gold one.
- `tools/build-waterbodies.py` builds the index from the live provincial
  service. It is a build step rather than a runtime call because ARA is a
  polygon layer — fetching it live would be hundreds of megabytes and would
  stop working the moment you lost signal.

### Notes
- The index joins to the stocking table on `WATERBODY_LID`, so a stocked lake
  is enriched in place rather than duplicated.
- Where no survey exists the app says so explicitly: no data, not an empty
  lake. That wording is deliberate — do not shorten it.
- The app runs unchanged if the index has not been built.

## v1f — 2026-08-23

### Changed
- **"STOCKED LAKES" is now white, matching ONTARIO above it.** Recoloured from
  the original blue master rather than from the red v1e artwork, so the change
  is one hue/saturation step instead of a recolour of a recolour. The letters
  keep their own light-to-dark modelling; the tone was matched by sampling the
  ONTARIO lettering (mean RGB 230/228/228 against its 227/227/227). The maple
  leaf and the blue lake outline beside the final S are untouched.

## v1d — 2026-08-23

### Changed
- **New app icon** — your artwork: a brook trout over an outline of Ontario.
  Replaces the generated mark, which had almost no value separation between a
  dark olive fish and dark blue water and collapsed into a brown smudge at
  home-screen size.
- Icons are now derived from one source file, `artwork/icon-master-1024.png`,
  by `tools/icons-from-master.py`. To change the icon, replace that file and
  re-run the script.

### Fixed
- **The artwork's corners were pure black**, from a rounded rectangle baked
  into the image. iOS masks the icon again so it mostly hid this on the home
  screen, but the in-app brand mark uses a 15px radius and the black wedges
  showed there. Corners are filled with the artwork's own navy now.
- **The maskable icon was a straight copy of the 512.** Android adaptive icons
  crop to an inscribed circle, so the edges were being cut off. It is inset to
  the 80% safe zone now.
- **The share link is derived from `location`** instead of hardcoded, so it is
  correct on GitHub Pages, on Vercel, and on any domain this moves to. A
  hardcoded URL is what broke it in v1b.

### Added
- `vercel.json`, and **Leaflet is now committed rather than ignored**. Vercel
  never runs the GitHub Pages workflow, so the vendor folder would have been
  empty there, the app would have fallen back to the CDN and offline maps would
  have broken. Committing it means Pages, Vercel and the Xcode build all work
  with no build step.

## v1c — 2026-08-23

### Fixed
- **The Settings → App link didn't work.** It was still the
  `YOUR-USERNAME` placeholder. It now points at the live Pages URL,
  https://richardjallinson.github.io/Ontario-Stocked-Lakes/ — the app itself,
  not the repository, since that's what someone receiving the link wants.
- **The web manifest `id` was `/ontario-stocked-lakes/`**, an absolute path
  that doesn't match a project site served from `/Ontario-Stocked-Lakes/`. A
  mismatched id means the browser can treat an installed copy as a different
  app. It's relative now.
- README carries the real clone URL and a link to the live app.

### Changed
- Package restructured to the Estate File layout: `web/` holds everything that
  goes in the repository, with `tests/`, `tools/`, `maintenance/` and
  `READ-THIS-FIRST.txt` alongside it rather than mixed in.

## v1b — 2026-08-23

### Changed
- **New app icon: a brook trout inside a lake outline.** The old mark was a
  flat yellow cartoon fish. This one is drawn as a real speckled trout —
  tapered profile, forked tail, amber belly, red spots in blue halos, white fin
  margins — sitting inside an irregular lake shoreline with a bathymetry
  contour, on the same deep navy as Estate File.
- Icon artwork is now generated by `tools/icon.py` (Catmull-Rom splines,
  4× supersampled) rather than hand-placed polygons, so the curves are smooth
  and the whole set — web icons, maskable icon and the nine-slot Xcode
  AppIcon — comes from one master and cannot drift.

## v1a — 2026-08-23

### Fixed
- **Every tab showed Explore's content underneath it.** Only the resources
  panel was being hidden, so the hero, stats strip and shortcut cards sat under
  Trips, My Lakes and Near Me. Sections now declare which views they belong to
  and the switcher hides everything else.
- **Search results were below the fold.** Results moved above the map, the map
  layer toggles moved down beside the map where they belong, and once a search
  or filter is active the stats strip and shortcut cards collapse. Results now
  start ~330px down instead of ~1055px.
- The header title wrapped to two lines because four controls crowded it.

### Added
- **Settings** (cog replaces the locate circle in the header): text size
  (Standard / Large / Larger, persisted, with a live preview), language,
  location, app link with copy and share, backup and restore, and a link
  through to Help.
- **Per-view headers.** "Find your next fishing spot" is Explore's alone now.
  Near Me has its own distance selector and locate button, My Lakes has its own
  filter field, Trips has its own heading.

## [1.2.0] — 2026-08-23

Full visual redesign: deep lake navy, light-blue page, gold accent, serif
display type — the same design family as Estate File, benchmarked against
Fishbrain / Navionics / onWater conventions (water-blue chrome, pale calm
basemap, data as the hero).

### Changed
- **Palette**: header and dark surfaces #13263C navy, page background #EEF4F9
  light blue, accent gold #C4941F. App icons, iOS launch colour, manifest theme
  colour and the privacy page all repainted to match.
- **Type**: serif display face (Iowan Old Style / Palatino / Georgia) for
  headings, lake names and the hero — matching Estate File's voice. Numbers set
  tabular throughout.
- **Map basemap switched from default OpenStreetMap to CARTO Voyager**: pale
  land, clearly blue water, quiet labels — small lakes stop disappearing under
  road colour at province zoom. Attribution updated ("© OpenStreetMap
  contributors © CARTO").
- **Markers redrawn**: stocked lakes are gold dots with a navy ring; access
  points are white dots with a water-blue ring; both larger. Styled popups.
- Map card gains a header with a live "N lakes on the map" count; map height
  increased to 380px.
- Signature motif: bathymetry contour lines (from the app icon) behind the hero.

### Fixed
- **Search runs as you type** (240 ms debounce). Requiring a button tap read
  as "search is broken"; the button and the Enter key still work, and Enter now
  dismisses the iOS keyboard.
- Closing the Find Fish panel returns the tab strip to Explore instead of
  leaving Find Fish highlighted over the wrong screen.

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
