// JavaScript Document


var filesToCache = [
  '/css/styles.css',
  '/css/responsive-elements.css',
  '/js/dbhelper.js',
  '/js/restaurant_info.js',
  '/js/service_worker.js',


];



self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('restraunt_review_v8').then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    // TODO: remove the old cache
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});