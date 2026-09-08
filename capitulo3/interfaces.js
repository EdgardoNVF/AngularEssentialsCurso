"use strict";
class Celular {
    prender() { console.log("celular prendido!!"); }
    apagar() { console.log("celular apagado!!!"); }
}
class Electrodomestico {
    prender() { console.log("electrodomestico prendido!!"); }
    apagar() { console.log("electrodomestico apagado!!!"); }
}
class Perro {
}
function executeTask(objeto) {
    objeto.prender();
}
executeTask(new Celular());
executeTask(new Electrodomestico());
let product1 = {
    id: 1,
    name: "agua"
};
console.log(product1);
