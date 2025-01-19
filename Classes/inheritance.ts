class Shape1{ // base class
    constructor(public color: string){
        this.color = color
    }

    describe(): void{
        console.log(`a ${this.color} shape`)
    }
}

class Circle1 extends Shape1{ // subclass which extends base class
    constructor(color: string, public radius: number){
        super(color)
        this.radius = radius
    }

    calcualateArea(): number{
        return Math.PI * this.radius * this.radius
    }
}   

const circle2 = new Circle1("red",5)
circle2.describe()
console.log(circle2.calcualateArea())