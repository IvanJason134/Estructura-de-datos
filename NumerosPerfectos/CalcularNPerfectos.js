var btn = document.querySelector("#btn");
btn.addEventListener("click", evaluar);

function evaluar() {
    var numero = document.querySelector("#numero");
    var n = Number(numero.value);
    var nImprimir = document.querySelector("#div");

    nImprimir.textContent = sacarNumeroPerfecto(n);
}

function sacarNumeroPerfecto(n) {
    if (evaluarDivisores(n) === n) {
        return true;
    } else {
        return false;
    }
}

function evaluarDivisores(n) {
    var sumaDivisores = 0;
    for (var i = 1; i < n; i++) {
        if (n%i == 0) {
            sumaDivisores += i;
        }
    }
    return sumaDivisores;
}