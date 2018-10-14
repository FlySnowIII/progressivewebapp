var cacheName = 'helloWorld';

self.addEventListener('install',event=>{
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll([
                '/lib/images/hello.png',
                '/lib/js/script.js'
            ]))
    );
});

self.addEventListener('fetch',event=>{
    console.log('Event:',event);
});

// self.addEventListener('fetch',function(event){
//     console.log("HHHHHHHHHHHHHH");
//     event.respondWith(
//         caches.match(event.request)
//             .then(function (response){
//                 if(response){
//                     console.log('From Cache');
//                     return response;
//                 }
//                 console.log('From Http');
//                 return fetch(event.request);
//             })
//     );
// });