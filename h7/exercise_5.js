let color = "red";

if (true) {
    let color = "blue";
    let size = 10;
    console.log("A:", color);
    console.log("B:", size);
}

console.log("C:", color);

function paint() {
    let color = "green";
    console.log("D:", color);
}

paint();
console.log("E:", color);



const prices =;
let total = 0;

for (const price of prices) {
    total = total + price;
}

console.log("Total:", total);

