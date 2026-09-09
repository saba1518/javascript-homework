const randomNumbers = [];

for (let i = 0; i < 100; i++) {
    const num = Math.floor(Math.random() * 2001) - 1000;
    randomNumbers.push(num);
}

let max = randomNumbers[0];
let min = randomNumbers[0];
let positive = 0;
let negative = 0;
let zeros = 0;
let even = 0;
let odd = 0;
let count100 = 0;

for (let i = 0; i < randomNumbers.length; i++) {
    const current = randomNumbers[i];
    
    if (current > max) max = current;
    if (current < min) min = current;
    
    if (current > 0) positive++;
    else if (current < 0) negative++;
    else zeros++;
    
    if (current % 2 === 0) even++;
    else odd++;
    
    if (current === 100) count100++;
}

console.log("===== Statistics =====");
console.log(`Biggest number: ${max}`);
console.log(`Smallest number: ${min}\n`);
console.log(`Positive numbers: ${positive}`);
console.log(`Negative numbers: ${negative}`);
console.log(`Zeros: ${zeros}\n`);
console.log(`Even numbers: ${even}`);
console.log(`Odd numbers: ${odd}\n`);
console.log(`100 appeared: ${count100} times\n`);

console.log("===== Guess the Number (Bonus) =====");
const bonusNumbers = [];
for (let i = 0; i < 50; i++) {
    bonusNumbers.push(Math.floor(Math.random() * 100) + 1);
}
const target = Math.floor(Math.random() * 100) + 1;
let foundTarget = false;

for (let i = 0; i < bonusNumbers.length; i++) {
    if (bonusNumbers[i] === target) {
        console.log(`🎯 Found ${target} at index ${i}!`);
        foundTarget = true;
        break;
    }
}
if (!foundTarget) {
    console.log(`❌ Number ${target} was not found.`);
}
