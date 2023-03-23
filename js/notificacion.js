Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
        console.log("El usuario ha permitido las notificaciones");
      // El usuario ha permitido las notificaciones
        const notification = new Notification('Nuevo mensaje', {
        body: 'Gracias por aceptar notificaciones',
        icon: 'images/badge.png',
        actions: [
            {
                action: "view-content",
                title: "Yes"
            },
            {
                action: "go-home",
                title: "No"
            }
        ]
    });
    } else {
        console.log("El usuario ha denegado las notificaciones");
      // El usuario ha denegado las notificaciones
    }
  });
  

  