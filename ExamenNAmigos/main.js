var btnEjecutar = document.querySelector("#btnEjecutar");
btnEjecutar.addEventListener('click', evaluar);

function evaluar() {
    let l = document.querySelector("#limite");
    let limite = Number(l.value);
    calcularNumerosAmigos(limite);

}

function calcularNumerosAmigos(limite) {
    for (let i = 1; i <= limite; i++) {
        let a = i;
        let aSDivisores = SumaDivisores(a);
        console.log("a" + a ,aSDivisores)
        if (aSDivisores < limite) {
            let b = aSDivisores;
            let bSDivisores = SumaDivisores(b);
            console.log("b" + b, bSDivisores)
            if (a == bSDivisores) {
                console.log(a + ", " + b);
            }
        }
    }
}

function SumaDivisores(n) {
    let sumaD = 0;
    for (let j = 1; j <= n; j++) {
        if (n%j === 0) {
            sumaD += j;
        }
    }
    
    return sumaD;

}
