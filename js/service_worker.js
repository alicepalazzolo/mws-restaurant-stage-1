// JavaScript Document
if('serviceWorker' in navigator) {
window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service_worker.js');
  });
}


var filesToCache = [
  '/css/styles.css',
  '/css/responsive-elements.css',
  '/js/dbhelper.js',
  '/js/restaurant_info.js',
  '/js/service_worker.js',


];

var staticCacheName = 'restraunt_review_v4';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});