// FIRST
const fs = require("fs");

const inputfile = fs.readFile('input.txt', 'utf8' , (err, data) => {

    const input = data.split("\n");
    const answer = testFunction(input, "shiny gold");
})

const testFunction = (arr, color) => {

	let bag = [color];
	let newColor = '';
	let compare = '';

	// go through each color, colors will be added to it. start with the shiny gold in it
	for (value of bag) {

		// for each color, go through the whole input
		for (i=0; i < arr.length; i ++) {

			// this is the text after the word contain, we'll be checking if it includes the color
			compare = /(?<=contain).+/.exec(arr[i]);
			// this is the color before the word contain, we'll need it if the check goes well
			newColor = /^\w*\s\w*/.exec(arr[i]);

			// check to see if second half of the rule includes the current value (color) & if the color array doesn't already include the possible new color
			if (compare[0].includes(value) === true && !bag.includes(newColor[0])) {
				// if yes, push the new color (word before contain) to the array
				bag.push(newColor[0]);
			}
			//reset the color
			newColor = '';
		}
	}
	//subtract by 1 since the shiny gold was already in the array
	console.log(bag.length - 1);
}
