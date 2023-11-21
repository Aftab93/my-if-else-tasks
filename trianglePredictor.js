const prompt = require('prompt-sync')();

const n = parseInt(prompt('Enter First Side: '));

const m = parseInt(prompt('Enter Second Side: '));
const p = parseInt(prompt('Enter Third Side: '));


 if (n === m && m === p) {
        console.log('Equilateral Triangle');
      } else if (n === m || m === p || n === p) {
        console.log('Isosceles Triangle');
      } else {
        console.log('Scalene Triangle');
      }
