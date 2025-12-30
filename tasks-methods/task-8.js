const people = [
    { name: 'John', age: 28 },
    { name: 'Sarah', age: 32 },
    { name: 'Mike', age: 24 }
];
// const extractNames = people.map((element) => element.name);
const extractNames = people.map(({ name }) => name); // достали значения по ключу
console.log(extractNames);
// Выполнил