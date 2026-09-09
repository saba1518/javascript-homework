const names = ["Anna", "James", "Nick", "Saba", "Luka", "Mari"];

while (names.length > 0) {
    const removedName = names.shift();
    console.log(`Removing ${removedName}`);
}

console.log(names);
