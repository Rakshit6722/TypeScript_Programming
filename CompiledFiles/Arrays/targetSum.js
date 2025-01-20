"use strict";
const targetSum = (arr, target) => {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(arr[i], i);
    }
    return [];
};
let targetArr = [2, 7, 11, 15];
let target = 9;
console.log(targetSum(targetArr, target));
