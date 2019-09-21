import Elevador from "./Elevador.js";

var Elevador1 = new Elevador(15, 34);

console.log(Elevador1._cerrarPuerta());
console.log(Elevador1._mover(1));
console.log(Elevador1._abrirPuerta());

console.log(Elevador1._estado());

