self.addEventListener('push', function(e) {
  var data = e.data ? e.data.json() : {};
  self.registration.showNotification(data.title || 'Up-Nepa Osun', {
    body: data.body || '',
    icon: '/www/icon.png',
    badge: '/www/icon.png'
  });
});
