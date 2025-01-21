const swap = <T extends [any,any]>(value: T): [T[1],T[0]] => {
    return [value[1],value[0]]
}

console.log(swap<[number,string]>([1,"hello"]))