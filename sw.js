var cacheName = 'cache-offline'; 
 var filesToCache = [ 
   '/',
   '/index.html',
   '/index.js',
   '/main-modules.js',
   '/style.css',
   '/script.js',
   '/ServiceWorker.js',
   '/sw.js',
   '/manifest.json',
   '/LICENSE',
   '/README.md', 
 ]; 
  

 self.addEventListener('install', function(e) { 
   e.waitUntil( 
     caches.open(cacheName).then(function(cache) { 
       return cache.addAll(filesToCache); 
     }) 
   ); 
 }); 
  
 self.addEventListener('fetch', function(e) { 
   e.respondWith( 
     caches.match(e.request).then(function(response) { 
       return response || fetch(e.request); 
     }) 
   ); 
 });

const CACHE = "cache-offline";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener("install", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);
