class MathUtils{
    static PI: number = 3.14

    static calculateCircleArea(radius: number): number{
        return MathUtils.PI * radius * radius
    }
}

console.log(MathUtils.PI)
console.log(MathUtils.calculateCircleArea(5))