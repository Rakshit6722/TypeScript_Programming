function summarizeOrder(productName: string, quantity: number = 1, discountCode?: string): string{
    if(discountCode){
        return `Product: ${productName}, Quantity: ${quantity}, Discount: ${discountCode}`;
    } else {
        return `Product: ${productName}, Quantity: ${quantity}`;
    }
}

console.log(summarizeOrder('Laptop'));
console.log(summarizeOrder('Mobile', 2));
console.log(summarizeOrder('Tablet', 3, 'DISCOUNT_10'));