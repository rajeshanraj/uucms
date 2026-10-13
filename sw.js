const CACHE_NAME = 'freshtime-cache-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Pass real-time Firebase & API requests through directly without stale caching
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});