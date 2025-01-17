interface Shape{
    name: string;
    area(): number
}

class Circle implements Shape{
    name: string;
    radius: number;

    constructor(radius: number){
        this.name = "Circle";
        this.radius = radius
    }

    area(): number{
        return Math.PI * this.radius ** 2
    }
}

const myCircle = new Circle(5)
console.log(myCircle.area().toFixed(2))