export default class Corredor {
    constructor() {
        this._posicion = 0;
    }

    get posicion() {
        return this._posicion;
    }

    numeroRandom1a100() {
        var nRandom = Math.floor(Math.random() * (100)) + 1
        return nRandom;
    }
}