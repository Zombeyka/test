const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
const countFruitOccurrences = fruits.reduce((acc, element) => {
    // обращение через точку к аккумулятору - поиск значения по ключу
    // обращение через квадратные скобки - динамичный ключ
    acc[element] = acc[element.length];
    return acc;
}
    , {});
console.log(countFruitOccurrences);