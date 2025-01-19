const filterStrings = (arr: any[]): string[] => {
    return arr.filter((item)=> typeof item === 'string');
}

console.log(filterStrings([1, 'a', 'b', 2]));