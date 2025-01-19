class Person5{
    name: string;

    constructor(name: string){
        this.name = name
    }

    greet(): void{
        console.log(`Hello ${this.name}`)
    }
}

const person6 = new Person5("Rakshit")
person6.greet()