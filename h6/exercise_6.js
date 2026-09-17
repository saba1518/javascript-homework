const numbers =;

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function biggestOf(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function average(arr) {
    return sum(arr) / arr.length;
}

console.log("Sum:", sum(numbers));
console.log("Biggest:", biggestOf(numbers));
console.log("Average:", average(numbers));
console.log("Sum of [1, 2, 3]:", sum([1, 2, 3]));
