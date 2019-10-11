import Articulo from "./Articulo.js";
import Inventario from "./Inventario.js";

let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener('click', agregar);
let inventario = new Inventario();

let btnBuscar = document.querySelector("#btnBuscar");
btnBuscar.addEventListener('click', buscar);

function agregar() {
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
    inventario.add(articulo);
}

function buscar() {
    let codigo = document.querySelector("#codigo").value;
    console.log(inventario.search(codigo));
}