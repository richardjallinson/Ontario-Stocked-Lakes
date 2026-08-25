/* Ontario Stocked Lakes — service worker
   Shell is precached. Large datasets are cached on first use so the initial
   load isn't blocked on ~12 MB. Live government API calls always go to the
   network so regulations and advisories are never served stale. */

const VERSION = "v2s";
const SHELL = `osl-shell-${VERSION}`;
const DATA  = `osl-data-${VERSION}`;

const SHELL_FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./vendor/leaflet/leaflet.css",
  "./vendor/leaflet/leaflet.js",
  "./icons/header-mark.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./privacy.html",
  "./privacy.js"
];

// Big local datasets: cached the first time they're requested, not on install.
const DATA_FILES = ["fish-advisories-2025.json", "ontario-regulations-2026.json",
                    "ontario-waterbodies.json", "ontario-nearby.json",
                    "ontario-places.json", "ontario-stocking.json",
                    "species-art/manifest.json"];

// Species plates are small and cached on first sight, the same as the datasets.
// An angler at the lake with no signal should still see the fish.
const isPlate = (url) => /\/species-art\/.+\.webp$/.test(url);

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(SHELL)
      .then(c => c.addAll(SHELL_FILES))
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

  // Large datasets and species plates: serve from cache, otherwise fetch and store.
  if (DATA_FILES.some(f => url.pathname.endsWith(f)) || isPlate(url.pathname)) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(DATA).then(c => c.put(req, copy));
        }
        return res;
      }))
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
