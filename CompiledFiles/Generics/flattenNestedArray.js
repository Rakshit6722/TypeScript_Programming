"use strict";
const flatten = (arr) => {
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            resArr = resArr.concat(flatten(arr[i]));
        }
        else {
            resArr.push(arr[i]);
        }
    }
    return resArr;
};
const nested = [1, [2, [3, [4]]]];
console.log(flatten(nested));
