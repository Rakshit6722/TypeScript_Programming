"use strict";
const addItem = (order, item, price) => {
    if (order.paid) {
        throw new Error("order is already paid");
    }
    order.items.push(item);
    order.totalAmount += price;
    return order;
};
let order1 = {
    orderId: 123,
    items: [],
    totalAmount: 0,
    paid: false
};
try {
    console.log(addItem(order1, "laptop", 50100));
}
catch (err) {
    console.error(err.message);
}
