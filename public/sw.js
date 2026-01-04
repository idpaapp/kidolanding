// Empty service worker to prevent 404 errors
// This file exists to handle requests from browser extensions or third-party scripts
// that may try to register a service worker at /sw.js

self.addEventListener('install', () => {
  // Skip waiting to activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Take control of all pages immediately
  event.waitUntil(self.clients.claim());
});

// No fetch handler - this service worker does nothing
// It just prevents 404 errors from browser extensions or scripts looking for /sw.js

