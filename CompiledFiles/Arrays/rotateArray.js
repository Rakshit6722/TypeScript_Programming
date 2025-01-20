"use strict";
const rotateArrayLeft = (arr, d) => {
    let n = arr.length;
    d = d % n;
    let reverse = (arr, start, end) => {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    };
    reverse(arr, 0, d - 1);
    reverse(arr, d, n - 1);
    reverse(arr, 0, n - 1);
    return arr;
};
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let d = 2;
console.log(rotateArrayLeft(arr1, d));
