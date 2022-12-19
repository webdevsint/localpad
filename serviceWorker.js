const cacheName = "localpad";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./new.html",
        "./styles/index.css",
        "./styles/new.css",
        "./styles/quill.snow.css",
        "./scripts/index.js",
        "./scripts/new.js",
        "./scripts/localdb.js",
        "./scripts/quill.min.js",
        "./manifest.json",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .open(cacheName)
      .then((cache) => cache.match(event.request, { ignoreSearch: true }))
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
