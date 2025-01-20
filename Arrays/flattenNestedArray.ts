const flattenArray = (arr: any[]): any[] => {
    let result: any[] = []

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flattenArray(arr[i]))
        }else{
            result.push(arr[i])
        }
    }

    return result
}

let nestedArray: any[] = [1, 2, [3, 4, [5, 6]], 7, 8, [9, 10]];
console.log(flattenArray(nestedArray)); 