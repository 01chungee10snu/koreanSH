const CACHE_NAME = 'super-phonics-v1';
const ASSETS = [
    './',
    './index.html',
    './hangul.css',
    './hangul.js',
    './manifest.json',
    'https://fonts.googleapis.com/css2?family=Jua&family=Nanum+Pen+Script&display=swap'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
