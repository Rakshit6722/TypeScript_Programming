"use strict";
//basic array types
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["apple", "banana", "cherry"];
let arr3 = [true, false, true];
let arr4 = [
    [1, 2, 3],
    [4, 5, 6]
];
let arr5 = [1, "Apple", true];
console.log(arr1, arr2, arr3, arr4, arr5);
//readonly arrays
let arr6 = [1, 2, 3, 4];
// arr6.push(2) // error
// arr6[0] = 12 //error
