//type narrowing = process of refining a variable's type within a 
// specific block of code

//type guards = are expressions or functions that perform runtime
// checks to ensure a value matches a specific type

function isString(value: unknown): value is string{
    return typeof value === "string"
}

function printValue(value: unknown): void{
    if(isString(value)){
        console.log(`String ${value}`)
    }else{
        console.log('Not a string')
    }
}

printValue("Hello")
printValue(32)