
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('quiz-cache').then(cache => {
            return cache.addAll([
                'index.html',
                'style.css',
                'quiz.js',
                'manifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
