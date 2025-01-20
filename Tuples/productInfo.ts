let inventory: [string, number, number] = ["Pen", 20, 2];

const calculateInventoryValue = (inventory: [string, number, number]): number => {
    return inventory[1] * inventory[2];
}

const getProductDetails = (inventory: [string, number, number]): string => {
    return `Product: ${inventory[0]}, Quantity: ${inventory[1]}, Price: ${inventory[2]}`;
}

console.log(calculateInventoryValue(inventory));
console.log(getProductDetails(inventory));