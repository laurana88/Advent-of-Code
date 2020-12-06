//SECOND

//import the file into an arrawy
const fs = require("fs");

const inputfile = fs.readFile('input.txt', 'utf8' , (err, data) => {

    let input = data.split("\n\n");
    input = inputSubArrays(input);
    const answer = countLetter(input);
    console.log(answer);

})

// Create the SubArrays in Each Array
const inputSubArrays = (arr) => {
	let newSubArray = [];

	for (value of arr) {
		let tempArray = value.split("\n");
		newSubArray.push(tempArray);
		tempArray = [];
	}
	return newSubArray;
}

// Count Letter
const countLetter = (arr) => {
	// set up the comparison and variable to count against
	const included = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	let count = 0;
	let compare = 0;
	let comparison = 0;

	//go through each value of the sub array (each gropu)
	for (value of arr) {

		// for each group, we'll compare everything in it to a letter in the included array first
		for (i=0; i < included.length; i++) {

			// loop through each group's person
			for (j=0; j < value.length; j++) {

				// if that person has the letter, add to a value
				if (value[j].includes(included[i])) {
					compare ++;
				}
			}

			// if after comparing everyone, if that value equals the group's length (so if a is in everyone's answer), add to the count
			if (compare === value.length) {
				count ++;
			}

			// after going through the letter, reset the comparison, and go back and do next letter
			compare = 0;
		}
	}
	return count;
}
