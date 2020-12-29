// service-worker

self.addEventListener('install', function(evt) {
 evt.waitUntil(
   caches.open('pipapo-store').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/css/pipapo_style.css',
       '/img/pipapo_logo.png',
       '/img/pipapo_favicon.svg',
       '/img/pipapo_favicon_64x64.png',
       '/img/pipapo_favicon_256x256.png',
       '/js/home_app.js',
       '/js/lib/pipapo_common.js',
       '/js/controllers/next_button_controller.js',
       '/libjs/stimulus.umd.js',
     ]);
   })
 );
});

self.addEventListener('fetch', function(evt) {
  console.log(evt.request.url);
  evt.respondWith(
    caches.match(evt.request).then(function(response) {
      return response || fetch(evt.request);
    })
  );
});
