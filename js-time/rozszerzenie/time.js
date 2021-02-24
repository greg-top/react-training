const moment = require('moment');

//get date
const date = new Date();

// format date with moment.js
moment(date).format('MM/DD/YYYY');

console.log(`aktualna data sformatowana za pomocą biblioteki moment.js: ${date}`);
