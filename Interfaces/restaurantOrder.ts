interface Order{
    orderId: number,
    items: string[],
    totalAmount: number,
    paid: boolean,
}

const addItem = (order: Order, item: string, price: number): Order => {

    if(order.paid){
        throw new Error("order is already paid")
    }

    order.items.push(item)
    order.totalAmount += price

    return order
}

let order1: Order = {
    orderId: 123,
    items: [],
    totalAmount: 0,
    paid: false
}

try{
    console.log(addItem(order1,"laptop",50100))
}catch(err: any){
    console.error(err.message)
}