"use strict";
class Product {
    constructor(productName, modalNumber) {
        this.productName = productName;
        this.modalNumber = modalNumber;
        this.productName = productName;
        this.modalNumber = modalNumber;
    }
}
class Electronics extends Product {
    constructor(productName, modalNumber) {
        super(productName, modalNumber);
        this.discount = 10;
    }
    calculatePrice() {
        return 1000 - (1000 * this.discount / 100);
    }
}
class Clothing extends Product {
    constructor(productName, modalNumber) {
        super(productName, modalNumber);
        this.discount = 20;
    }
    calculatePrice() {
        return 500 - (500 * this.discount / 100);
    }
}
class Groceries extends Product {
    constructor(productName, modalNumber) {
        super(productName, modalNumber);
        this.discount = 5;
    }
    calculatePrice() {
        return 200 - (200 * this.discount / 100);
    }
}
class ShoppingCart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(product) {
        this.products = this.products.filter(p => p.modalNumber !== product.modalNumber);
    }
    getProducts() {
        return this.products;
    }
    calculateTotalPrice() {
        let totalPrice = 0;
        this.products.forEach(p => {
            totalPrice += p.calculatePrice();
        });
        return totalPrice;
    }
}
let electronics = new Electronics("Laptop", 1);
let clothing = new Clothing("Shirt", 2);
let groceries = new Groceries("Rice", 3);
let shoppingCart = new ShoppingCart();
shoppingCart.addProduct(electronics);
shoppingCart.addProduct(clothing);
shoppingCart.addProduct(groceries);
console.log(shoppingCart.getProducts());
console.log(shoppingCart.calculateTotalPrice());
shoppingCart.removeProduct(clothing);
console.log(shoppingCart.getProducts());
console.log(shoppingCart.calculateTotalPrice());
