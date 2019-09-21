import Liebre from "./Liebre.js"
import Tortuga from "./Tortuga.js"

var btn = document.querySelector("#btn");
btn.addEventListener('click', carrera);
let liebre = new Liebre();
let tortuga = new Tortuga();

function carrera() {
    while (tortuga._posicion < 90 && liebre._posicion < 90) {
        console.log("Liebre: " + liebre._correr());
        console.log("Tortuga: " + tortuga._correr());
    }

    if (liebre._posicion >= 90 && tortuga._posicion < 90) {
        console.log("La liebre gano");
    } else if (tortuga._posicion >= 90 && liebre._posicion < 90) {
        console.log("La tortuga gano");
    } else if (tortuga._posicion >= 90 && liebre._posicion >= 90) {
        console.log("Fue un empate");
    }
    if  (tortuga._posicion >= 90 && liebre._posicion >= 90) {
        console.log("Fue un empate");
    }
    else if (liebre._posicion >= 90) {
        console.log("La liebre gano");
    } else 
        console.log("La tortuga gano");
    }
}
    