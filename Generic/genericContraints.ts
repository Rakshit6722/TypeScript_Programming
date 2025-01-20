function getLength<T extends {length: number}>(item: T): number{
    return item.length
}

console.log(getLength("Hello"))
console.log(getLength([1,2,3]))
// console.log(getLength(42)) / will throw error since Number doesn't have a length property