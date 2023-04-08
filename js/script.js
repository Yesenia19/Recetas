// Optenemos open-close
const $openClose = document.getElementById("open-close"),
      // Optenemos el atributo id de nuetro aside
      $aside = document.getElementById("aside");

 // Damos funcionalidad al menú
$openClose.addEventListener("click",()=>{
    // Acedemos a la variable aside y hacemos que despliege y se oculte 
    $aside.classList.toggle("desplegar")
})

// Submenus
let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});

// Notificacions
var box  = document.getElementById('box');
var down = false;


function toggleNotifi(){
	if (down) {
		box.style.height  = '0px';
		box.style.opacity = 0;
		down = false;
	}else {
		box.style.height  = '510px';
		box.style.opacity = 1;
		down = true;
	}
}
