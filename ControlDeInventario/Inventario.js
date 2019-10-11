export default class Inventario {
    constructor() {
        this._inventario = new Array(20);
        this._posArray = 0;
    }

    agregarArticulo(articulo) {
        let objArticulo = {
            codigo: articulo.codigo,
            nombre: articulo.nombre,
            precio: articulo.precio,
            cantidad: articulo.cantidad,
            descripcion: articulo.descripcion
        }
        this._inventario[this._posArray] = objArticulo;
        this._posArray++;
        console.log(this._inventario);
    }
}