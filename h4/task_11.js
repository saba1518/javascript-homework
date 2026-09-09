const numbers = [12, 45, 7, 99, 31, 18, 50, 3, 100, 4, -25, 63, 14, 999, 22];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log(`The smallest number is ${min}`);
