"use strict";
class Vehicle {
    constructor(make, model, speed) {
        this.make = make;
        this.model = model;
        this.speed = speed;
        this.make = make;
        this.model = model;
        this.speed = speed;
    }
    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}, Speed: ${this.speed}`;
    }
}
class Car1 extends Vehicle {
    constructor(make, model, speed) {
        super(make, model, speed);
    }
    start() {
        console.log("Car is started");
    }
}
class Bike extends Vehicle {
    constructor(make, model, speed) {
        super(make, model, speed);
    }
    start() {
        console.log("Bike is started");
    }
}
const car2 = new Car1(2003, "PDN134", "100kmph");
console.log(car2.getDetails());
car2.start();
const bike1 = new Bike(2003, "PDN134", "100kmph");
console.log(bike1.getDetails());
bike1.start();
