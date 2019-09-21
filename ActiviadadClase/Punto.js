export default class Punto {
    constructor() {
        this._ejeX = 0;
        this._ejeY = 0;
    }

    get ejeX() {
        return this._ejeX;
    }

    get ejeY() {
        return this._ejeY;
    }

    set ejeX(x) {
        if (x > -100 || x < 100) {
            this._ejeX = x;
        } else {
            this._ejeX = 0;
        }
    }

    set ejeY(y) {
        if (y > -100 || y < 100) {
            this._ejeY = y;
        } else {
            this._ejeY = 0;
        }
    }

    _distanciaEntrePuntos(X1, X2, Y1, Y2) {
        let distancia = Math.sqrt(((X2-X1)**2) + ((Y2-Y1)**2));
        return distancia;
    }

    _toString() {
        let coordenadaString = '('+ this._ejeX + ', ' + this._ejeY + ')';
        return coordenadaString;
    }
}