self.__precacheManifest = [].concat(self.__precacheManifest || []);

const isNav = event => event.request.mode === "navigate";

workbox.routing.registerRoute(({ url, event }) => {
  return url.pathname === "/";
}, workbox.strategies.cacheFirst());

workbox.routing.registerRoute(
  ({ event }) => isNav(event),
  new workbox.strategies.NetworkFirst({
    cacheName: workbox.core.cacheNames.precache,
    networkTimeoutSeconds: 5,
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [200]
      })
    ]
  })
);

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.setCatchHandler(({ event }) => {
  if (isNav(event))
    return caches.match(workbox.precaching.getCacheKeyForURL("/index.html"));
  return Response.error();
});
