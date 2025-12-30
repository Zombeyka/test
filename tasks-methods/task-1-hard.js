// 1 задача, сложная
// банкромат
// есть массив купюр для размена [5000, 2000, 1000, 500, 200, 100, 50]
// в функцию прилетает число - сумма денег которые нужно разменять, на выходе объект, пример дали 3500
//  {5000: 0,  2000: 1, 1000: 1, 500: 1, 200: 0, 100: 0, 50: 0}

// дали 12300
// {5000: 2, 2000: 1, ..., 100: 3, 50: 0} 

// в аккумуляторе передача элемента массива и кол-ва требуемого элемента
// получить остаток от деления сум на кэш в значении

const sum = 8850;
const cash = [5000, 2000, 1000, 500, 200, 100, 50];
const splitCash = (sumForSplit, banknotes) => {
    const result = banknotes.reduce((accumulator, currentValue) => {
        const countBanknotes = Math.floor(sumForSplit / currentValue); // round() - округляет в большую 
        if (countBanknotes) {
            // accumulator.currentValue = countBanknotes; //>>> {currentValue: 1}
            accumulator[currentValue] = countBanknotes;
            sumForSplit -= countBanknotes * currentValue;
        }
        return accumulator;
    }

        , {});
    return result;
};
console.log(splitCash(sum, cash));