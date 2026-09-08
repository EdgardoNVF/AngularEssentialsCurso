//interfaces en poo
interface Funcion{
    //métodos polimorficos
    prender():void;
    apagar():void;
}

class Celular implements Funcion{
    prender(): void {console.log("celular prendido!!");}
    apagar(): void {console.log("celular apagado!!!")}
}

class Electrodomestico implements Funcion{
    prender(): void {console.log("electrodomestico prendido!!");}
    apagar(): void {console.log("electrodomestico apagado!!!")}
}

class Perro{}

function executeTask(objeto:Funcion){
   objeto.prender();
}

executeTask(new Celular());
executeTask(new Electrodomestico());
//executeTask(new Perro());

/*
Sólo en Typescript las interfaces se pueden usar
para definir estructuras de objetos
*/

interface Product{
    id:number;
    name:string;
    price?:number;
}

let product1:Product={
    id:1,
    name: "agua"
};

console.log(product1);

