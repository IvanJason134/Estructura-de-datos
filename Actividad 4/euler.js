var btn = document.querySelector("#btn");
btn.addEventListener("click", evaluar);

function evaluar() {
    var nIteraciones = document.querySelector("#nIteraciones");
    var nI = Number(nIteraciones.value);

    var nEvaluar = document.querySelector("#nEvaluar");
    var nE = Number(nEvaluar.value);

    var div = document.querySelector("#mEuler");

    div.textContent = sacarEuler(nI, nE);
}

function sacarEuler(nI, nE) {
    let sumaEuler = 0;
    let elemento = 0;
    for (let i = 0; i < nI; i++) {
        if (i === 0) {
            elemento = 1;
        } else {
            elemento = (sacarPotencia(nE, i)/sacarFactorial(i));
        }
        sumaEuler = sumaEuler + elemento;
        console.log(sumaEuler);
    }

    return sumaEuler;
}

function sacarPotencia(nE, i) {
    var expoNumero = nE ** i;
    return expoNumero;
}

function sacarFactorial(i) {
    var factorial = 1;
    for (let j = 1; j <= i; j++) {
        factorial *= j;
    }

    return factorial;
}