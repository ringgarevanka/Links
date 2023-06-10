window.onload = () => {
   'use strict';

   if ('serviceWorker' in navigator) {
      navigator.serviceWorker
         .register('./serviceWorker.js')
         .then(function () {
            console.log('Caches Service Registered (DONE)');
            console.log('Page Loaded');
         });
   }
}