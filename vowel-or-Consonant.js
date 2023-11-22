const prompt = require('prompt-sync')();
const n = prompt('Enter letter: ');

let vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(n)) {
      console.log('The entered character ' + n + ' is vowel.');
    } else {
      console.log('The entered character ' + n + ' is consonant.');
    }
