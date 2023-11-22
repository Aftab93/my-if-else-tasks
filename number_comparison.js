const prompt = require('prompt-sync')();
const n1 = parseInt(prompt('Enter 1st Number: '));
const n2 = parseInt(prompt('Enter 2nd Number: '));

if(n1 > n2) {
	console.log('The greater number is: ' + n1);
} else if (n2 > n1) {
	console.log('The greater number is: ' + n2);
} else {
	console.log(n1 + ' = ' + n2);
}

