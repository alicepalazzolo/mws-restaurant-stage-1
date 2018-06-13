// JavaScript Document
var filesToCache = [
  '.',
  'css/styles.css',
  'https://normalize-css.googlecode.com/svn/trunk/normalize.css',
  'css/responsive-elements.css',
  'js/dbhelper.js',
  'js/restaurant_info.js',
  'js/service_worker.js',
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyBuoK8qG-gieie9wNNJncvBekqLgBaWP8w&libraries=places&callback=initMap'

];

var staticCacheName = 'restraunt_review_v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});