const temperatures =;

const anyHot = temperatures.some(t => t > 28);
const allAboveZero = temperatures.every(t => t > 0);
const allAboveTen = temperatures.every(t => t > 10);
const anyFreezing = temperatures.some(t => t < 0);

console.log("anyHot:", anyHot);
console.log("allAboveZero:", allAboveZero);
console.log("allAboveTen:", allAboveTen);
console.log("anyFreezing:", anyFreezing);

temperatures.forEach(t => console.log(`${t} degrees`));

