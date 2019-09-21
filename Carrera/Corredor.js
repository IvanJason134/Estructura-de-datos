export default class Corredor {
    constructor(numero) {
        this._numero = numero;
        this._posicion = 0;
    }

    get _posicion() {
        return this._posicion;
    }

    get _numero() {
        return this._numero;
    }
    _correr(avanze) {
        var cRecorridos;
        if (avanze == 1) {
            cRecorridos = 3;
        } else if (avanze == 2 || avanze == 3) {
            cRecorridos = 1;
        } else if (avanze == 4 || avanze == 5 || avanze == 6) {
            cRecorridos = 2;
        }

        return cRecorridos;
    }
    
}