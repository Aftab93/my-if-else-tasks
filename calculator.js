const prompt = require('prompt-sync')();
let n1 = parseInt(prompt('Enter 1st: '));
let n2 = parseInt(prompt('2nd: '));
let op = prompt('Enter Operator(+,-,*,/): ');

if (op == '+') {
	console.log(n1 + n2);
} else if (op == '-') {
	console.log(n1 - n2);
} else if (op == '*'){
	console.log(n1 * n2);
} else if (op == '/'){
	console.log(n1 / n2);
}
