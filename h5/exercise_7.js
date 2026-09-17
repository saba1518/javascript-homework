const sentence = "the cat and the dog and the bird";
const words = sentence.split(" ");

console.log("Number of words:", words.length);

const wordCounts = words.reduce((result, word) => {
    result[word] = (result[word] || 0) + 1;
    return result;
}, {});
console.log("Word counts:", wordCounts);

const longestWord = words.reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
}, "");
console.log("Longest word:", longestWord);
