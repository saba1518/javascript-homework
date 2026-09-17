function filter(array, test) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (test(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

const numbers =;
const words = ["sun", "planet", "moon", "galaxy", "star"];

const myFilteredNums = filter(numbers, (n) => n % 3 === 0);
const myFilteredWords = filter(words, (w) => w.length === 4);

console.log("My filter (divisible by 3):", myFilteredNums);
console.log("My filter (4-letter words):", myFilteredWords);

console.log("Built-in filter (divisible by 3):", numbers.filter((n) => n % 3 === 0));
console.log("Built-in filter (4-letter words):", words.filter((w) => w.length === 4));
