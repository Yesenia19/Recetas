 // Obtén una referencia a la base de datos de Firebase
 var db = firebase.database();
 var ref = db.ref("RecetasPlatos");

 // Obtén una referencia a la lista HTML
 var contenedor = document.getElementById("contenido");

 ref.on("value", function(snapshot) {
 contenedor.innerHTML = ""; // Limpia el contenedor antes de agregar los nuevos elementos
 snapshot.forEach(function(childSnapshot) {
     var childData = childSnapshot.val(); 
     var childData2 = childSnapshot.val().Ingredientes;// Obtiene los datos del hijo
     console.log(childData2);
     var nuevoElemento = document.createElement("div");
     var nuevoElemento1 = document.createElement("div");  // Crea un nuevo elemento "div"
     var nuevoElemento3 = document.createElement("div");

     nuevoElemento.classList.add("box"); 
     var i = 1;
     // Agrega una clase CSS al nuevo elemento
     var imagen = "imagen";
     nuevoElemento.innerHTML = "<img src="+childData.imagen+" alt="+childData.nombre+" class="+imagen+"><h3>" + childData.nombre + "</h3><p>Ingredientes:</p><ul>";
     nuevoElemento3.innerHTML = "<p>Preparación:</p><ul>"+childData.procedimiento+"</ul>";
     for(i in childData2) {
         console.log(childData2[i]);
         nuevoElemento1.innerHTML = "<li>"+ childData2[i] + "</li><ul>"; // Agrega el contenido HTML al nuevo elemento
         nuevoElemento.innerHTML = nuevoElemento.innerHTML + nuevoElemento1.innerHTML;
         
         i=i+1; 
     }
     
     nuevoElemento.innerHTML = nuevoElemento.innerHTML + nuevoElemento3.innerHTML;
     contenedor.appendChild(nuevoElemento);
    

     
     // Agrega el contenido HTML al nuevo elemento
     // Agrega el nuevo elemento al contenedor
     
 });
 // Agrega un escucha para los cambios en la base de datos
     ref.on('value', function(data) {
         // Muestra una alerta cada vez que se agrega un dato a la base de datos
         alert("Se agregó una nueva receta");
         new Notification('Nuevo mensaje', {
         body: 'Revisa las actualizaciones que tenemos para ti',
         icon: 'images/icon-384x384.png'}); 
     });
 });
 
