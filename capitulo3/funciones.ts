/*
Funciones: 
    - no retornan valor
    - si retorna valor
*/

/*
función que no retorna
Ej. Crear una función que me muestre la suma de un arreglo
*/
function sum(data:number[]){
    let tmp:number=0;
    for(let i of data){
       tmp+=i; //tmp=tmp+i
    }
    console.log(`total: ${tmp}`);
}
sum([1,4,5,6,6.7]);


/*
función que si retorna 
Ej. Crear una función que me permita calcular el factorial
5!=5*4*3*2*1
*/
function factorial(numero:number):number{
    let resultado:number=1;
    for(let i=numero;i>0;i--){
        resultado*=i;
    }
    return resultado;
}

let result:number=factorial(5);
console.log(`5!: ${result}`);
