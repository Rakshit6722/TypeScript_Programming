"use strict";
class Shape1 {
    constructor(color) {
        this.color = color;
        this.color = color;
    }
    describe() {
        console.log(`a ${this.color} shape`);
    }
}
class Circle1 extends Shape1 {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
        this.radius = radius;
    }
    calcualateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const circle2 = new Circle1("red", 5);
circle2.describe();
console.log(circle2.calcualateArea());
