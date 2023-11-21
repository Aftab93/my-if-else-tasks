const prompt = require('prompt-sync')();

const n = parseInt(prompt('Enter Number: '));

if (n % 2 == 0) {
	console.log('Entered Number is Even');
} else {
	console.log('Entered Number is Odd');
}
