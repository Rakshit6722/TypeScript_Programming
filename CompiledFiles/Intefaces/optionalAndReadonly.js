"use strict";
const emp1 = {
    emp_id: "Emp1133",
    name: "Rakshit",
    age: 21,
    department: "Frontend"
    //not used feedback here as its an optional property
};
// emp1.emp_id = "Sljl12" will throw error since emp_id is read only property
console.log(emp1);
