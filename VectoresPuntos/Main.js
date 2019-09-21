import Punto from "./Punto.js"

class Main {
    constructor() {
        var puntos = [];
        var distancia = new Punto();
        let btnAgregar = document.querySelector("#btnAgregar").addEventListener('click', () => {
            var ejex = document.querySelector("#ejex");
            var x = Number(ejex.value);
            var ejey = document.querySelector("#ejey");
            var y = Number(ejey.value);

            var punto = new Punto(x, y);

            puntos.push(punto);
            console.log(puntos);
        })

        let btnMostrar = document.querySelector("#btnMostrar").addEventListener('click', () => {
            let sumadistancia = 0;
            let dentreP;
            for (var i = 0; i < puntos.length - 1; i++) {
                dentreP = distancia._distanciaEntrePuntos(puntos[i].ejeX, puntos[i + 1].ejeX, puntos[i].ejeY, puntos[i + 1].ejeY);
                console.log(dentreP)
                sumadistancia += dentreP;
            }
            console.log("Distancia total: " + sumadistancia);
        })
    }
}

var m = new Main()