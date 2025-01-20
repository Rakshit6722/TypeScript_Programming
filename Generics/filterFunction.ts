const filterElements = <T>(arr: T[]): T[] => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

let arr5: number[] = [1, 2, 3, 4, 2, 3, 4, 5];
console.log(filterElements<number>(arr5)); 

let arr6: string[] = ['a', 'b', 'c', 'b', 'c', 'd', 'e'];
console.log(filterElements<string>(arr6));