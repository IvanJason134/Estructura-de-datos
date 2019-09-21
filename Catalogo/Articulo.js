export default class Articulo {
    constructor(codigo, nombre, precio, cantidad, descripcion) {
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad;
        this._descripcion = descripcion;
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

    toString() {
        return 'El producto ' + this._nombre + " con el codigo: " + this._codigo + ", tiene el precio de $" + this._precio + ", en el momento existen la cantidad de " + this._cantidad + " y la descripcion de este producto es: " + this.descripcion;
    }
}