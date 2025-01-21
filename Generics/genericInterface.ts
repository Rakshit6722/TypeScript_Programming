interface Generic<T,U>{
    name: T;
    age: U;
}

const pair: Generic<string, number> = {
    name: "Rakshit",
    age: 21,
}

console.log(pair)