/*Age Verification

Develop a program that verifies a user's age before granting access to a 
website or content. Ask the user to enter their birth year, and then use their 
age to determine if they are old enough to access the content.
*/

const prompt = require('prompt-sync')();

let dob = parseInt(prompt('Enter Your Date of Birth: '));
let crr_yr = 2023;
let age = crr_yr - dob;
if (age < 18 ) {
	console.log('You are not Eligible');
} else {
	console.log('Good to Go');
}
