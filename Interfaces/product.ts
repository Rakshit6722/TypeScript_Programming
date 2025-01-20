interface Product{
    readonly id: string,
    name: string,
    price: number,
    category?: string,
    inStock: boolean,
}

const addToCart = (product: Product): Product[] => {
    let productArr: Product[] = []

    productArr.push(product)
    return productArr
}

const product1: Product = {
    id: "pro123",
    name: "tufF15",
    price: 50000,
    inStock: true
}

console.log(addToCart(product1))

