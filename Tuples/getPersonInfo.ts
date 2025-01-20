let personIngfo: [string, number, boolean] = ["Rakshit",21,true]

const getPersonInfo = (person: [string, number, boolean]): string => {
    return `Name: ${person[0]}, Age: ${person[1]}, Is Active: ${person[2]}`
}

console.log(getPersonInfo(personIngfo)); 