type Circle = {
    type: "Circle",
    radius: number
}

type Rectangle = {
    type: "Rectangle",
    width: number,
    height: number
}

type Triangle = {
    type: "Triangle",
    base: number,
    height: number
}

type Shape = Circle | Rectangle | Triangle

const calculateArea = (shape: Shape): number => {
    switch (shape.type) {
        case "Circle":
            return Math.PI * shape.radius ** 2
        case "Rectangle":
            return shape.width * shape.height
        case "Triangle":
            return 0.5 * shape.base * shape.height
    }
}

let circle: Circle = {
    type: "Circle",
    radius: 10
}

let rectangle: Rectangle = {
    type: "Rectangle",
    width: 10,
    height: 20
}

let triangle: Triangle = {
    type: "Triangle",
    base: 10,
    height: 20
}


console.log(calculateArea(circle))
console.log(calculateArea(rectangle))
console.log(calculateArea(triangle))