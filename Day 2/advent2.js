//FIRST

// const inputTest = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc']
// const inputTest2 = [ '1-3', 'a:', 'abcde' ];

//Take the input file and put it into an array
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

		// Figure out the Min for the range
		const minFunction = (array) => {
			let min = parseInt(array[0]);
			return min;
		}

		// Figure out the Max for the range
		const maxFunction = (array) => {
			let max = Math.abs(parseInt(array[0].substring(2)));
			return max;
		}

		// count number of times the password includes the character
		const matchCharacter = (array) => {
			//remove the colon
			array[1] = array[1].slice(0,-1);
			
			//to begin counting, set to 0
			let match = 0;
		
			// if the character at each position equals the letter, add a number to match
			for (var position = 0; position < array[2].length; position++) {
				if (array[2].charAt(position) === array[1]) {
					match +=1;
				}
			}
			return match; 
		}

		// compare match to the min max
		const compare = (min, max, match) => {
			
			if (min <= match && max >= match) {
				answer += 1;
			}

			return answer;

		}

		let min = minFunction(array);
		let max = maxFunction(array);
		let match = matchCharacter(array);
		let valid = compare(min, max, match);
	}
	return answer;
}

totalValid(inputArray);

