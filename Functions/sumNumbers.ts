function sumNumbers(...args: number[]) : number{
    return args.reduce((acc, val) => acc + val, 0);
}

console.log(sumNumbers(1, 2, 3, 4, 5)); 
console.log(sumNumbers(1, 2, 3));