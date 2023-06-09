/* cached service */
window.onload = () => {
   'use strict';

   if ('serviceWorker' in navigator) {
      navigator.serviceWorker
         .register('./minicache.js')
         .then(function () {
            console.log('Caches Service Registered (DONE)');
            console.log('Page Loaded');
            alert('Welcome, This page is not fully finished, some features may not be accessible yet.');
         });
   }
}