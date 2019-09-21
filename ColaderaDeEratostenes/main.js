var btn = document.querySelector("#btn");
btn.addEventListener('click', iniciar);

function iniciar() {
    var vector = []
    for (var i = 0; i < 1000; i++) {
        vector[i] = 1;
    }
    
    for (let i = 0; i <= vector.length; i++) {
        if (calcularNumeroPrimo(i) === true) {
            vector[i] = 0;
        }
    }

    console.log(vector);
}

function calcularNumeroPrimo(i) {
    let contador = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            contador++;
        }
    }
        
    if (contador === 2) {
        return true;
    } else {
        return false;
    }    
}






