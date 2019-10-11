import Articulo from "./Articulo.js";

export default class Inventario {
    constructor() {
        this._inicioLista = null;
        this._tamañoLista = 0;
    }

    add(articulo) {
        if (!this._inicioLista) {
            this._inicioLista = articulo;
        } else {
            let elemento = this._inicioLista;
            while (elemento.siguiente) {
                elemento = elemento.siguiente;
            };
            elemento.siguiente = articulo;
        }
        this._tamañoLista++;
        console.log(this._inicioLista);
    }
    
    search(codigo) {
        let msg = '';
        msg = "No existe producto registrado con ese codigo";
        let elemento = new Articulo(this._inicioLista);
        for(let i = 1; i <= this._tamañoLista; i++) {
            if(elemento.codigo === codigo) {
                msg = elemento.toString();
                break;
            }
            elemento = elemento._siguiente;
        }
        return msg;
    }
}