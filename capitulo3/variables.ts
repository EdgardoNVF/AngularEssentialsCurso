//comentario

/*
comentario1
comentario2
*/

/*
string: cadena de texto -> '',""
number: enteros y decimales -> 63, 2.65
boolean: verdadero o falso -> true, false
null: ausencia de valor -> null
*/

//variables (mutables)
let nombre:string="Edgardo";
let edad:number=34;
let vivo:boolean=true;
let data:any=3.2;

data="hola";

//constantes (inmutables)
const PI:number=3.1416;
//PI=2.66;->incorrecto

//Usar variables
console.log(`Hola ${nombre}, tu edad es ${edad}`);
let message:string=`${nombre}, ${edad}`;
console.log(message);