//defining object structure
interface Person{
    name: string,
    age: number,
    greet(): string,
}

const obj1: Person = {
    name: "Rakshit",
    age: 21,
    greet: function(){
        return `hello ${this.name}`
    }
}

console.log(obj1)
console.log(obj1.greet())

//defining class structure