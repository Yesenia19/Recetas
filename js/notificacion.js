Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
        console.log("El usuario ha permitido las notificaciones");
      // El usuario ha permitido las notificaciones
        new Notification('Nuevo mensaje', {
        body: 'Revisa las actualizaciones que tenemos para ti',
        icon: 'images/icon-384x384.png',
        badge: 'images/badge.png'
    }); 
    } else {
        console.log("El usuario ha denegado las notificaciones");
      // El usuario ha denegado las notificaciones
    }
  });

//To display an empty badge
//navigator.setAppBadge();

//To display a number in the badge
navigator.setAppBadge(42);

navigator.setAppBadge(42).then(() => {
    console.log("La badge fue agregada");
}).catch(e => {
    console.error("Error displaying the badge", e);
});