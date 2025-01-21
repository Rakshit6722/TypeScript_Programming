interface Product12{
    readonly id: string,
    name: string,
    price: number,
    category?: string,
    inStock: boolean,
}

const addToCart = (product: Product12): Product12[] => {
    let productArr: Product12[] = []

    productArr.push(product)
    return productArr
}

const product1: Product12 = {
    id: "pro123",
    name: "tufF15",
    price: 50000,
    inStock: true
}

console.log(addToCart(product1))

