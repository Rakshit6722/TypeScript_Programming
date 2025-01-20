const reverArray = <T>(arr: T[]): T[] => {
    let start: number = 0;
    let end: number = arr.length - 1;

    while (start < end) {
        let temp: T = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }

    return arr;
}

let arr4: number[] = [1, 2, 3, 4, 5];

console.log(reverArray<number>(arr4)); 
