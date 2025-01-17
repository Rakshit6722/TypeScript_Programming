//syntax

//function statement
function func1(a: number, b: number): number {
    return a + b
}

console.log(func1(2, 3))

//function expression
const multiply = function(a:number, b:number):void{
    console.log(a*b)
}
multiply(2,4)