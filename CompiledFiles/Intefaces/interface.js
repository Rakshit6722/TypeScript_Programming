"use strict";
const obj1 = {
    name: "Rakshit",
    age: 21,
    greet: function () {
        return `hello ${this.name}`;
    }
};
console.log(obj1);
console.log(obj1.greet());
//defining class structure
