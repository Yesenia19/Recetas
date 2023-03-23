Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
        console.log("El usuario ha permitido las notificaciones");
      // El usuario ha permitido las notificaciones
        const notification = new Notification('Nuevo mensaje', {
        body: 'Gracias por aceptar notificaciones',
        badge: 'images/badge.png'
    });
    } else {
        console.log("El usuario ha denegado las notificaciones");
      // El usuario ha denegado las notificaciones
    }
  });
  

  