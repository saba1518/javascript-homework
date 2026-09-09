const input = prompt("Your score:");
const score = Number(input);

if (score >= 90) {
    console.log("Your grade is A");
} else if (score >= 80) {
    console.log("Your grade is B");
} else if (score >= 70) {
    console.log("Your grade is C");
} else {
    console.log("Your grade is F");
}
