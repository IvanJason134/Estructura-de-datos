import Articulo from "./Articulo.js";

export default class Agenda {
    constructor(tablaCatalogo) {
        this._tablaCatalogo = tablaCatalogo;
        this._articulos = [];
    }

    buscarArticulo(codigo) {
        let result = -1;
        this._articulos.forEach((articulo, index) => {
            if (articulo.codigo === codigo) {
                result = index;
                return;
            }
        });

        return result;
    }

    eliminarArticulo() {
        let pos = this._buscarArticulo(articulo.codigo);
        this._articulos.splice(pos, 1);
    }

    _agregarEnTabla(articulo) {
        let row = this._tablaCatalogo.insertRow(-1);

        let cellCodigo = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellPrecio = row.insertCell(2);
        let cellCantidad = row.insertCell(3);

        cellCodigo.innerHTML = articulo.codigo;
        cellNombre.innerHTML = articulo.nombre;
        cellPrecio.innerHTML = articulo.precio;
        cellCantidad.innerHTML = articulo.cantidad;

        let objArticulo = {
            codigo: articulo.codigo,
            nombre: articulo.nombre,
            precio: articulo.precio,
            cantidad: articulo.cantidad,
            descripcion: articulo.descripcion
        };

        this._articulos.push(objArticulo);
        console.log(this._articulos)
    }

    agregarArticulo(articulo) {
        this._agregarEnTabla(articulo);
    }
}
