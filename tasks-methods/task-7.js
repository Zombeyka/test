const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Mouse', price: 50 },
    { name: 'Keyboard', price: 80 },
    { name: 'Monitor', price: 300 }
];
const getAverageExpensivePrice = products.reduce((accumulator, currentPrice) => accumulator + currentPrice.price, 0) / products.length;
console.log(getAverageExpensivePrice);
// Не выполнил сам