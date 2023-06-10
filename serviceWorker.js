window.onload = () => {
   'use strict';

   if ('serviceWorker' in navigator) {
      navigator.serviceWorker
         .register('./serviceWorker.js')
         .then(function () {
            console.log('Loaded');
         });
   }
}
