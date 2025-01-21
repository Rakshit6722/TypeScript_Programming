"use strict";
const filterByProperty = (obj, type) => {
    let resObj = {};
    for (let key in obj) {
        if (typeof obj[key] === type) {
            resObj[key] = obj[key];
        }
    }
    return resObj;
};
let mixObj = {
    name: "Rakshit",
    age: 21,
    address: "Meerut",
    experience: 1
};
console.log(filterByProperty(mixObj, "string"));
