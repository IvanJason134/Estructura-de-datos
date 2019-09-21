import Dado from "./Dado.js";
import Corredor from "./Corredor.js"

class Carrera {
   constructor() {
       let dado = new Dado();

       document.querySelector("#btn").addEventListener("click", () => {
        let div = document.querySelector("#mostrar");
        let corredor1 = new Corredor(3);
        let corredor2 = new Corredor(45);

        let progreso1 = 0;
        let progreso2 = 0;

        for (let i = 1; i <= 100; i++) {
            let avanze1 = dado.lanzar();
            let avanze2 = dado.lanzar();
            progreso1 += corredor1._correr(avanze1);
            progreso2 += corredor2._correr(avanze2);

            if (progreso1 >= 100 && progreso2 < 100) {
            var ganador = corredor1._nCorredor;
                div.textContent = "Corredor N°" + corredor1._nCorredor + " Avanzo:  " + progreso1 + " Corredor N°" + corredor2._nCorredor + " Avanzo:" + progreso2 + " El ganador es el corredor N°" + ganador;
            break;
            } else if (progreso2 >= 100 && progreso1 < 100) {
            var ganador = corredor2._nCorredor;
                div.textContent = "Corredor N°" + corredor1._nCorredor + " Avanzo:  " + progreso1 + " Corredor N°" + corredor2._nCorredor + " Avanzo:" + progreso2 + " El ganador es el corredor N°" + ganador;
            break;
            } else if (progreso2 == 100 && progreso1 == 100) {
                div.textContent = "Es un empate";
                break;
            }
        }
    });
   } 
}

let m = new Carrera();