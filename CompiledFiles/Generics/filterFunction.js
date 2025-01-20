"use strict";
const filterElements = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
};
let arr5 = [1, 2, 3, 4, 2, 3, 4, 5];
console.log(filterElements(arr5));
let arr6 = ['a', 'b', 'c', 'b', 'c', 'd', 'e'];
console.log(filterElements(arr6));
