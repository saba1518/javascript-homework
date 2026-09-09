const numbers =;
const find = 50;
let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === find) {
        console.log(`Found ${find} at index ${i}`);
        found = true;
        break;
    }
}

if (!found) {
    console.log(`${find} was not found`);
}
