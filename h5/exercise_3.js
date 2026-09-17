let score = 10;

function showLocalScore() {
    let score = 50;
    console.log("A:", score);
}

function addBonus() {
    score += 5;
    console.log("B:", score);
}

function makeMessage() {
    let message = "Well done!";
    console.log("C:", message);
}

console.log("1:", score);

showLocalScore();
console.log("2:", score);

if (score > 5) {
    let score = 99;
    console.log("3:", score);
}
console.log("4:", score);

addBonus();
console.log("5:", score);

makeMessage();
