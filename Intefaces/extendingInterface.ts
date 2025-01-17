interface Animal {
    species: string
}

interface Dog extends Animal {
    name: string
}

const dog1: Dog = {
    name: "Tommy",
    species: "Labrador"
}