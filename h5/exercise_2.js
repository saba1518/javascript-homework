function greet(name = "stranger", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());
console.log(greet("Nino"));
console.log(greet("Nino", "Hi"));

function line(length = 10, char = "-") {
    return char.repeat(length);
}

console.log(line());
console.log(line(3));
console.log(line(5, "*"));
