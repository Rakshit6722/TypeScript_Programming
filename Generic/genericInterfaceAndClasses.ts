//generice interfaces
interface Pair<T, U>{
    first: T;
    second: U;
}

const pair: Pair<string, number> = {first:"Rakshit", second:42};
console.log(pair)


//generic classes
class Box<T>{
    private _contents: T;

    constructor(contents: T){
        this._contents = contents
    }

    get contents(): T{
        return this._contents
    }
}

const stringBox = new Box<string>("Hello")
console.log(stringBox.contents)

const numberBox = new Box<number>(123)
console.log(numberBox.contents)