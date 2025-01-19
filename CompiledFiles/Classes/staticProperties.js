"use strict";
class MathUtils {
    static calculateCircleArea(radius) {
        return MathUtils.PI * radius * radius;
    }
}
MathUtils.PI = 3.14;
console.log(MathUtils.PI);
console.log(MathUtils.calculateCircleArea(5));
