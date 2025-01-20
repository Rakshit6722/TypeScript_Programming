"use strict";
function calculateDiscout(price, discount) {
    let discountAmount = price * discount / 100;
    return price - discountAmount;
}
console.log(calculateDiscout(100, 20));
