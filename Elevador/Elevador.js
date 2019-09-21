export default class Elevador {
    constructor(capacidad, cantidadPisos) {
        this._capacidad = capacidad;
        this._cantidadPisos = cantidadPisos;
        this._puerta = false;
        this._posicion = 1;
    }

    get puerta() {
        return this._puerta;
    }

    get posicion() {
        return this._posicion;
    }

    get capacidad() {
        return this._capacidad;
    }

    get cantidadPisos() {
        return this._cantidadPisos;
    }

    abrirPuerta() {
        return this._puerta = true;
    }

    cerrarPuerta() {
        return this._puerta = false;
    }

    mover(piso) {
    if (piso > this._cantidadPisos || piso < 0) {
            return "El piso no existe";
        } else if(piso === 1) {
            this._posicion = piso;
            this._abrirPuerta();
            return "Estas en la planta baja";
        } else {
            this._posicion = piso;
            return "Estas en el piso " + this._posicion;
        }
    }

    estado() {
        return "El elevador esta en el piso " + this._posicion + ", su capacidad es de: " + this._capacidad + " personas y el numero de Pisos totales es: " + this._cantidadPisos + ". El estado de la puerta es: " + this._puerta;
    }
}