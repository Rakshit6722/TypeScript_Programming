const mergeObjects = <T, U>(a: T, b: U): T & U =>{
    return {...a, ...b};
};

let obj1 = { a: 1 };
let obj2 = { b: 2 };

let merge = mergeObjects(obj1, obj2);
console.log(merge); 