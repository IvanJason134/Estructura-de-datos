var btnCalcular = document.querySelector('#btnCalcular');
btnCalcular.addEventListener('click', evaluar);

function evaluar() {
    var num = document.querySelector("#numero");
    numero = Number(num.value); 
    var imprim = document.querySelector("#mNumeros"); 

    for (let i = 1; i <= numero ; i++) {
        if (calcularNumeroPrimo(i) === true) {
            let nPrimo = i;
            imprim.innerHTML = nPrimo;
        }
    }
}

function calcularNumeroPrimo(i) {
    let contador = 0;
    for (let j = 1; j <= i; j++) {
            if (i%j == 0) {
                contador++;
            }
        }

    if (contador === 2) {
        return true;
    } else {
        return false;
    }
}
        