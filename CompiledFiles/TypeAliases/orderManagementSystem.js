"use strict";
const updateOrderStatus = (order, status) => {
    order.status = status;
    return order;
};
let order2 = {
    orderId: 1234,
    amount: 1000,
    status: "Pending"
};
console.log(order2);
console.log(updateOrderStatus(order2, "Shipped"));
