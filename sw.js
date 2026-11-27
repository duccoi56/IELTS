const CACHE_NAME = 'ielts-mastery-v55';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/icon.svg'
];

// Whitelisted CDN hosts for offline styling, icons, charts, and fonts
const CACHEABLE_CDN_HOSTS = [
  'cdn.tailwindcss.com',
  'cdn.jsdelivr.net',
  'unpkg.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isAllowedCdn = CACHEABLE_CDN_HOSTS.some((host) => url.hostname === host || url.hostname.endsWith('.' + host));

  // Do not cache live dictionary or AI API requests; let them go straight to network
  if (!isSameOrigin && !isAllowedCdn) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request).then((resp) => {
        if (resp && (resp.status === 200 || resp.type === 'opaque')) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return resp;
      }).catch(() => cached);

      // For HTML navigation, prefer network first so updates arrive quickly, fallback to cache offline
      if (event.request.mode === 'navigate') {
        return networkFetch.then((resp) => resp || cached);
      }

      // Stale-while-revalidate for static assets and whitelisted CDN libraries
      return cached || networkFetch;
    })
  );
});
