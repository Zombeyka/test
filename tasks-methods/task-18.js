const items = [
    { name: 'Phone', price: 500, inStock: true },
    { name: 'Tablet', price: 300, inStock: false },
    { name: 'Headphones', price: 100, inStock: true },
    { name: 'Charger', price: 30, inStock: true }
];
const calculateInStockTotal = items.reduce((acc, item) => {
    if (item.inStock) {
        acc += item.price;
    }
    return acc;
}, 0);
console.log(calculateInStockTotal);
// Выполнил