const processArray = (arr: number[], callback: (num: number) => number): number[] => {
    return arr.map(item => callback(item));
}

const double = (num: number): number => {
    return num * 2;
}

console.log(processArray([1, 2, 3, 4, 5], double));