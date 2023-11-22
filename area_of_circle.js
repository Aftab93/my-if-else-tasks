const prompt = require('prompt-sync')();

const n = parseInt(prompt('Enter Radius: '));

const m = 9.86960440109;

const p = n * m;

console.log('Area of Circle is: ' + p);

