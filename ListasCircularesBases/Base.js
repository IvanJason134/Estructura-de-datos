export default class Base {
    constructor(base) {
        this._nombre = base.nombre;
        this._minutos = base.minutos;
        this._siguiente = null;
    }

    get nombre() {
        return this._nombre;
    }

    get minutos() {
        return this._minutos;
    }

    get siguiente() {
        return this._siguiente;
    }

    set nombre(valor) {
        this._nombre = valor;
    }

    set minutos(valor) {
        this._minutos = valor;
    }

    set siguiente(valor) {
        this._siguiente = valor;
    }

    toString() {
        return "La base " + this._nombre + ", tiene una duracion de " + this._minutos + " minutos. La base proxima a esta, es la base: " + this._siguiente.nombre;
    }
}