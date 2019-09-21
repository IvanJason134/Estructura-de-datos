export default class Dado {
    constructor() {

    }

    lanzar() {
        var caraSeleccionada = Math.floor(Math.random() * (1 - 7)) + 7
        return caraSeleccionada;
    }
}