const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 }
];
const groupByAge = users.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue.age]) {
        accumulator[currentValue.age].push(currentValue.name);
    }
    else {
        accumulator[currentValue.age] = [currentValue.name];
    }
    return accumulator;
}, {});
console.log(groupByAge);
// Не выполнил сам