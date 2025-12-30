const customers = [
    { name: 'Alex', active: true, address: 'Short street' },
    { name: 'Maria', active: false, address: 'Very long address street number 123' },
    { name: 'Ivan', active: true, address: 'Medium address 45' }
];
const findLongestActiveAddress = customers.reduce((accumulator, currentValue) => {
    if (currentValue.active) {
        if (currentValue.address.length > accumulator.address.length) {
            console.log('Первый', accumulator, currentValue);
            return currentValue;
        }
        console.log('Второй', accumulator, currentValue);
        return accumulator;
    }
    console.log('последний', accumulator, currentValue);
    return accumulator;
});

console.log(findLongestActiveAddress.address);
// Не выполнил