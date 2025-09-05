const CACHE = 'allenamenti-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    try { await c.addAll(ASSETS); } catch (err) {}
  })());
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    const cached = await c.match(e.request);
    try {
      const net = await fetch(e.request);
      try { c.put(e.request, net.clone()); } catch (err) {}
      return net;
    } catch (err) {
      return cached || (e.request.mode === 'navigate'
        ? caches.match('./index.html')
        : Response.error());
    }
  })());
});