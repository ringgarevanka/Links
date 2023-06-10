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

window.onload = function() {
    alert("Announcement: This page is still under development, may have errors or bugs.

Last Updated: 10.6.2023

@ringgarevanka");
}
