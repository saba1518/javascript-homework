const square = n => n * n;

const isAdult = age => age >= 18;

const greet = name => `Hello, ${name}!`;

const area = (width, height) => width * height;

const sayHi = () => "Hi!";

const sign = n => {
    if (n > 0) {
        return "positive";
    } else if (n < 0) {
        return "negative";
    }
    return "zero";
};

const half = n => n / 2;

console.log("square(7):", square(7));
console.log("isAdult(16):", isAdult(16));
console.log('greet("Nino"):', greet("Nino"));
console.log("area(3, 5):", area(3, 5));
console.log("sayHi():", sayHi());
console.log("sign(-4):", sign(-4));
console.log("sign(0):", sign(0));
console.log("half(10):", half(10));
