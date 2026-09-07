const PI = 3.14159;
const radiusInput = prompt("Radius:");
const radius = Number(radiusInput);
const area = PI * (radius ** 2);
const roundedArea = Math.round(area * 100) / 100;

console.log(`A circle with radius ${radius} has area ${roundedArea}`);
