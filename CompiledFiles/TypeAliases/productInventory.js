"use strict";
const inventoryManagement = (product) => {
    if (!product) {
        throw new Error("Product dosen't exist!");
    }
    return product;
};
let product2 = {
    id: 42121,
    name: "Laptop",
    price: 50123,
    category: "Computers & Electronics"
};
let product3 = null;
try {
    console.log(inventoryManagement(product2));
    console.log(inventoryManagement(product3));
}
catch (err) {
    console.error(err.message);
}
