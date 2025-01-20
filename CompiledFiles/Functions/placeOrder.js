"use strict";
function summarizeOrder(productName, quantity = 1, discountCode) {
    if (discountCode) {
        return `Product: ${productName}, Quantity: ${quantity}, Discount: ${discountCode}`;
    }
    else {
        return `Product: ${productName}, Quantity: ${quantity}`;
    }
}
console.log(summarizeOrder('Laptop'));
console.log(summarizeOrder('Mobile', 2));
console.log(summarizeOrder('Tablet', 3, 'DISCOUNT_10'));
