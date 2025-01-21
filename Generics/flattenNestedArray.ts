const flatten = <T>(arr: T[]): T[] => {
    let resArr: T[] = []

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            resArr = resArr.concat(flatten(arr[i] as any))
        }else{
            resArr.push(arr[i])
        }
    }

    return resArr
}

const nested: any[] = [1, [2, [3, [4]]]];
console.log(flatten<any>(nested))