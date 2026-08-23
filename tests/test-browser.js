/* Rendered-app checks for Ontario Stocked Lakes.
 *
 * These exist because of the v1.0.0 failure: every static check passed while
 * the app was completely dead on device. Leaflet 404'd, `L` was undefined, the
 * first Leaflet call threw, and the whole script died — no search, no stats, no
 * buttons. Nothing that reads source files could have caught it. Only actually
 * loading the page can.
 *
 * Run:  node tests/test-browser.js
 * Needs Playwright + Chromium. Skips cleanly without one.
 */
const path = require('path');
const http = require('http');
const fs = require('fs');

let chromium;
try { ({ chromium } = require('playwright')); }
catch { console.log('Browser suite skipped: Playwright is not installed (npm i -D playwright).'); process.exit(0); }

const ROOT = path.resolve(__dirname, '..');
const PORT = 8792;
let pass = 0, fail = 0;
const ok = (v, n) => { if (v) { console.log('  ok  ' + n); pass++; } else { console.log('FAIL  ' + n); fail++; } };

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
               '.json': 'application/json', '.png': 'image/png', '.webmanifest': 'application/manifest+json' };

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]);
  const file = path.join(ROOT, rel === '/' ? 'index.html' : rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); return res.end('not found');
  }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});

// Synthetic stocking records, so the suite never depends on a live government
// service being up (or on the machine having a network at all).
const SPECIES = ['Brook Trout', 'Brown Trout', 'Rainbow Trout', 'Walleye', 'Splake'];
const features = [];
['Trout Lake', 'Bass Lake', 'Loon Lake', 'Clear Lake', 'Silver Lake', 'Otter Lake'].forEach((name, i) => {
  [2025, 2024, 2023].forEach((year) => {
    features.push({ attributes: {
      Official_Waterbody_Name: name, Waterbody_Location_Identifier: 'WB' + i,
      Geographic_Township: 'Nipissing', MNRF_District: 'North Bay',
      Species: SPECIES[(i + year) % SPECIES.length], Stocking_Year: year,
      Number_of_Fish_Stocked: 1000 * (i + 1), Developmental_Stage: 'Yearling',
      Latitude: 45.2 + i * 0.1, Longitude: -79.4 - i * 0.1 } });
  });
});

(async () => {
  await new Promise((r) => server.listen(PORT, '127.0.0.1', r));
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));

  await page.route('**/*', (route) => {
    const url = route.request().url();
    if (url.includes('127.0.0.1')) return route.continue();
    if (url.includes('FishStockingDataForRecreationalPurposes')) {
      return route.fulfill({ status: 200, contentType: 'application/json',
        body: JSON.stringify({ features, exceededTransferLimit: false }) });
    }
    // Everything else external — including the Leaflet CDN — is refused, which
    // is the worst realistic case and the one that broke v1.0.0.
    if (url.includes('unpkg.com')) return route.abort();
    return route.fulfill({ status: 200, contentType: 'application/json', body: '{"features":[]}' });
  });

  await page.goto('http://127.0.0.1:' + PORT + '/index.html', { waitUntil: 'load' });
  await page.waitForTimeout(1200);

  ok(errors.length === 0, 'no uncaught errors on load' + (errors.length ? ': ' + errors[0] : ''));
  ok(await page.isVisible('#onboarding'), 'first-run onboarding appears');
  await page.click('#closeOnboarding');

  // The v1.0.0 regression, stated directly.
  ok(await page.evaluate('typeof apply === "function"'),
     'app.js finished executing even with Leaflet unavailable');
  ok(await page.isVisible('#mapNotice'),
     'the map area explains itself when Leaflet is missing rather than sitting blank');

  await page.waitForTimeout(900);
  const lakes = await page.innerText('#statLakes');
  ok(lakes === '6', 'the dashboard counts lakes from the data (' + lakes + ')');
  ok((await page.innerText('#statSpecies')) !== '—', 'the species stat populates');

  const cards = await page.$$eval('.results .record', (e) => e.length);
  ok(cards === 6, 'all lakes render as cards (' + cards + ')');

  await page.fill('#search', 'brown trout');
  await page.click('#searchBtn');
  await page.waitForTimeout(500);
  const found = await page.$$eval('.results .record', (e) => e.length);
  ok(found > 0 && found < 6, 'search narrows the list (' + found + ' of 6)');

  await page.fill('#search', 'zzzznotalake');
  await page.click('#searchBtn');
  await page.waitForTimeout(400);
  ok((await page.innerText('#results')).toLowerCase().includes('no stocked lakes'),
     'an empty search says so instead of showing a blank list');

  await page.fill('#search', '');
  await page.click('#searchBtn');
  await page.waitForTimeout(400);
  await page.$eval('.results .record', (el) => el.click());
  await page.waitForTimeout(600);
  ok(await page.isVisible('#sheet'), 'tapping a lake opens the detail sheet');
  ok((await page.innerText('#detail')).includes('Regulations') ||
     (await page.innerText('#detail')).includes('Limits'),
     'the detail sheet shows regulation information');
  await page.click('#closeSheet');

  // Bilingual
  await page.click('#langFR');
  await page.waitForTimeout(400);
  ok((await page.innerText('#brandTagline')).includes('lacs'), 'French switches the interface');
  ok((await page.innerText('#findFishBtn')).includes('Trouver'), 'French reaches the shortcut cards');
  await page.click('#langEN');
  await page.waitForTimeout(300);

  // Help, backup controls, disclaimer
  await page.click('#helpBtn');
  await page.waitForTimeout(400);
  ok(await page.isVisible('#exportData'), 'the backup control is reachable from Help');
  ok((await page.innerText('#helpContent')).includes('Not an official'),
     'the not-a-government-app disclaimer is in Help');
  ok(!/prototype/i.test(await page.innerText('body')), 'no "prototype" wording is visible anywhere');

  // Accessibility floor
  const small = await page.$$eval('button', (els) =>
    els.filter((e) => { const r = e.getBoundingClientRect();
      return r.width > 0 && r.height > 0 && (r.height < 30 || r.width < 30); }).length);
  ok(small === 0, 'every visible button meets a ~30px minimum tap target (' + small + ' too small)');

  ok(errors.length === 0, 'no uncaught errors across the whole run' + (errors.length ? ': ' + errors[0] : ''));

  await browser.close();
  server.close();
  console.log('\n' + pass + ' passed, ' + fail + ' failed');
  process.exit(fail ? 1 : 0);
})();
