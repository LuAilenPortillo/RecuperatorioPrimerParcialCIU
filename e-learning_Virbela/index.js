let modoActual = 'Claro';
let body = document.getElementById('bodyId');
const botonModoOscuro = document.getElementById("botonModoOscuro");
const botonModoClaro = document.getElementById("botonModoClaro");

const cambiarModoOscuro = function(e){
    console.log("la variable al inicio del metodo modo oscuro es:",modoActual);
    e.preventDefault(); 
    if(modoActual == 'Claro'){
        body.classList.remove('modo-claro');
        body.classList.add('modo-oscuro');
        modoActual = 'Oscuro';
    }
    console.log("la variable al final del metodo modo oscuro es:",modoActual)
};
const cambiarModoClaro = function(e){
    console.log("la variable al inicio del metodo modo claro es:",modoActual);
    e.preventDefault();
    if(modoActual == 'Oscuro'){
        body.classList.remove('modo-oscuro');
        body.classList.add('modo-claro');
        modoActual = 'Claro';
    }
    console.log("la variable al final del metodo modo claro es:",modoActual)
};
botonModoOscuro.addEventListener("click", cambiarModoOscuro);
botonModoClaro.addEventListener("click", cambiarModoClaro);