"use strict";
//generics -> enable the creation of reusable and type-safe components,
// allowing types to be passed as arguments
function identity(value) {
    return value;
}
console.log(identity("Hello"));
console.log(identity(42));
