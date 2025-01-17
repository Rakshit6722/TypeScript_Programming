enum num{
    val0, //0 default start from 0, can explicitly set it to any number and value next to it will have value one greater than it
    val1, //1
    val2,
    val3, 
}

let val0: num = num.val0
console.log(val0)

enum customNum{
    val0, //0
    val1 = 44,
    val2, //41
    val3,
}

let val1: customNum = customNum.val2
console.log(val1)