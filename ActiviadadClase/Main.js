import Punto from "./Punto.js";

class Main {
    constructor() {
        let btn = document.querySelector("#btn").addEventListener("click", () => {
            var punto1 = new Punto();
            var punto2 = new Punto();
            var calculo = new Punto();

            punto1.ejeX = 3;
            punto1.ejeY = 34;
            console.log("Punto 1: " + punto1._toString());

            punto2.ejeX = 65;
            punto2.ejeY = -2;
            console.log("Punto 2: " + punto2._toString());

            let distancia = calculo._distanciaEntrePuntos(punto1.ejeX, punto2.ejeX, punto1.ejeY, punto2.ejeY);
            console.log("La distancia entre los dos puntos es: " + distancia);
        })
    }
}

let m = new Main();