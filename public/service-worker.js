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
    event.respondWith(caches.match(event.request).then(function(response){
        if(response){
            console.log('From Cache: ',event);
            return response;
        }
        console.log('From Http: ',event);
        return fetch(event.request);
    }));
});