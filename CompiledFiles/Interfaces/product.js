"use strict";
const addToCart = (product) => {
    let productArr = [];
    productArr.push(product);
    return productArr;
};
const product1 = {
    id: "pro123",
    name: "tufF15",
    price: 50000,
    inStock: true
};
console.log(addToCart(product1));
