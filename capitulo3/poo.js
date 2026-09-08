"use strict";
/*
abstracción: la representación de un objeto del mundo real en un diagrama o código
encapsulación: permite controlar el acceso a los datos
herencia: permite la reutilización de código
polimorfismo: Permite diferentes implementación de un comportamiento
*/
/*abstracción: Representar código que me permita crear productos*/
class Product {
    name;
    amount;
    description;
    constructor(name, amount, description) {
        this.name = name;
        this.amount = amount;
        this.description = description;
    }
    getDescription() {
        console.log(`Name ${this.name}, Amount: ${this.amount}, 
            Description: ${this.description}`);
    }
}
//instancias
let product1 = new Product("cafe", 3, "café especial");
let product2 = new Product("agua", 2, "zoe");
product1.getDescription();
product2.getDescription();
/*
Encapsulación: controlar el acceso a los datos
Modificadores de acceso:
    public: Alcance global
    protected: Clases hijas
    private: Sólo dentro de la clase
*/
class Account {
    _client;
    _amount;
    _accountNumber;
    constructor(_client, _amount, _accountNumber) {
        this._client = _client;
        this._amount = _amount;
        this._accountNumber = _accountNumber;
    }
    get client() { return this._client; }
    set client(client) { this._client = client; }
    get amount() { return this._amount; }
    set amount(amount) { this._amount = amount; }
    get accountNumber() { return this._accountNumber; }
    set accountNumber(accountNumber) { this._accountNumber = accountNumber; }
}
console.log("-*-*-*-*Encapsulación-*-*-*-*");
//instancias
let account1 = new Account("edgar", 100, 4578943213);
//get
console.log(`Cliente ${account1.client}, Account Number: ${account1.accountNumber}`);
//set
account1.client = "Berenice";
console.log(account1.client);
/*
Herencia: Reutilización de código
*/
class Item {
    _id;
    _name;
    _price;
    constructor(_id, _name, _price) {
        this._id = _id;
        this._name = _name;
        this._price = _price;
    }
    get id() { return this._id; }
    set id(id) { this._id = id; }
    get name() { return this._name; }
    set name(name) { this._name = name; }
    get price() { return this._price; }
    set price(price) { this._price = price; }
    getDescription() {
        return `Item[ id:${this._id}, name: ${this._name}, price: ${this._price}]`;
    }
}
class DigitalItem extends Item {
    _downloadUrl;
    constructor(id, name, price, _downloadUrl) {
        super(id, name, price);
        this._downloadUrl = _downloadUrl;
    }
    get downloadUrl() { return this._downloadUrl; }
    set downloadUrl(downloadUrl) { this._downloadUrl = downloadUrl; }
    //polimorfismo
    getDescription() {
        return `DigitalItem [id: ${this.id}, downloadURL: ${this._downloadUrl}]`;
    }
}
console.log("-*-*-*-*herencia*-*-*-*");
let item1 = new DigitalItem(1, "wallpaper", 1, "https://url.jpg");
console.log(`id: ${item1.id}, name: ${item1.name}, url: ${item1.downloadUrl}`);
console.log(item1.getDescription());
