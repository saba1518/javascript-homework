const cart = ["Milk", "Bread"];

function addItem(cartArray, item) {
    cartArray.push(item);
}

function withItem(cartArray, item) {
    return [...cartArray, item];
}

console.log("Before addItem:", cart);
addItem(cart, "Eggs");
console.log("After addItem:", cart);

console.log("Before withItem:", cart);
const newCart = withItem(cart, "Cheese");
console.log("Returned by withItem:", newCart);
console.log("After withItem:", cart);
