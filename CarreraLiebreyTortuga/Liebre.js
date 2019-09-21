import Corredor from "./Corredor.js";

export default class Liebre extends Corredor {
    constructor() {
        super()
    }

    _correr() {
        let probabilidad = this.numeroRandom1a100();
        if (probabilidad > 1 && probabilidad <= 20){
            
            this._dormir();
        } else if (probabilidad >= 21 && probabilidad <= 40) {
            this._saltoGrande();
        } else if (probabilidad >= 41 && probabilidad <= 50) {
             if (this._posicion < 12) {
                this._posicion = 0;
            } else {
                 this._resbalonGrande();
            }
        } else if (probabilidad >= 51 && probabilidad <= 85) {
             this._saltoPequeño();
        } else if (probabilidad >= 86 && probabilidad <= 100) {
            if(this._posicion < 2) {
                this._posicion = 0;
            } else {
                this._resbalonPequeño();
            }
        }

        return this._posicion;
    }

    _dormir() {
        return this._posicion = this._posicion;
    }

    _saltoGrande() {
        return this._posicion += 9;
    }

    _resbalonGrande() {
        return this._posicion -= 12;
    }

    _saltoPequeño() {
        return this._posicion += 1;
    }

    _resbalonPequeño() {
        return this._posicion -= 2;
    }

    _toString() {
        return "La liebre se encuentra en el paso: " + this._posicion;
    }
}