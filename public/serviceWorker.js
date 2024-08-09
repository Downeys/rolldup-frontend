const CACHE_NAME = 'version-9';
const urlsToCache = ['index.html', 'offline.html', 'styles.css'];

// Install SW
const addResourcesToCache = async (resources) => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(resources);
};
  
this.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache(urlsToCache)
    );
});

// Activate the SW
this.addEventListener('activate', (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
      caches.keys().then((cacheNames) =>
          Promise.all(
              cacheNames.map((cacheName) => {
                  if (!cacheWhitelist.includes(cacheName)) {
                      return caches.delete(cacheName);
                  }
              })
          )
      )
  );
});

// Listen for requests
this.addEventListener('fetch', (event) => {
  event.respondWith(
      caches.match(event.request).then(() => {
          return fetch(event.request).catch(() => caches.match('offline.html'));
      })
  );
});
