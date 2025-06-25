const cacheName = "romantic-countdown-v1";
const filesToCache = [
  "./",
  "./index.html",
  "./widget.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return Promise.all(
        filesToCache.map((url) =>
          fetch(url).then((response) => {
            if (!response.ok) throw new Error("Failed to fetch " + url);
            return cache.put(url, response.clone());
          })
        )
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
