const cacheName = "romantic-countdown-v4";
const filesToCache = [
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
];

self.addEventListener("install", (event) => {
  console.log("Service Worker installed");
  self.skipWaiting();
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

self.addEventListener("activate", (event) => {
  console.log("Service Worker activated");
});

self.addEventListener("push", (event) => {
  const data = event.data?.json() || {};
  const title = data.title || "Countdown Update!";
  const options = {
    body:
      data.body ||
      "Time is flying! See how close you are to meeting your love 💖",
    icon: "/icons/icon-192.png",
    badge: "/icons/badge-72.png",
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const targetUrl =
    event.notification.data?.url || "https://countdown.vikytech.in";

  event.waitUntil(
    clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((windowClients) => {
        for (let client of windowClients) {
          if (client.url === targetUrl && "focus" in client)
            return client.focus();
        }
        if (clients.openWindow) return clients.openWindow(targetUrl);
      })
  );
});
