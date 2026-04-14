const CACHE = 'pakt-v18';
const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './app-icon-192x192.png',
  './app-icon-512x512.png',
  './apple-touch-icon.png',
  './pakt-logo.png',
  './lib/react.production.min.js',
  './lib/react-dom.production.min.js',
  './lib/babel.min.js',
  './lib/qrcode.min.js',
  './lib/firebase-app-compat.js',
  './lib/firebase-database-compat.js',
  './lib/firebase-auth-compat.js',
  './lib/firebase-firestore-compat.js',
  './lib/firebase-storage-compat.js',
  './lib/InstrumentSerif-Regular.woff2',
  './lib/InstrumentSerif-Italic.woff2',
  './lib/Outfit-Variable.woff2',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200 || res.type === 'opaque') return res;
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      });
    })
  );
});
