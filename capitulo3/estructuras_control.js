"use strict";
//if-else
let edad = 23;
if (edad >= 18) {
    console.log("eres mayor de edad");
}
else {
    console.log("eres menor de edad");
}
//switch
let mes = "enero";
switch (mes) {
    case "enero":
    case "febrero":
    case "marzo":
        console.log("el mes existe!!!");
        break;
    default:
        console.log("el mes incorrecto!!!");
}
//for extendido
for (let i = 0; i < 10; i++) {
    console.log(`i: ${i}`);
}
