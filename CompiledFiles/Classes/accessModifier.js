"use strict";
class Employee1 {
    constructor(name, salary, department, id) {
        this.name = name;
        this.salary = salary;
        this.department1 = department;
        this.id = id;
    }
    //getter and setter
    getSalary() {
        return this.salary;
    }
    setSalary(salary) {
        this.salary = salary;
    }
}
const emp2 = new Employee1("Akshit", 3.3, "CSE", 12313);
console.log(emp2.name);
// emp2.id = 2414 //error - cannot be reassigned as it is readonly property
console.log(emp2.getSalary());
emp2.setSalary(4000);
console.log(emp2.getSalary());
