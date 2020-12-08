// SECOND - THIS IS STILL A WORK IN PROGRESS - CAN'T GET IT WORKING
const fs = require("fs");

let counter = 0;

const inputfile = fs.readFile('simple-input.txt', 'utf8' , (err, data) => {

	let tempNumber = 0;

    const input = data.split("\n");
    // const answer = testFunction(input, "shiny gold");
    const bagRule = findColor(input, "shiny gold");
    const subArray = createSubArray(bagRule);
    console.log(bagRule);
    console.log(subArray);
    for (value of subArray) {
    	let tempNumber = startCalculate(value);
    	console.log(tempNumber);
    	console.log(counter, "COUNT");
    	let tempNumber2 = multiply(tempNumber, value);
    }

    // const answer = multiply(tempNumber,subArray);
    // console.log(answer);
})

const testFunction = (arr, color) => {

	console.log(arr);	
	let bag = [color];
	let newColor = '';
	let newBags = '';
	let tempArray = [];
	let number = '';
	let count = 0;

	// go through each color, colors will be added to it. start with the shiny gold in it
	for (value of bag) {

		// for each color, go through the whole input
		for (i=0; i < arr.length; i ++) {

			// this is the color before the word contain
			compareColor = /^\w*\s\w*/.exec(arr[i]);

			// does the string before contain include the color
			if (compareColor.includes(value)) {
				console.log(value, arr[i]);
				newBags = /(?<=contain).+/.exec(arr[i]);
				tempArray.push(newBags[0]);
				
				tempArray = tempArray.map(value => {
					return value = value.split(",");
				})

				console.log(tempArray);
				for (value of tempArray[0]) {
					number = /\d/.exec(value);
					bag = /\S{2,}\s\S+/.exec(value);
					console.log(number[0], bag[0]);


				}
			}
		}
	}
}

const testFunctionTwo = (arr,input) => {

	let number = '';

	for (value of arr) {
		number = /\d/.exec(value);
		bag = /\S{2,}\s\S+/.exec(value);

		for (i=0; i<input.length; i++) {

		}
	}

}

// find the color in the array
const findColor = (arr, color) => {
	for (value of arr) {
		// this is the color before the word contain
		compareColor = /^\w*\s\w*/.exec(value);

		if (compareColor.includes(color)) {
			return value;
		}
	}
}

// create subarray based on the first color
const createSubArray = (rule) => {
	let tempArray = [];
	newBags = /(?<=contain).+/.exec(rule);
	tempArray.push(newBags[0]);

	tempArray = tempArray.map(value => {
		return value = value.split(",");
	})

	return tempArray[0];
}

const startCalculate = (value) => {
	let tempcount = 0;
	number = /\d/.exec(value);
	tempcount = Number(number[0]);
	counter += Number(number[0]);
	return tempcount;
}

const multiply = (value, arr) => {
	console.log(value);
	console.log(arr);
	number = /\d/.exec(value);
	let toMultiply = Number(number[0]);
	console.log(toMultiply, "MUTLIPLY");
	counter = counter + (value * toMultiply);
}