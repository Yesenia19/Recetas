Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
        console.log("El usuario ha permitido las notificaciones");
      // El usuario ha permitido las notificaciones
        const notification = new Notification('Nuevo mensaje', {
        body: 'Tienes un nuevo mensaje',
        badge: 'https://github.com/Yesenia19/Recetas/blob/61843857a1b93c0148068b4aa53a3b1f9506630e/images/moneda.png'
    });
    } else {
        console.log("El usuario ha denegado las notificaciones");
      // El usuario ha denegado las notificaciones
    }
  });
  

  