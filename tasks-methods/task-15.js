// F = (°C × 9/5) + 32
const celsiusTemps = [0, 10, 20, 30, 40];
const convertToFahrenheit = celsiusTemps.map((temp) => temp * 1.8 + 32);
console.log(convertToFahrenheit);
// Выполнил