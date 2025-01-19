function calculateDiscout(price: number, discount: number): number{
    let discountAmount = price * discount/100;
    return price - discountAmount;
}

console.log(calculateDiscout(100, 20)); 