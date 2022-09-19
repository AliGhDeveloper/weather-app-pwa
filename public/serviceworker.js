//listening to installation
const cachename = 'static-sitev6';
const secondCache = 'site-dynamic-v4';
const assets = [
    '/offline.html',
    '/static/media/Shabnam.29b054fef01851a338b2.ttf',
    '/images/logo.png',
    '/images/cloudy-day-1.svg',
    '/manifest.json'
]

//limit cache size


self.addEventListener('install', (ev) => {
    ev.waitUntil(caches.open(cachename)
    .then(cache => {
        cache.addAll(assets);
    }))
})

self.addEventListener('activate', (ev) => {
    ev.waitUntil(
        caches.keys().then( keys => {
            return Promise.all(
                keys.filter( key => key !== cachename && key !== secondCache)
                .map( key => caches.delete(key))
            )
        })
    )
});

self.addEventListener('fetch', (e) => {
    e.respondWith( 
        caches.match(e.request)
            .then(Res => {
                return Res || fetch(e.request).then(response => {
                    return caches.open(secondCache).then(cache => {
                        cache.put(e.request.url, response.clone());
                        return response;
                    })
                }) .catch(() => {
                    if( e.request.url.indexOf('.html') > -1) return caches.match('/offline.html');

                })
            })
    )
})