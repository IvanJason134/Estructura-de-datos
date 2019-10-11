import Articulo from "./Articulo.js";
import Inventario from "./Inventario.js";

var btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", evaluar);

function evaluar() {
    let inventario = new Inventario();

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
    }

    let articulo = new Articulo(objArticulo);
    inventario.agregarArticulo(articulo);
    
}