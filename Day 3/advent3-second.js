// SECOND

//Take the input file and put it into an array
const fs = require("fs");
const inputString = fs.readFileSync("input.txt").toString();
const inputArray = inputString.split("\n")

// for loop to go through each item in the array
const tobogganArray = (arr) => {

	let positionOne = 0;
	let counterOne = 0;
	let positionTwo = 0;
	let counterTwo = 0;
	let positionThree = 0;
	let counterThree = 0;
	let positionFour = 0;
	let counterFour = 0;
	let positionFive = 0;
	let counterFive = 0;

	for (i = 0; i < arr.length; i++) {

		counterOne = checkTree(arr[i],counterOne,positionOne);
		positionOne = subtractPosition(positionOne + 1);

		counterTwo = checkTree(arr[i],counterTwo,positionTwo);
		positionTwo = subtractPosition(positionTwo + 3);

		counterThree = checkTree(arr[i],counterThree,positionThree);
		positionThree = subtractPosition(positionThree + 5);

		counterFour = checkTree(arr[i],counterFour,positionFour);
		positionFour = subtractPosition(positionFour + 7);

		// skipping odd indexes for the fifth slope
		if (i % 2 === 0) {
			counterFive = checkTree(arr[i],counterFive,positionFive);
			positionFive = subtractPosition(positionFive + 1);
		}

	}

	//multiply the counters together
	const multiplycounter = counterOne * counterTwo * counterThree * counterFour * counterFive;
	console.log(multiplycounter);
	return multiplycounter;
}

// Check for a tree and add to the counter
const checkTree = (item, count, posit) => {
	if (item.charAt(posit) === '#') {
		count++;
	}
	return count;
}

// Reset the position if it's greater than the line
const subtractPosition = (num) => {
	if (num > 30) {
		num = num - 31;
	}
	return num;
}

tobogganArray(inputArray);