import Articulo from "./Articulo.js";
import Catalogo from "./Catalogo.js";

class Main {
    constructor() {
        let catalogo = new Catalogo(
            document.querySelector("#catalogo")
        );

        document.querySelector("#btnAgregar").addEventListener("click", () => {
            let codigo = document.querySelector("#codigo").value;
            let nombre = document.querySelector("#nombre").value;
            let precio = document.querySelector("#precio").value;
            let cantidad = document.querySelector("#cantidad").value;
            let descripcion = document.querySelector("#descripcion").value;

            let objArticulo = {
                codigo: codigo,
                nombre: nombre,
                precio: precio,
                cantidad: cantidad,
                descripcion: descripcion
            };

            let articulo = new Articulo(objArticulo);

            catalogo.agregarArticulo(articulo);
        })
    }
}

let m = new Main();