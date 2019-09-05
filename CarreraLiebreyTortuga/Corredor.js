export default class Corredor {
    constructor() {
        this._posicion = 0;
    }

    numeroRandom1a100() {
        var nRandom = Math.floor(Math.random() * (1 - 101)) + 101
        return nRandom;
    }
}