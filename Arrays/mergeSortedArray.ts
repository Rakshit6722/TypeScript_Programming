const mergeSortedArrays = (arr1: number[], arr2: number[]): number[] => {
    let i: number = 0;
    let j: number = 0;
    let k: number = 0;
    let n1: number = arr1.length;
    let n2: number = arr2.length;
    let arr3: number[] = new Array(n1 + n2);
    while (i < n1 && j < n2) {
        if (arr1[i] < arr2[j]) {
            arr3[k++] = arr1[i++];
        } else {
            arr3[k++] = arr2[j++];
        }
    }
    while (i < n1) {
        arr3[k++] = arr1[i++];
    }
    while (j < n2) {
        arr3[k++] = arr2[j++];
    }
    return arr3;
}

let arr_1: number[] = [1, 3, 5, 7];
let arr_2: number[] = [2, 4, 6, 8];

console.log(mergeSortedArrays(arr_1, arr_2)); 