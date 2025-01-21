const lengthOf = <T extends {length: number}>(value: T): number => {
    return value.length
}

const numArr: number[] = [12,3,4,1,4]
console.log(lengthOf<number[]>(numArr))
