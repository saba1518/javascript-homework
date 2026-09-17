const numbers =;
const names = ["nino", "gio", "mariam"];
const prices =;

const doubled = numbers.map(n => n * 2);
const upper = names.map(name => name.toUpperCase());
const withTax = prices.map(price => price + (price * 0.18));
const lengths = names.map(name => name.length);

console.log("doubled:", doubled);
console.log("upper:", upper);
console.log("withTax:", withTax);
console.log("lengths:", lengths);
