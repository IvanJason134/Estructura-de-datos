export default class Articulo {
    constructor(articulo) {
        this._codigo = articulo.codigo;
        this._nombre = articulo.nombre;
        this._precio = articulo.precio;
        this._cantidad = articulo.cantidad;
        this._descripcion = articulo.descripcion;
        this._siguiente = null;
    }

    get codigo() {
        return this._codigo;
    }

    get nombre() {
        return this._nombre;
    }

    get precio() {
        return this._precio;
    }

    get cantidad() {
        return this._cantidad;
    }

    get descripcion() {
        return this._descripcion;
    }

    get siguiente() {
        return this._siguiente;
    }

    set codigo(valor) {
        this._codigo = valor;
    }

    set nombre(valor) {
        this._nombre = valor;
    }

    set precio(valor) {
        this._precio = valor;
    }

    set cantidad(valor) {
        this._cantidad = valor;
    }

    set descripcion(valor) {
        this._descripcion = valor;
    }

    set siguiente(valor) {
        this._siguiente = valor;
    }

    toString() {
        return "El producto " + this._nombre.toUpperCase() + ", con el codigo: " + this._codigo + " tiene un precio unitario de : $" + this._precio + ", con una cantidad existente de: " + this._cantidad + " productos fisicos. Su descripción  es: " + this._descripcion.toUpperCase();
    }
}