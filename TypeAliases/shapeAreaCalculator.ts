type Circle2 = {
    type: "Circle",
    radius: number
}

type Rectangle2 = {
    type: "Rectangle",
    width: number,
    height: number
}

type Triangle = {
    type: "Triangle",
    base: number,
    height: number
}

type Shape2 = Circle2 | Rectangle2 | Triangle

const calculateArea = (shape: Shape2): number => {
    switch (shape.type) {
        case "Circle":
            return Math.PI * shape.radius ** 2
        case "Rectangle":
            return shape.width * shape.height
        case "Triangle":
            return 0.5 * shape.base * shape.height
    }
}

let circle: Circle2 = {
    type: "Circle",
    radius: 10
}

let rectangle: Rectangle2 = {
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