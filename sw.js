/* Ontario Stocked Lakes — service worker
   Shell is precached. Large datasets are cached on first use so the initial
   load isn't blocked on ~12 MB. Live government API calls always go to the
   network so regulations and advisories are never served stale. */

const VERSION = "v4x";
const SHELL = `osl-shell-${VERSION}`;
/* Deliberately NOT versioned. The data cache used to be osl-data-${VERSION},
   and activate deletes every cache that is not current — so every app update
   threw away ~4 MB of cached lake data and the next launch re-downloaded all
   of it. Twenty-odd versions in, that was the recurring fifteen-second start.
   The app code changes constantly; the datasets change rarely. They get
   different lifetimes now. */
const DATA  = "osl-data";

const SHELL_FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./vendor/leaflet/leaflet.css",
  "./vendor/leaflet/leaflet.js",
  "./icons/header-mark.png",
  // The header and search-card lake plates. In the shell, not DATA_FILES:
  // they are chrome, and a header that loads its background only after the
  // first online visit would defeat the point of bundling them.
  "./img/header-lake.webp",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./privacy.html",
  "./privacy.js"
];

// Big local datasets: cached the first time they're requested, not on install.
const DATA_FILES = ["fish-advisories-2025.json", "ontario-regulations-2026.json",
                    "ontario-waterbodies.json", "ontario-nearby.json",
                    "ontario-places.json", "ontario-stocking.json", "ontario-access.json",
                    "species-art/manifest.json"];

// Species plates are small and cached on first sight, the same as the datasets.
// An angler at the lake with no signal should still see the fish.
const isPlate = (url) => /\/species-art\/.+\.webp$/.test(url);

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(SHELL)
      /* cache:"reload" matters more than it looks.
         addAll() goes through the browser's ordinary HTTP cache by default, so
         if Safari still held app.js or splash.jpg from an earlier release it
         would happily copy that stale file into the brand-new shell cache. The
         version number would say v3j and the contents would be v3g. That is
         how an old splash picture kept reappearing after an update — and it
         means the old JavaScript was being served too. */
      .then(c => c.addAll(SHELL_FILES.map(u => new Request(u, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== SHELL && k !== DATA).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  // Live government APIs and map tiles: network only, never cached.
  if (!sameOrigin) return;

  // Navigations: network first so a new release is picked up immediately.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Large datasets and species plates: stale-while-revalidate. The cached
  // copy answers immediately — that is the fast start — and a background
  // fetch refreshes it, so a new stocking snapshot is at most one launch
  // behind. The dataAge line in the app shows which snapshot is on screen,
  // and Settings has a manual "Check for new stockings" for the impatient.
  if (DATA_FILES.some(f => url.pathname.endsWith(f)) || isPlate(url.pathname)) {
    e.respondWith(
      caches.open(DATA).then(async c => {
        const hit = await c.match(req);
        const refresh = fetch(req).then(res => {
          if (res.ok) c.put(req, res.clone());
          return res;
        }).catch(() => hit);
        return hit || refresh;
      })
    );
    return;
  }

  // Shell assets: cache first, refresh in the background.
  e.respondWith(
    caches.match(req).then(hit => {
      const network = fetch(req).then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(SHELL).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || network;
    })
  );
});
