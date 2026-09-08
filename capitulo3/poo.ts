/*
abstracción: la representación de un objeto del mundo real en un diagrama o código
encapsulación: permite controlar el acceso a los datos
herencia: permite la reutilización de código
polimorfismo: Permite diferentes implementación de un comportamiento
*/

/*abstracción: Representar código que me permita crear productos*/
class Product{
    constructor(
        public name:string,
        public amount:number,
        public description:string
    ){}
    
    public getDescription(){
        console.log(`Name ${this.name}, Amount: ${this.amount}, 
            Description: ${this.description}`);
    }
}

//instancias
let product1:Product=new Product("cafe",3,"café especial");
let product2:Product=new Product("agua", 2, "zoe");

product1.getDescription();
product2.getDescription();

/*
Encapsulación: controlar el acceso a los datos
Modificadores de acceso:
    public: Alcance global
    protected: Clases hijas
    private: Sólo dentro de la clase
*/

class Account{
    constructor(
        private _client:string,
        private _amount:number,
        private _accountNumber:number
    ){}

    public get client():string{return this._client;}
    public set client(client:string){this._client=client;}

    public get amount():number{return this._amount;}
    public set amount(amount:number){this._amount=amount;}

    public get accountNumber():number{return this._accountNumber;}
    public set accountNumber(accountNumber:number){this._accountNumber=accountNumber;}

}
console.log("-*-*-*-*Encapsulación-*-*-*-*");
//instancias
let account1:Account=new Account("edgar",100,4578943213);

//get
console.log(`Cliente ${account1.client}, Account Number: ${account1.accountNumber}`);

//set
account1.client="Berenice";
console.log(account1.client);


/*
Herencia: Reutilización de código
*/

class Item{
    constructor(
        private _id:number,
        private _name:string,
        private _price:number
    ){}
    public get id():number{return this._id;}
    public set id(id:number){this._id=id;}

    public get name():string{return this._name;}
    public set name(name:string){this._name=name;}

    public get price():number{return this._price;}
    public set price(price:number){this._price=price;}

    public getDescription():string{
        return `Item[ id:${this._id}, name: ${this._name}, price: ${this._price}]`;
    }
}

class DigitalItem extends Item{
    constructor(
        id:number,
        name:string,
        price:number,
        private _downloadUrl:string
    ){
        super(id,name,price);
    }

    public get downloadUrl():string{return this._downloadUrl;}
    public set downloadUrl(downloadUrl:string){this._downloadUrl=downloadUrl;}
   
    //polimorfismo
    override getDescription(): string {
        return `DigitalItem [id: ${this.id}, downloadURL: ${this._downloadUrl}]`;
    }
}

console.log("-*-*-*-*herencia*-*-*-*");
let item1:DigitalItem=new DigitalItem(1,"wallpaper",1,"https://url.jpg");
console.log(`id: ${item1.id}, name: ${item1.name}, url: ${item1.downloadUrl}`);
console.log(item1.getDescription());


