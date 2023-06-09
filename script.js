/* cached service */
window.onload = () => {
   'use strict';

   if ('serviceWorker' in navigator) {
      navigator.serviceWorker
         .register('./minicache.js')
         .then(function () {
            console.log('Caches Service Registered (DONE)');
            console.log('Page Loaded');
            alert('WELCOME, THIS PAGE IS UNDER DEVELOPMENT MAY SOME FEATURES DON T WORK YET');
         });
   }
}