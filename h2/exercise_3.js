const celsiusInput = prompt("Temperature in Celsius:");
const celsius = Number(celsiusInput);
const fahrenheit = celsius * 9 / 5 + 32;
const roundedFahrenheit = Math.round(fahrenheit * 10) / 10;

console.log(`${celsius}°C is ${roundedFahrenheit}°F`);
