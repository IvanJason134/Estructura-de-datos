import Base from "./Base.js";
import Ruta from "./Ruta.js";

var btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener('click', agregar);

var btnBuscar = document.querySelector("#btnBuscar");
btnBuscar.addEventListener('click', buscar);

var btnBorrar = document.querySelector("#btnBorrar");
btnBorrar.addEventListener('click', borrar);

var btnImprimir = document.querySelector("#btnImprimir");
btnImprimir.addEventListener('click', imprimir);

let ruta = new Ruta();

function borrar() {
    let nBase = document.querySelector("#nombre").value;

    ruta.borrarBase(nBase);
}

function agregar() {
    let nombre = document.querySelector("#nombre").value;
    let minutos = document.querySelector("#minutos").value;

    let objBase = {
        nombre: nombre,
        minutos: minutos
    }
    
    let base = new Base(objBase);
    ruta.agregarBase(base);
}

function buscar() {
    let nombreBase = document.querySelector("#nombre").value;
    ruta.buscarBase(nombreBase);
}

function imprimir() {
    ruta.imprimirBases();
}