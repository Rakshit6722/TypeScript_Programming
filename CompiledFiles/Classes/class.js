"use strict";
class Person5 {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
const person6 = new Person5("Rakshit");
person6.greet();
