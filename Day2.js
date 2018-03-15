/*Objective 
In this challenge, you'll work with arithmetic operators. Check out the Tutorial tab for learning materials and an instructional video!

Task 
Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost.

Note: Be sure to use precise values for your calculations, or you may end up with an incorrectly rounded result!

Input Format

There are  lines of numeric input: 
The first line has a double,  (the cost of the meal before tax and tip). 
The second line has an integer,  (the percentage of  being added as tip). 
The third line has an integer,  (the percentage of  being added as tax).

Output Format

Print The total meal cost is totalCost dollars., where  is the rounded integer result of the entire bill ( with added tax and tip).

Sample Input

12.00
20
8
Sample Output

The total meal cost is 15 dollars.

We round  to the nearest dollar (integer) and then print our result:

The total meal cost is 15 dollars.*/

'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
	_input = _input.split(new RegExp('[\n ]+'));
	main(+(_input[0]), +(_input[1]), +(_input[2]));    
});

function main(mealCost, tipPercent, taxPercent) {
    process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function (data){
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
    readLine();
}
/////////////// ignore above this line ////////////////////

function main() {
    var mealCost = parseFloat(readLine(mealCost));//string to a decimal 
    var tipPercent = parseInt(readLine(tipPercent));//string to a integer
    var taxPercent = parseInt(readLine(taxPercent));//string to a integer
    var totalCost = 0;
    var tip = mealCost * (tipPercent/100);
    var tax = mealCost * (taxPercent/100);
    totalCost =  mealCost + tip + tax;
    
    console.log("The total meal cost is " + totalCost + "dollars");
    
};

