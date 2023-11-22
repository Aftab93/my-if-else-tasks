/*Age Classification

Build a program that asks the user for their age and then classifies them into different 
age groups (e.g., child, teenager, adult, senior citizen).
*/
const prompt = require('prompt-sync')();
let age = parseInt(prompt('Enter your age: '));

if (age < 12) {
	console.log('You are a child');
} else if (age > 12 && age < 20) {
	console.log('You are a teenager.');
} else if (age > 20 && age < 35){
	console.log('You are adult');
} else {
	console.log('You are a senior citizen');
}
