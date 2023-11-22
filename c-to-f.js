const prompt = require('prompt-sync')();
let input_temp = parseInt(prompt('Enter Temperature in Celcius: '));

let fahrenheit = (input_temp * 9/5) + 32;

console.log('Temperature in Fahrenheit: ' + fahrenheit);
