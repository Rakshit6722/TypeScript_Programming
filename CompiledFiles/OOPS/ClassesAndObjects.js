"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello ${this.name}`;
    }
    getAge() {
        return this.age;
    }
}
const person1 = new Person("Rakshit", 21);
console.log(person1.greet());
console.log(person1.getAge());
