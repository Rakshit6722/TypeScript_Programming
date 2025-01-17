"use strict";
var num;
(function (num) {
    num[num["val0"] = 0] = "val0";
    num[num["val1"] = 1] = "val1";
    num[num["val2"] = 2] = "val2";
    num[num["val3"] = 3] = "val3";
})(num || (num = {}));
let val0 = num.val0;
console.log(val0);
var customNum;
(function (customNum) {
    customNum[customNum["val0"] = 0] = "val0";
    customNum[customNum["val1"] = 44] = "val1";
    customNum[customNum["val2"] = 45] = "val2";
    customNum[customNum["val3"] = 46] = "val3";
})(customNum || (customNum = {}));
let val1 = customNum.val2;
console.log(val1);
