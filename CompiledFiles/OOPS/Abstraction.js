"use strict";
class Shape {
    describe() {
        console.log(`This is a shape`);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle1 = new Circle(10);
console.log(circle1.calculateArea().toFixed(2));
const rectangle1 = new Rectangle(10, 20);
console.log(rectangle1.calculateArea().toFixed(2));
