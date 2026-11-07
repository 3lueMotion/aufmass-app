/* Service Worker: macht die App offline-fähig und holt Updates automatisch. */
const VERSION = 'aufmass-1.0';
const SHELL = ['./', './index.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
const LIBS = [
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(VERSION);
    await c.addAll(SHELL);
    for (const u of LIBS) { try { const r = await fetch(u, { mode: 'no-cors' }); await c.put(u, r); } catch (err) {} }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== VERSION) await caches.delete(k);
    await self.clients.claim();
  })());
});

function timeout(ms) { return new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms)); }

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // App-Seite: zuerst Netz (für Updates), bei schlechtem Netz nach 4 s aus dem Speicher
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      const c = await caches.open(VERSION);
      try {
        const r = await Promise.race([fetch(req), timeout(4000)]);
        if (r && r.ok) c.put('./index.html', r.clone());
        return r;
      } catch (err) {
        return (await c.match('./index.html')) || (await c.match('./')) || Response.error();
      }
    })());
    return;
  }

  // PDF-Bibliothek: aus dem Speicher, sonst laden und merken
  if (url.hostname.includes('cdnjs.cloudflare.com') || url.hostname.includes('cdn.jsdelivr.net')) {
    e.respondWith((async () => {
      const c = await caches.open(VERSION);
      const hit = await c.match(req.url);
      if (hit) return hit;
      const r = await fetch(req);
      c.put(req.url, r.clone());
      return r;
    })());
    return;
  }

  // Eigene Dateien: sofort aus dem Speicher, im Hintergrund aktualisieren
  if (url.origin === location.origin) {
    e.respondWith((async () => {
      const c = await caches.open(VERSION);
      const hit = await c.match(req);
      const net = fetch(req).then(r => { if (r && r.ok) c.put(req, r.clone()); return r; }).catch(() => null);
      return hit || (await net) || Response.error();
    })());
  }
});
