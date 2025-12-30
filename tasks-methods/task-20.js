const allUsers = [
    { name: 'Tom', age: 16 },
    { name: 'Anna', age: 25 },
    { name: 'Peter', age: 17 },
    { name: 'Kate', age: 32 },
    { name: 'Sam', age: 19 }
];
const calculateAverageAdultAge = allUsers.reduce((acc, user) => {
    if (user.age >= 18) {
        acc += user.age / user.age;
    }
    return acc;
}, 0);
console.log(calculateAverageAdultAge);