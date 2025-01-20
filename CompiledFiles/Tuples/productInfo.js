"use strict";
let inventory = ["Pen", 20, 2];
const calculateInventoryValue = (inventory) => {
    return inventory[1] * inventory[2];
};
const getProductDetails = (inventory) => {
    return `Product: ${inventory[0]}, Quantity: ${inventory[1]}, Price: ${inventory[2]}`;
};
console.log(calculateInventoryValue(inventory));
console.log(getProductDetails(inventory));
