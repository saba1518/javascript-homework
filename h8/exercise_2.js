const students = [
    { name: "Nino",   grade: 92, active: true  },
    { name: "Gio",    grade: 58, active: true  },
    { name: "Mariam", grade: 74, active: false },
    { name: "Luka",   grade: 45, active: true  },
    { name: "Ana",    grade: 88, active: false },
];

const passedNames = students.filter(s => s.grade >= 60).map(s => s.name);
const activeCount = students.filter(s => s.active).length;
const luka = students.find(s => s.name === "Luka");
const firstFailing = students.find(s => s.grade < 60).name;
const missing = students.find(s => s.name === "Dato");

console.log("passedNames:", passedNames);
console.log("activeCount:", activeCount);
console.log("luka:", luka);
console.log("firstFailing:", firstFailing);
console.log("missing:", missing);
