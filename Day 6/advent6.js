//FIRST

//import the file into an arrawy
const fs = require("fs");

const inputfile = fs.readFile('input.txt', 'utf8' , (err, data) => {

    const input = data.split("\n\n");
    let inputArray = input.map(removeLineMarker);
    inputArray = inputArray.map(removeSpaces);
    console.log(inputArray);
    const answer = countLetter(inputArray);
    console.log(answer);

})

// Remove the line markers
const removeLineMarker = (value) => {
    while (value.includes('\n')) {
        value = value.replace('\n', ' ');
    }
    return value;
}

// Remove Spaces
const removeSpaces = (value) => {
	while(value.includes(' ')) {
		value = value.replace(' ', '');
	}
	return value;
}

// Count Letter
const countLetter = (arr) => {
	// set up the comparison and variable to count against
	const included = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	let count = 0;

	// loop through the array
	for (value of arr) {

		// for each value of the array, go through the included array
		for (i=0; i < included.length; i++) {

			// if the value of the array includes the current letter, add to the count
			if(value.includes(included[i]) === true) {
				count ++;
			}
		}
	}
	return count;
}

	

