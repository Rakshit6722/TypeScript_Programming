type Car = {
    type: 'car',
    doors: number,
    bootsize: number,
}

type MotorBike = {
    type: 'motorbike',
    fuel:'petrol'
}

type Vehicle = {
    //so these are common properties of a vehicle
    make: string,
    model: string,
    fuel: 'petrol' | 'diesel',
} & (Car | MotorBike) //now to add specific properity of motorbike and
// car seaprately we add it with the help of disciminated union, with this
// '&'

const motorbike: Vehicle = {
    type: 'motorbike',
    fuel: 'petrol',
    make:"honda",
    model:"cbr",
}

const car: Vehicle = {
    type: 'car',
    model: 'i10',
    make: 'hyundai',
    fuel:'diesel',
    doors:4,
    bootsize:500,
}