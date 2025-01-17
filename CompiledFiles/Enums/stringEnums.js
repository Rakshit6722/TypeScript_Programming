"use strict";
var Directions;
(function (Directions) {
    Directions["up"] = "UP";
    Directions["down"] = "DOWN";
    Directions["left"] = "LEFT";
    Directions["right"] = "RIGHT";
})(Directions || (Directions = {}));
let direction = Directions.left;
console.log(direction);
