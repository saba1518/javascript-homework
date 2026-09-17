const numbers =;

const cart = [
    { item: "Bread",  price: 2,  quantity: 2 },
    { item: "Cheese", price: 12, quantity: 1 },
    { item: "Tea",    price: 5,  quantity: 3 },
];

const sum = numbers.reduce((acc, n) => acc + n, 0);
const total = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
const itemCount = cart.reduce((acc, product) => acc + product.quantity, 0);
const biggest = numbers.reduce((acc, n) => Math.max(acc, n), numbers[0]);

console.log("sum:", sum);
console.log("total:", total);
console.log("itemCount:", itemCount);
console.log("biggest:", biggest);
