var btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", evaluar);

function evaluar() {
    var sal = document.querySelector("#saldo");
    var div = document.querySelector("#sCalculado");
    saldo = Number(sal.value);
    div.innerHTML = "Salario con aumento aplicado: $" + nuevoSueldo(saldo);
}

function nuevoSueldo(saldo) {
    let aumento = 0;
    if (saldo <= 1000) {
        aumento = saldo * .15;
    } else if (saldo <= 1200) {
        aumento = saldo * .12;
    } else if (saldo <= 1400) {
        aumento = saldo * .10;
    } else if (saldo <= 1500) {
        aumento = saldo * .08;
    } else if (saldo >= 1500) {
        aumento = saldo * .05;
    }
    console.log(aumento);
    let nSaldo = saldo + aumento;
    return nSaldo;
}