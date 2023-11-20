//Declarar una variable para ubicar el progreso del html
let progreso = document.querySelector(".progreso");

//Declarar una variable para ubicar el porcentaje del html
let porcentaje = document.querySelector(".porcentaje");

//Declarar una variable para ubicar la celebracion del html
let celebracion = document.querySelector("body");

//La variable de avance se hace para poder llegar al 100% de 1 en 1
let avance = 0;

let tiempo = setInterval(() =>{
    //Avanzar de 1 en 1
    avance += 1;
    //Se llena segun el avance
    progreso.style.width = `${avance}%`

    //Se hacen condiciones pq el avance debe tener el limite de hasta 100%
    if (avance == 100) {
        //Cuando llegue a 100 se frena
        clearInterval(tiempo)
        //Cuando se llegue a 100 se frena y se visualiza el fondo de celebracion
        celebracion.classList.add("celebracion")
    }
    //Se hace un textContent a porcentaje para visualizar el avance del porcentaje en 1 en 1
    porcentaje.textContent = `${avance}%`

    //El intervalo se refresca en 75 milisegundos
}, 75);