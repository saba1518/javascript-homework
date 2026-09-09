const randomNumbers = [];

for (let i = 0; i < 100; i++) {
    const num = Math.floor(Math.random() * 1000) + 1;
    randomNumbers.push(num);
}

console.log(randomNumbers);
console.log("Total numbers:", randomNumbers.length);

let greaterThan500 = 0;
let lessThan100 = 0;

for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] > 500) {
        greaterThan500++;
    }
    if (randomNumbers[i] < 100) {
        lessThan100++;
    }
}

console.log("Numbers greater than 500:", greaterThan500);
console.log("Numbers less than 100:", lessThan100);
