'use strict';

const CACHE_NAME = 'static-cache-v3';
const DATA_CACHE_NAME = 'data-cache-v1';

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/scripts/app.js',
  '/scripts/install.js',
  '/styles/checkbox.css',
  '/styles/style.css',
  '/images/install.svg',

  '/assets/dictionary.json',
  
  '/images/alphabets/a/1.png',
  '/images/alphabets/a/2.png',
  '/images/alphabets/a/3.png',
  '/images/alphabets/a/4.png',
  '/images/alphabets/a/5.png',
  '/images/alphabets/a/6.png',
  '/images/alphabets/a/7.png',
  '/images/alphabets/a/8.png',
  '/images/alphabets/a/9.png',
  '/images/alphabets/a/10.png',
  '/images/alphabets/a/11.png',
  '/images/alphabets/a/12.png',
  '/images/alphabets/a/13.png',
  '/images/alphabets/a/14.png',
  '/images/alphabets/a/15.png',
  '/images/alphabets/a/16.png',
  '/images/alphabets/a/17.png',
  '/images/alphabets/a/18.png',
  '/images/alphabets/a/19.png',
  '/images/alphabets/a/20.png',
  '/images/alphabets/a/21.png',
  '/images/alphabets/a/22.png',
  '/images/alphabets/a/23.png',
  '/images/alphabets/a/24.png',
  '/images/alphabets/a/25.png',
  '/images/alphabets/a/26.png',
  
  '/images/alphabets/b/1.png',
  '/images/alphabets/b/2.png',
  '/images/alphabets/b/3.png',
  '/images/alphabets/b/4.png',
  '/images/alphabets/b/5.png',
  '/images/alphabets/b/6.png',
  '/images/alphabets/b/7.png',
  '/images/alphabets/b/8.png',
  '/images/alphabets/b/9.png',
  '/images/alphabets/b/10.png',
  '/images/alphabets/b/11.png',
  '/images/alphabets/b/12.png',
  '/images/alphabets/b/13.png',
  '/images/alphabets/b/14.png',
  '/images/alphabets/b/15.png',
  '/images/alphabets/b/16.png',
  '/images/alphabets/b/17.png',
  '/images/alphabets/b/18.png',
  '/images/alphabets/b/19.png',
  '/images/alphabets/b/20.png',
  '/images/alphabets/b/21.png',
  '/images/alphabets/b/22.png',
  '/images/alphabets/b/23.png',
  '/images/alphabets/b/24.png',
  '/images/alphabets/b/25.png',
  '/images/alphabets/b/26.png',
  
  '/images/alphabets/bin/1.png',
  '/images/alphabets/bin/2.png',
  '/images/alphabets/bin/3.png',
  '/images/alphabets/bin/4.png',
  '/images/alphabets/bin/5.png',
  '/images/alphabets/bin/6.png',
  '/images/alphabets/bin/7.png',
  '/images/alphabets/bin/8.png',
  '/images/alphabets/bin/9.png',
  '/images/alphabets/bin/10.png',
  '/images/alphabets/bin/11.png',
  '/images/alphabets/bin/12.png',
  '/images/alphabets/bin/13.png',
  '/images/alphabets/bin/14.png',
  '/images/alphabets/bin/15.png',
  '/images/alphabets/bin/16.png',
  '/images/alphabets/bin/17.png',
  '/images/alphabets/bin/18.png',
  '/images/alphabets/bin/19.png',
  '/images/alphabets/bin/20.png',
  '/images/alphabets/bin/21.png',
  '/images/alphabets/bin/22.png',
  '/images/alphabets/bin/23.png',
  '/images/alphabets/bin/24.png',
  '/images/alphabets/bin/25.png',
  '/images/alphabets/bin/26.png',
  
  '/images/alphabets/m/1.png',
  '/images/alphabets/m/2.png',
  '/images/alphabets/m/3.png',
  '/images/alphabets/m/4.png',
  '/images/alphabets/m/5.png',
  '/images/alphabets/m/6.png',
  '/images/alphabets/m/7.png',
  '/images/alphabets/m/8.png',
  '/images/alphabets/m/9.png',
  '/images/alphabets/m/10.png',
  '/images/alphabets/m/11.png',
  '/images/alphabets/m/12.png',
  '/images/alphabets/m/13.png',
  '/images/alphabets/m/14.png',
  '/images/alphabets/m/15.png',
  '/images/alphabets/m/16.png',
  '/images/alphabets/m/17.png',
  '/images/alphabets/m/18.png',
  '/images/alphabets/m/19.png',
  '/images/alphabets/m/20.png',
  '/images/alphabets/m/21.png',
  '/images/alphabets/m/22.png',
  '/images/alphabets/m/23.png',
  '/images/alphabets/m/24.png',
  '/images/alphabets/m/25.png',
  '/images/alphabets/m/26.png',
  
  '/images/alphabets/n/1.png',
  '/images/alphabets/n/2.png',
  '/images/alphabets/n/3.png',
  '/images/alphabets/n/4.png',
  '/images/alphabets/n/5.png',
  '/images/alphabets/n/6.png',
  '/images/alphabets/n/7.png',
  '/images/alphabets/n/8.png',
  '/images/alphabets/n/9.png',
  '/images/alphabets/n/10.png',
  '/images/alphabets/n/11.png',
  '/images/alphabets/n/12.png',
  '/images/alphabets/n/13.png',
  '/images/alphabets/n/14.png',
  '/images/alphabets/n/15.png',
  '/images/alphabets/n/16.png',
  '/images/alphabets/n/17.png',
  '/images/alphabets/n/18.png',
  '/images/alphabets/n/19.png',
  '/images/alphabets/n/20.png',
  '/images/alphabets/n/21.png',
  '/images/alphabets/n/22.png',
  '/images/alphabets/n/23.png',
  '/images/alphabets/n/24.png',
  '/images/alphabets/n/25.png',
  '/images/alphabets/n/26.png',
  
  '/images/alphabets/s/1.png',
  '/images/alphabets/s/2.png',
  '/images/alphabets/s/3.png',
  '/images/alphabets/s/4.png',
  '/images/alphabets/s/5.png',
  '/images/alphabets/s/6.png',
  '/images/alphabets/s/7.png',
  '/images/alphabets/s/8.png',
  '/images/alphabets/s/9.png',
  '/images/alphabets/s/10.png',
  '/images/alphabets/s/11.png',
  '/images/alphabets/s/12.png',
  '/images/alphabets/s/13.png',
  '/images/alphabets/s/14.png',
  '/images/alphabets/s/15.png',
  '/images/alphabets/s/16.png',
  '/images/alphabets/s/17.png',
  '/images/alphabets/s/18.png',
  '/images/alphabets/s/19.png',
  '/images/alphabets/s/20.png',
  '/images/alphabets/s/21.png',
  '/images/alphabets/s/22.png',
  '/images/alphabets/s/23.png',
  '/images/alphabets/s/24.png',
  '/images/alphabets/s/25.png',
  '/images/alphabets/s/26.png',
  
  '/images/alphabets/t/1.png',
  '/images/alphabets/t/2.png',
  '/images/alphabets/t/3.png',
  '/images/alphabets/t/4.png',
  '/images/alphabets/t/5.png',
  '/images/alphabets/t/6.png',
  '/images/alphabets/t/7.png',
  '/images/alphabets/t/8.png',
  '/images/alphabets/t/9.png',
  '/images/alphabets/t/10.png',
  '/images/alphabets/t/11.png',
  '/images/alphabets/t/12.png',
  '/images/alphabets/t/13.png',
  '/images/alphabets/t/14.png',
  '/images/alphabets/t/15.png',
  '/images/alphabets/t/16.png',
  '/images/alphabets/t/17.png',
  '/images/alphabets/t/18.png',
  '/images/alphabets/t/19.png',
  '/images/alphabets/t/20.png',
  '/images/alphabets/t/21.png',
  '/images/alphabets/t/22.png',
  '/images/alphabets/t/23.png',
  '/images/alphabets/t/24.png',
  '/images/alphabets/t/25.png',
  '/images/alphabets/t/26.png',
];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  evt.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
      })
  );

  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  evt.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
  );

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  if (evt.request.url.includes('/forecast/')) {
    console.log('[Service Worker] Fetch (data)', evt.request.url);
    evt.respondWith(
        caches.open(DATA_CACHE_NAME).then((cache) => {
          return fetch(evt.request)
              .then((response) => {
                // If the response was good, clone it and store it in the cache.
                if (response.status === 200) {
                  cache.put(evt.request.url, response.clone());
                }
                return response;
              }).catch((err) => {
                // Network request failed, try to get it from the cache.
                return cache.match(evt.request);
              });
        }));
    return;
  }
  evt.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(evt.request)
            .then((response) => {
              return response || fetch(evt.request);
            });
      })
  );
});
