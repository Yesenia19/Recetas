Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
        console.log("El usuario ha permitido las notificaciones");
      // El usuario ha permitido las notificaciones
        const notification = new Notification('Nuevo mensaje', {
        body: 'Gracias por aceptar notificaciones',
        icon: 'images/badge.png',
    });
    } else {
        console.log("El usuario ha denegado las notificaciones");
      // El usuario ha denegado las notificaciones
    }
  });

// To display an empty badge
//navigator.setAppBadge();

// To display a number in the badge
//navigator.setAppBadge(42);

navigator.setAppBadge(42).then(() => {
    console.log("The badge was added");
}).catch(e => {
    console.error("Error displaying the badge", e);
});
  

  