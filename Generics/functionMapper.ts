interface Mapper<T,U>{
    (input: T): U
}

const doubleEle: Mapper<number, number> = (x) => x*2
console.log(doubleEle(2))
console.log(doubleEle(5))