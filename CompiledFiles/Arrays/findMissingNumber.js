"use strict";
const missingNumber = (arr, n) => {
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return total - sum;
};
let arr2 = [1, 2, 3, 4, 6, 7, 8];
let n = 8;
console.log(missingNumber(arr2, n));
