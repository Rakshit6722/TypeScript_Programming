"use strict";
const mergeObjects = (a, b) => {
    return Object.assign(Object.assign({}, a), b);
};
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let merge = mergeObjects(obj1, obj2);
console.log(merge);
