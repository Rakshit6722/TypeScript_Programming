"use strict";
//default parameters
function func3(a, b = 5) {
    return a + b;
}
console.log(func3(2));
//rest parameters
function sum(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
console.log(sum(1, 2, 3, 45, 1, 4, 1));
function makePara(...words) {
    let para = "";
    for (let word of words) {
        para += word + " ";
    }
    return para.trim();
}
console.log(makePara("my", "name", "is", "Rakshit"));
