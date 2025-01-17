"use strict";
class Circle {
    constructor(radius) {
        this.name = "Circle";
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
const myCircle = new Circle(5);
console.log(myCircle.area().toFixed(2));
