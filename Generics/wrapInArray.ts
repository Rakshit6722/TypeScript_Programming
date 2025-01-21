const wrapInArray = <T = any>(value: T): T[] => {
    return [value]
}

console.log(wrapInArray<number>(5))
console.log(wrapInArray<string>("Hello"))
console.log(wrapInArray<boolean>(true))