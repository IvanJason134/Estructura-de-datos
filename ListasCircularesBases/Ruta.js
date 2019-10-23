export default class Ruta {
    constructor() {
        this._inicioLista = null;
        this._tamañoLista = 0;
    }

    borrarBase(nBase) {
        let eActual = this._inicioLista;
        let eAnterior = null;
        if (this._tamañoLista == 0) {
            console.log("La lista esta vacia");
        } else {
            if (eActual.nombre === nBase) {
                this._inicioLista = eActual.siguiente;
                while (!eActual.siguiente) {
                    eActual = eActual.siguiente;
                }
                eActual.siguiente = this._inicioLista;
                console.log("Base eliminada con exito");
            } else {
                while (eActual.nombre != nBase) {
                    eAnterior = eActual;
                    eActual = eActual.siguiente;
                }
                eAnterior.siguiente = null;
                eActual.siguiente = eAnterior.siguiente;
            }
        }
        console.log(this._inicioLista);            
    }


    agregarBase(base) {
        if (!this._inicioLista) {
            this._inicioLista = base;
            this._inicioLista.siguiente = this._inicioLista;
        } else {
            let elemento = this._inicioLista;
            while (elemento.siguiente != this._inicioLista) {
                elemento = elemento.siguiente
            };
            elemento.siguiente = base;
            let lastElemento = elemento.siguiente;
            lastElemento.siguiente = this._inicioLista;
        }
        this._tamañoLista++;
        console.log(this._inicioLista);
    }

    buscarBase(nombreBase) {
        let elemento = this._inicioLista;
        while(elemento.nombre != nombreBase) {
            elemento = elemento.siguiente;
        }
        console.log(elemento.toString());
    }

    imprimirBases() {
        let elemento = this._inicioLista;
        while (elemento.siguiente != this._inicioLista) {
            console.log(elemento.toString());
            elemento = elemento.siguiente
        };
        console.log(elemento.toString());
    }
}