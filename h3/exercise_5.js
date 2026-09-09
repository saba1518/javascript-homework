const wordInput = prompt("Type a word:");
const cleanWord = wordInput.trim().toLowerCase();
let vowelCount = 0;

for (let i = 0; i < cleanWord.length; i++) {
    const char = cleanWord[i];
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        vowelCount += 1;
    }
}
console.log(`"${cleanWord}" has ${vowelCount} vowels out of ${cleanWord.length} letters.`);
