type Order1 = {
    readonly orderId: number,
    amount: number,
    status: "Pending" | "Shipped" | "Delivered" | "Cancelled"
}

const updateOrderStatus = (order: Order1, status: "Pending" | "Shipped" | "Delivered" | "Cancelled"): Order1 => {
    order.status = status
    return order
}

let order2: Order1 = {
    orderId: 1234,
    amount: 1000,
    status: "Pending"
}

console.log(order2)
console.log(updateOrderStatus(order2, "Shipped")) 

