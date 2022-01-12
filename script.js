//Elementos
const boxTarea = document.getElementById('tareas');
const btn = document.getElementById('btn');
const formulario = document.getElementById('tarea');
let tareas = [];

//Eventos
EventosGenerales();

function EventosGenerales(){
    btn.addEventListener('click'|| 'Enter', AgregarElementos);

}

//Funciones

function AgregarElementos(e){

    const tarea = document.getElementById('tarea').value;

    //Validacion si esta vacio el input
    if(tarea === '' || tarea === ' '){
        ErrorMessage();
        return;
    }
  

    const objetoTarea = {
        id: Date.now(),
        tarea: tarea
    };
    //Agregamos tares
    tareas = [...tareas, objetoTarea];
    ListarTareas();

    //Limpiamos el input
    formulario.value = '';

}

function ErrorMessage(error){
    //Selecciono el contenedor
    const mensaje = document.querySelector('.errorMensaje');
    //Asigno La clase
    mensaje.classList.toggle('activeAlert');
    //Establezco el tiempo de fade.
    setTimeout(() => {
        mensaje.classList.toggle('activeAlert');
    }, 3000);
}

function ListarTareas(){
    CleanForm();
    if(tareas.length > 0){

        tareas.forEach((t)=>{
            let lista = document.createElement('li');
            lista.innerText = t.tarea;
            boxTarea.appendChild(lista);

        })

    }
}


//Formateamos el input

function CleanForm(){
    while(boxTarea.firstChild){
        boxTarea.removeChild(boxTarea.firstChild)
    }
}