self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('health-app-cache').then(cache => {
      return cache.addAll([
        'dashboard.html',
        'meal-plan.html',
        'exercise.html',
        'progress.html',
        'settings.html',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
