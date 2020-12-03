// FIRST

//Take the input file and put it into an array
const fs = require("fs");
const inputString = fs.readFileSync("input.txt").toString();
const inputArray = inputString.split("\n")

// for loop to go through each item in the array
const tobogganArray = (arr) => {

	let position = 0;
	let counter = 0;

	for (treeline of arr ) {

		//check the character at the position
		if (treeline.charAt(position) === '#') {
			counter++;
			position = position + 3;
		} else {
			position = position + 3;
		}
		// run the function to check if the position value is greater than the line
		position = subtractPosition(position);
	}
	console.log(counter);
	return counter;
}

// Reset the position if it's greater than the line
const subtractPosition = (num) => {
	if (num > 30) {
		num = num - 31;
	}
	return num;
}

tobogganArray(inputArray);