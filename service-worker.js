importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js');

if (workbox) {
    workbox.routing.registerRoute(
        new RegExp('https://ddragon.leagueoflegends.com/cdn/13.20.1/data/en_US/champion.json'),
        new workbox.strategies.NetworkFirst()
    );
}