const leapYear = require('leap-year');

const date = new Date;
const year = date.getFullYear();
const customDate = new Date('2024-03-21');
const customYear = customDate.getFullYear();

console.log(`Czy rok ${year} jest przestępny: ${leapYear(year)}`);
console.log(`Czy rok ${customYear} jest przestępny: ${leapYear(customYear)}`);