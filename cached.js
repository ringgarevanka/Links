var cacheName = 'cache'; 
 var filesToCache = [ 
   '/',
   '/index.html',
   '/links.js',
   '/links-modules.js',
   '/style.css',
   '/script.js',
   '/cached.js',
   '/manifest.webmanifest',
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
