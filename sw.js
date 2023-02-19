// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Register the service worker and specify its scope
    navigator.serviceWorker.register('https://zuciopath1.github.io/saganmanatlebloResursebi/sw.js', { scope: 'https://zuciopath1.github.io/saganmanatlebloResursebi/' })
      .then(registration => {
        console.log('Service worker registered successfully:', registration);
      })
      .catch(error => {
        console.log('Service worker registration failed:', error);
      });
  });
}

// Install and activate the service worker
self.addEventListener('install', event => {
  event.waitUntil(        
    caches.open('static')
      .then(cache => {
        // Add files to the cache
        cache.addAll([
          '/',
          '/index.html',
          '/static/styles/css/style.css',
          '/static/js/app.js',
          // '/favicon.png'
        ]);
      })
  );
});

// Fetch resources from the cache if available, or the network if not
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          // Serve the response from the cache
          console.log('Serving from cache:', event.request.url);
          return response;
        }
        // Fetch the resource from the network
        console.log('Fetching from network:', event.request.url);
        return fetch(event.request);
      })
  );
});
