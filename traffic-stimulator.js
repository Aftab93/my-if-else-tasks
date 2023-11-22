const prompt = require('prompt-sync')();

let input = prompt('Enter Colour: ');

let colors = ['red', 'yellow', 'green'];

    if (input === 'red') {
	    console.log('stop');
    } else if (input === 'yellow') {
	      console.log('ready');
    } else if (input === 'green') {
	      console.log('move');
    } else {
	      console.log('Enter valid color');
	}
