const numbers = [1, 2, 3, 4, 5, 6]
const sumEvenNumbers = (arr) => {
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return arr[i]
        }
    }
    return arr;
}
// console.log(sumEvenNumbers(numbers))
let counter = {}
counter[1] = 1
console.log(counter)