"use strict";
const processArray = (arr, callback) => {
    return arr.map(item => callback(item));
};
const double = (num) => {
    return num * 2;
};
console.log(processArray([1, 2, 3, 4, 5], double));
