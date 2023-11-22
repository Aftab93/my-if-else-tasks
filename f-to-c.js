const prompt = require('prompt-sync')();
let input_temp = parseInt(prompt('Enter Temperature in Fahrenheit: '));

let celsius = (input_temp - 32) * 5/9; 
console.log('Temperature in Celsius: ' + celsius);
