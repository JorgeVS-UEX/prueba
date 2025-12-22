const CACHE_NAME = 'crystal-pro-v2.2';
const STATIC_ASSETS = [
    'app.html',
    'manifest.json'
];

// ============ INSTALACIÓN ============
self.addEventListener('install', (event) => {
    console.log('✓ Service Worker instalándose...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('✓ Cache abierto:', CACHE_NAME);
            return cache.addAll(STATIC_ASSETS);
        }).catch(err => {
            console.log('✗ Error en cache:', err);
        })
    );
    self.skipWaiting();
});

// ============ ACTIVACIÓN ============
self.addEventListener('activate', (event) => {
    console.log('✓ Service Worker activándose...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('✓ Limpiando cache antiguo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// ============ FETCH (Offline First) ============
self.addEventListener('fetch', (event) => {
    // Solo interceptar requests GET
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        // Primero intentar obtener del cache
        caches.match(event.request).then((response) => {
            if (response) {
                console.log('✓ Desde cache:', event.request.url);
                return response;
            }

            // Si no está en cache, hacer fetch normal
            return fetch(event.request).then((response) => {
                // Si la respuesta es válida, guardar en cache
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }

                // Clonar la respuesta
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            }).catch(() => {
                // Si hay error y estamos offline, intentar servir desde cache
                return caches.match(event.request).then((response) => {
                    if (response) {
                        return response;
                    }
                    // Si no hay nada en cache, retornar error offline
                    return new Response(
                        'Offline - No hay datos en cache',
                        { status: 503, statusText: 'Service Unavailable' }
                    );
                });
            });
        })
    );
});

// ============ SINCRONIZACIÓN EN BACKGROUND ============
self.addEventListener('sync', (event) => {
    console.log('✓ Sincronización en background:', event.tag);
    if (event.tag === 'sync-data') {
        event.waitUntil(syncData());
    }
});

async function syncData() {
    try {
        console.log('✓ Sincronizando datos...');
        // Aquí podrías sincronizar datos con un servidor si lo necesitas
        return true;
    } catch (error) {
        console.error('✗ Error sincronizando:', error);
        throw error;
    }
}

// ============ PUSH NOTIFICATIONS ============
self.addEventListener('push', (event) => {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect fill="%23bc8cff" width="192" height="192"/><text x="50%" y="50%" font-size="100" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">CP</text></svg>',
        badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect fill="%23bc8cff" width="96" height="96"/></svg>',
        tag: 'crystal-pro',
        requireInteraction: false
    };

    event.waitUntil(
        self.registration.showNotification('Crystal Pro', options)
    );
});

// ============ CLICK EN NOTIFICACIÓN ============
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then((clientList) => {
            for (let client of clientList) {
                if (client.url === '/' && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow('app.html');
            }
        })
    );
});

console.log('✓ Service Worker cargado');
