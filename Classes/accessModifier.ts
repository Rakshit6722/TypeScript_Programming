class Employee1{
    public name: string; //access everywhere
    private salary: number; //access only within the class
    protected department1: string; //accessible within class and subclass
    readonly id: number; //can only be assigned once

    constructor(name: string, salary: number, department: string, id: number){
        this.name = name;
        this.salary = salary;
        this.department1 = department;
        this.id = id
    }

    //getter and setter
    getSalary(): number{
        return this.salary
    }

    setSalary(salary: number): void{
        this.salary = salary
    }
}

const emp2 = new Employee1("Akshit",3.3,"CSE",12313)
console.log(emp2.name)
// emp2.id = 2414 //error - cannot be reassigned as it is readonly property
console.log(emp2.getSalary())
emp2.setSalary(4000)
console.log(emp2.getSalary())
