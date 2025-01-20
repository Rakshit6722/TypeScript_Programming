const missingNumber = (arr: number[], n: number): number => {
    let total = (n*(n+1))/2;
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return total - sum;
}

let arr2: number[] = [1, 2, 3, 4, 6, 7, 8];
let n: number = 8;
console.log(missingNumber(arr2, n)); 