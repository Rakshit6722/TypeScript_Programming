"use strict";
class Dog2 {
    bark() {
        console.log("Woof!");
    }
}
class Cat2 {
    meow() {
        console.log("Meow!");
    }
}
function animalSounds(animal) {
    if (animal instanceof Dog2) {
        animal.bark();
    }
    else if (animal instanceof Cat2) {
        animal.meow();
    }
}
animalSounds(new Dog2());
animalSounds(new Cat2());
