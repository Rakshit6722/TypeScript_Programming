const filterByProperty = <T,U>(obj: T, type: U): Partial<T> => {
    let resObj: Partial<T> = {}
    for(let key in obj){
        if(typeof obj[key] === type){
            resObj[key] = obj[key]
        }   
    }

    return resObj
}

let mixObj: {name: string, age: number, address: string, experience: number} = {
    name: "Rakshit",
    age: 21,
    address: "Meerut",
    experience: 1
}

console.log(filterByProperty<{name: string, age: number, address: string, experience: number} ,string>(mixObj,"string"))

