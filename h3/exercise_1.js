const input = prompt("Give me a number:");
const number = Number(input);

if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}
