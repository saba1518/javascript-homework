const age = 20;
const hasTicket = true;
const isStudent = false;

console.log("Adult with ticket:", age >= 18 && hasTicket);
console.log("Student or has ticket:", isStudent || hasTicket);
console.log("Not a student:", !isStudent);
console.log("Under 18 or student:", age < 18 || isStudent);
console.log("Adult and not a student:", age >= 18 && !isStudent);
