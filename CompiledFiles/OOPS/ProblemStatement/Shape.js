"use strict";
class Shape1 {
    constructor(color) {
        this.color = color;
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    calculateArea() {
        return 0;
    }
}
class Circle1 extends Shape1 {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle1 extends Shape1 {
    constructor(width, height, color) {
        super(color);
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const circle2 = new Circle1(10, "Red");
console.log(circle2.calculateArea().toFixed(2));
console.log(circle2.getColor());
circle2.setColor("Blue");
console.log(circle2.getColor());
const rectangle2 = new Rectangle1(10, 20, "Green");
console.log(rectangle2.calculateArea().toFixed(2));
console.log(rectangle2.getColor());
rectangle2.setColor("Yellow");
console.log(rectangle2.getColor());
