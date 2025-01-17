//default parameters
function func3(a: number, b: number = 5):number{
    return a+b
}

console.log(func3(2))

//rest parameters
function sum(...args: number[]):number{
    let sum: number = 0
    for(let arg of args){
        sum += arg
    }
    return sum
}

console.log(sum(1,2,3,45,1,4,1))

function makePara(...words: string[]): string{
    let para: string  = ""
    for(let word of words){
        para += word + " "
    }
    return para.trim()
}

console.log(makePara("my","name","is","Rakshit"))

