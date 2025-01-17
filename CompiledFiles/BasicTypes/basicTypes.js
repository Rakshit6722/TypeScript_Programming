"use strict";
//data types
//number
let num1 = 12;
let num2 = 1.32;
//string
let str1 = "Rakshit";
//boolean
let bool1 = true;
//undefined
let num3;
//null
let val = null;
console.log(num1, typeof num1);
console.log(num2, typeof num2);
console.log(str1, typeof str1);
console.log(bool1, typeof bool1);
console.log(val, typeof val);
//any vs unknown
//any - when you are not sure about the data type, does not check type safety
// when performing an operation on the variable
let val2 = "val2";
val2 = 12;
console.log(val2.length, typeof val2);
//unknown - also used when you dont know about the data type of the variable
// but can not perform any operation on the variable before checking
// its type
let val3 = "Rakshit";
if (typeof val3 === "string") {
    console.log(val3.length);
}
