"use strict";
class Animal1 {
    move() {
        console.log("Moving...");
    }
}
class Dog1 extends Animal1 {
    makeSound() {
        console.log("Bark!");
    }
}
const dog2 = new Dog1();
dog2.makeSound();
dog2.move();
