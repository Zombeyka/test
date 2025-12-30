const values = [12, 45, 3, 89, 34, 67];
let maxValue = values[0];
values.forEach((number) => {
    if (number > maxValue) {
        maxValue = number;
    }
});
console.log(maxValue);
// Не выполнил 