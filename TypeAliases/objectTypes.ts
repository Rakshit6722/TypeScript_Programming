type Person1 = {
    name: string;
    age: number;
}

const user: Person1 = {
    name: "Rakshit",
    age: 21
}

console.log(user)

//intersection type
type BasicInfo = {
    name: string,
    age: number
}

type Address = {
    city: string,
    country: string,
}

type User = BasicInfo & Address

const person: User = {
    name: "Rakshit",
    age:21,
    city:"Meerut",
    country:"India",
}

console.log(person)