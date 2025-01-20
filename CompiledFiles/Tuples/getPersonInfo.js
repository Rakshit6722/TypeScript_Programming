"use strict";
let personIngfo = ["Rakshit", 21, true];
const getPersonInfo = (person) => {
    return `Name: ${person[0]}, Age: ${person[1]}, Is Active: ${person[2]}`;
};
console.log(getPersonInfo(personIngfo));
