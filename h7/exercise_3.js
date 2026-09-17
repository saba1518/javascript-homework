const createPerson = (name, age) => ({ name: name, age: age });

const createBook = (title, pages) => ({
    title: title,
    pages: pages,
    isLong: pages > 300
});

const wrap = value => ({ value: value });

const person = createPerson("Gigi", 25);
console.log(person);
console.log(person.name);
console.log(createPerson("Nino", 30).age);
console.log(createBook("The Hobbit", 310));
console.log(createBook("The Little Prince", 96));
console.log(wrap(5));
