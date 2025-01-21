"use strict";
class Vehicle12 {
    constructor(brand, speed) {
        this.engineStatus = false;
        this.brand = brand;
        this.speed = speed;
    }
    startEngine() {
        this.engineStatus = true;
        console.log("Engine started");
    }
}
class Car21 extends Vehicle12 {
    constructor(brand, speed, numberofDoors, hasSunRoof) {
        super(brand, speed);
        this.numberofDoors = numberofDoors;
        this.hasSunRoof = hasSunRoof;
    }
    readyToDrive() {
        if (this.engineStatus) {
            console.log("Car is ready to drive");
        }
        else {
            console.log("Start the engine first");
        }
    }
}
let car = new Car21("Toyota", 100, 4, true);
car.startEngine();
car.readyToDrive();
