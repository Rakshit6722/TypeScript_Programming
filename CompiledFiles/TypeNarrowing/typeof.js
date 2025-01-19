"use strict";
// typeof - used to check type of a given value
function printTypes(value) {
    if (typeof value === "string") {
        console.log(`String ${value}`);
    }
    else if (typeof value === "number") {
        console.log(`Number ${value}`);
    }
    else {
        console.log("unknown type");
    }
}
printTypes("Hello");
printTypes(true);
