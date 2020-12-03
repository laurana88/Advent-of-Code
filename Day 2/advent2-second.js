//SECOND
// Take the input file and put it into an array
const fs = require("fs");
const inputString = fs.readFileSync("input.txt").toString();
const inputArray = inputString.split("\n")

//Ties the two main functions together
const totalValid = (arr) => {

	let newSubArray = inputSubArrays(arr);
	let finalAnswer = eachSubArrayFunction(newSubArray);
	console.log(finalAnswer);

}

// Create the SubArrays in Each Array
const inputSubArrays = (arr) => {
	let newSubArray = [];

	for (password of arr) {
		let tempArray = password.split(" ");
		newSubArray.push(tempArray);
		tempArray = [];
	}
	return newSubArray;
}

// Do the calculations for each subarray
const eachSubArrayFunction = (arr) => {

	// set the answer to 0 before we can count how many instances are correct
	let answer = 0;

	for (array of arr) {

		// Figure out the first Character from its index (the first number)
		const firstIndexFunction = (array) => {
			let firstIndex = parseInt(array[0]) - 1;
			let firstCharacter = array[2].charAt(firstIndex);
			return firstCharacter;
		}

		// Figure out the second character from its index (the second number)
		const secondIndexFunction = (array) => {
			let secondIndex = Math.abs(parseInt(array[0].substring(2)))-1;
			let secondCharacter = array[2].charAt(secondIndex);
			return secondCharacter
		}

		// compare the first & second character to the letter
		const compare = (first,second) => {

			//remove the colon from the letter
			array[1] = array[1].slice(0,-1);

			// check to see if the letter equals either the first or second character
			if (((array[1] === first) || (array[1] === second)) && (first !== second)) {
				answer++;
			} 

			return answer;

		}

		let firstCharacter = firstIndexFunction(array);
		let secondCharacter = secondIndexFunction(array);
		compare(firstCharacter, secondCharacter);
	}
	return answer;
}

totalValid(inputArray);

