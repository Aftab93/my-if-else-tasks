/*
Discount Calculator

Create a program that calculates the final price of an item after 
applying a discount. Ask the user to enter the original price and the discount
 percentage, and then display the discounted price.
 */
const prompt = require('prompt-sync')();
let price = parseInt(prompt('Enter Product price: '));
let discount = parseInt(prompt('Enter discount over it: '));
let discounted_price = price - ( price*discount/100 );
console.log('Discounted price is: ' + discounted_price);
