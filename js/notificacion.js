Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
        console.log("El usuario ha permitido las notificaciones");
      // El usuario ha permitido las notificaciones
    } else {
        console.log("El usuario ha denegado las notificaciones");
      // El usuario ha denegado las notificaciones
    }
  });
  
const notification = new Notification('Nuevo mensaje', {
    body: 'Tienes un nuevo mensaje',
    badge: 'https://yesenia19.github.io/Recetas/moneda.png'
});
  