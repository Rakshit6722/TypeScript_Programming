"use strict";
class Animal1 {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.name = name;
        this.species = species;
    }
}
class Dog1 extends Animal1 {
    constructor(name, species, hungerLevel) {
        super(name, species);
        this.hungerLevel = hungerLevel;
        this.hungerLevel = hungerLevel;
    }
    speak() {
        console.log("Bark");
    }
    getHungerLevel() {
        return this.hungerLevel;
    }
    feedDog(amount) {
        this.hungerLevel -= amount;
    }
}
class Cat1 extends Animal1 {
    constructor(name, species, hungerLevel) {
        super(name, species);
        this.hungerLevel = hungerLevel;
        this.hungerLevel = hungerLevel;
    }
    speak() {
        console.log("Meow");
    }
    getHungerLevel() {
        return this.hungerLevel;
    }
    feedCat(amount) {
        this.hungerLevel -= amount;
    }
}
const dog2 = new Dog1("Tommy", "Dog", 10);
console.log(dog2.name);
console.log(dog2.species);
console.log(dog2.getHungerLevel());
dog2.speak();
dog2.feedDog(5);
console.log(dog2.getHungerLevel());
const cat2 = new Cat1("Kitty", "Cat", 10);
console.log(cat2.name);
console.log(cat2.species);
console.log(cat2.getHungerLevel());
cat2.speak();
cat2.feedCat(5);
console.log(cat2.getHungerLevel());
