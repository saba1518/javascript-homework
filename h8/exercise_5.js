const movies = [
    { title: "Inception", year: 2010, rating: 8.8, minutes: 148 },
    { title: "The Room",  year: 2003, rating: 3.7, minutes: 99  },
    { title: "Parasite",  year: 2019, rating: 8.5, minutes: 132 },
    { title: "Cats",      year: 2019, rating: 2.8, minutes: 110 },
    { title: "Whiplash",  year: 2014, rating: 8.5, minutes: 106 },
];

const good = movies.filter(m => m.rating >= 8);

const goodTitles = good.map(m => m.title);
const goodMinutes = good.reduce((sum, m) => sum + m.minutes, 0);
const bestMovie = movies.reduce((max, m) => m.rating > max.rating ? m : max, movies[0]);
const best = bestMovie.title;

const summary = list => {
    const totalMinutes = list.reduce((sum, m) => sum + m.minutes, 0);
    return `${list.length} good movies · ${totalMinutes} min`;
};

console.log("goodTitles:", goodTitles);
console.log("goodMinutes:", goodMinutes);
console.log("best:", best);
console.log("summary:", summary(good));
