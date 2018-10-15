var cacheName = 'helloWorld';

self.addEventListener('install',event=>{
    console.log('Install: ',event);
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll([
                './lib/images/hello.png',
                './lib/js/script.js'
            ]))
    );
});

self.addEventListener('fetch',event=>{
    event.respondWith(caches.match(event.request,{ignoreSearch:true}).then(function(response){
        if(response){
            console.log('From Cache: ',event.request.url);
            return response;
        }


        var requestToCache = event.request.clone();

        console.log('From Http: ',requestToCache.url);
        return fetch(requestToCache).then(function(response){
            if(!response || response.status !== 200){
                console.log('No 200 !!!!!!!!!!!!',response);
                return response;
            }

            var responseToCache = response.clone();
            caches.open(cacheName).then(function(cache){
                console.log("Copy to Cache!!!!!!!!!!!!",responseToCache)
                cache.put(requestToCache,responseToCache);
            });

            console.log('From Http2: ',event.request.url);
            return response;
        });

    }));
});