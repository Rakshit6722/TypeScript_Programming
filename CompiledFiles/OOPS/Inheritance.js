"use strict";
class Vehilce {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        console.log(`Vehicle is started`);
    }
}
class Car2 extends Vehilce {
    constructor(make, model, numberOfDoors) {
        super(make, model);
        this.numberOfDoors = numberOfDoors;
    }
    start() {
        console.log("Car is started");
    }
}
const car1 = new Car2(2003, "PDN134", 4);
car1.start();
