const numbers =;
const find = 25;
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === find) {
        count++;
    }
}

console.log(`${find} appears ${count} times`);
