/*  
 * Write a program that takes a student's score as input and then prints out their grade
 *based on the following criteria:
 *A: 90-100
 *B: 80-89
 *C: 70-79
 *D: 60-69
 *F: 0-59
 */

const prompt = require('prompt-sync')();
let score = parseInt(prompt('Enter your score: '));

if (score >= 90 && score < 100) {
	console.log('Your Grade is: A');
} else if (score >=80 && score < 90) {
	console.log('Your Grade is: B');
} else if (score >=70 && score < 80) {
	console.log('You Grade is: C');
} else if (score >= 60 && score < 70){
	console.log('Your Grade is: D');
} else {
	console.log('Your Grade is: f');
}
