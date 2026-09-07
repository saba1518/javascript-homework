const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInWeek = 7;

// წამების გამოთვლა დღეში და კვირაში
const secondsInDay = secondsInMinute * minutesInHour * hoursInDay;
const secondsInWeek = secondsInDay * daysInWeek;

console.log("Seconds in a day:", secondsInDay);
