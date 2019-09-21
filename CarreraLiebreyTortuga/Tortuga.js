import Corredor from "./Corredor.js";

export default class Tortuga extends Corredor {
    constructor() {
        super()
    }

    _correr() {
        let probabilidad = this.numeroRandom1a100();
        if (probabilidad > 1 && probabilidad < 50) {
            this._pasoRapido();
        } else if (probabilidad > 51 && probabilidad < 70) {
            if (this._posicion < 6) {
                this._posicion = 0;
            } else {
                this._resbalon();
            }
        } else if (probabilidad > 71 && probabilidad <= 100) {
            this._pasoLento();
        } 
        return this._posicion;
    }

    _pasoRapido() {
        return this._posicion += 3;
    }

    _pasoLento() {
        return this._posicion += 1;
    }

    _resbalon() {
        return this._posicion -= 6;
    }

    _toString() {
        return "La tortuga se encuentra en el paso: " + this._posicion;
    }
}
