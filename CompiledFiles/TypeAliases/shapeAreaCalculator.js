"use strict";
const calculateArea = (shape) => {
    switch (shape.type) {
        case "Circle":
            return Math.PI * shape.radius ** 2;
        case "Rectangle":
            return shape.width * shape.height;
        case "Triangle":
            return 0.5 * shape.base * shape.height;
    }
};
let circle = {
    type: "Circle",
    radius: 10
};
let rectangle = {
    type: "Rectangle",
    width: 10,
    height: 20
};
let triangle = {
    type: "Triangle",
    base: 10,
    height: 20
};
console.log(calculateArea(circle));
console.log(calculateArea(rectangle));
console.log(calculateArea(triangle));
