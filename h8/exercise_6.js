function myForEach(list, action) {
    for (const item of list) {
        action(item);
    }
}

function myMap(list, transform) {
    const result = [];
    for (const item of list) {
        result.push(transform(item));
    }
    return result;
}

function myFilter(list, keep) {
    const result = [];
    for (const item of list) {
        if (keep(item)) {
            result.push(item);
        }
    }
    return result;
}

function myFind(list, test) {
    for (const item of list) {
        if (test(item)) {
            return item;
        }
    }
}

function mySome(list, test) {
    for (const item of list) {
        if (test(item)) {
            return true;
        }
    }
    return false;
}

function myEvery(list, test) {
    for (const item of list) {
        if (!test(item)) {
            return false;
        }
    }
    return true;
}

function myReduce(list, combine, start) {
    let accumulator = start;
    for (const item of list) {
        accumulator = combine(accumulator, item);
    }
    return accumulator;
}

const numbers =;
const words = ["sun", "banana", "kiwi", "fig"];

myForEach(words, (word) => console.log("word:", word));
console.log("myMap:", myMap(numbers, (n) => n * n));
console.log("myFilter:", myFilter(numbers, (n) => n > 4));
console.log("myFind:", myFind(words, (w) => w.length > 4));
console.log("myFind:", myFind(words, (w) => w.length > 10));
console.log("mySome:", mySome(numbers, (n) => n > 8));
console.log("myEvery:", myEvery(numbers, (n) => n > 1));
console.log("myEvery:", myEvery(numbers, (n) => n > 3));
console.log("myReduce:", myReduce(numbers, (sum, n) => sum + n, 0));

const movies = [
    { title: "Inception", year: 2010, rating: 8.8, minutes: 148 },
    { title: "The Room",  year: 2003, rating: 3.7, minutes: 99  },
    { title: "Parasite",  year: 2019, rating: 8.5, minutes: 132 },
    { title: "Cats",      year: 2019, rating: 2.8, minutes: 110 },
    { title: "Whiplash",  year: 2014, rating: 8.5, minutes: 106 },
];

const good = myFilter(movies, (m) => m.rating >= 8);
console.log("goodTitles:", myMap(good, (m) => m.title));
console.log("goodMinutes:", myReduce(good, (sum, m) => sum + m.minutes, 0));
console.log("matches:", myMap(good, (m) => m.title).join() === good.map((m) => m.title).join());

