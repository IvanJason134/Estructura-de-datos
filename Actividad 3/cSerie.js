var btnEjecutar = document.querySelector("#btnEjecutar");
btnEjecutar.addEventListener("click", evaluar);

function evaluar() {
    let l = document.querySelector("#limite");
    let limite = Number(l.value);
    let mostrar = document.querySelector("#mResultado");
    
    mostrar.textContent = ejecutarSerie(limite);
}

function ejecutarSerie(limite) {
    var serie = 0;
    var denominador = 1;
    var dsigno = 0;
    for (var i = 1; i <= limite; i++) {
        if (i%2 == 0 ){
           dsigno = -1 * (4/denominador);
        } else {
            dsigno = 1 * (4/denominador);
        }
        serie = serie + dsigno;
        denominador += 2;
    }
    return serie;
}