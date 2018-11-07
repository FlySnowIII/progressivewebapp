var cacheName = 'PWA_TANG_TEST';

self.addEventListener('install', event => {
    console.log('Install: ', event);
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll([
                './lib/images/hello.png',
                './lib/js/jquery.min.js',
                './lib/js/bootstrap.min.js',
                './lib/js/clipboard.min.js',
                './lib/js/index.js',
                './lib/css/bootstrap.min.js',
                './firebase-logo.png',
                './index.html'
            ]))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request, { ignoreSearch: true }).then(function (response) {
        if (response) {
            console.log('From Cache: ', event.request.url);
            return response;
        }


        var requestToCache = event.request.clone();

        console.log('From Http: ', requestToCache.url);
        return fetch(requestToCache).then(function (response) {
            if (!response || response.status !== 200) {
                console.log('No 200 !!!!!!!!!!!!', response);
                return response;
            }

            var responseToCache = response.clone();
            caches.open(cacheName).then(function (cache) {
                console.log("Copy to Cache!!!!!!!!!!!!", responseToCache)
                cache.put(requestToCache, responseToCache);
            });

            console.log('From Http2: ', event.request.url);
            return response;
        })
        .catch(function(err){
            console.err("fetch(requestToCache):",err);
            // alert("ネットワークがきれました。しばらくお待ちください。")
            return;
        });

    }));
});
