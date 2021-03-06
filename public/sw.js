// self.addEventListener("install", function (event) {
//     console.log("Hello world from the Service Worker 🤙");
//   });


// sw.js
const cacheName = "kaldiPWA-v1";
const filesToCache = ["favicon.ico"];

self.addEventListener("install", function(event) {
  // Perform install steps
  console.log("[Servicework] Install");
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});


self.addEventListener("activate", function(event) {
  console.log("[Servicework] Activate");
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log("[ServiceWorker] Removing old cache shell", key);
          return caches.delete(key);
        }
      }));
    })
  );
});


self.addEventListener("fetch", (event) => {
  console.log("[ServiceWorker] Fetch");
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );

});




// addEventListener('backgroundfetchsuccess', event => {
//     console.log('[Service Worker]: Background Fetch Success', event.registration);
// });

// self.addEventListener('install', event => {
//     console.log('[Service Worker]: Installed');
// });

// self.addEventListener('activate', event => {
//     console.log('[Service Worker]: Active');
// });
