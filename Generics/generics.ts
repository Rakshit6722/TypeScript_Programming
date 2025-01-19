//generics -> enable the creation of reusable and type-safe components,
// allowing types to be passed as arguments

function identity<T>(value: T){
    return value
}

console.log(identity<string>("Hello"))
console.log(identity<number>(42))