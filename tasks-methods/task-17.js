const orders = [{ id: 1, status: 'completed', total: 100 },
{ id: 2, status: 'pending', total: 200 },
{ id: 3, status: 'completed', total: 150 },
{ id: 4, status: 'cancelled', total: 50 }
];
const getCompletedOrders = orders.filter((order) => order.status === 'completed');
console.log(getCompletedOrders);
// Выполнил