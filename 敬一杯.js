self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('chat-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});