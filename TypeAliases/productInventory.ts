type Product1 = {
    id: number,
    name: string,
    price: number,
    category: string,
}

type ProductItem = Product1 | null

const inventoryManagement = (product: ProductItem): ProductItem => {
    if(!product){
        throw new Error("Product dosen't exist!")
    }
    return product
}

let product2: ProductItem = {
    id: 42121,
    name: "Laptop",
    price: 50123,
    category: "Computers & Electronics"
}

let product3: ProductItem = null

try{
    console.log(inventoryManagement(product2))
    console.log(inventoryManagement(product3))
}catch(err: any){
    console.error(err.message)
}