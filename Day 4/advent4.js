//FIRST
const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const fs = require('fs');
const inputfile = fs.readFile('simple-input.txt', 'utf8' , (err, data) => {
	//make an array by taking out the lines
	const input = data.split("\n\n");
    
    // filter to a new array
    const answer = input.filter(value => {

        // create a loop to loop through the required array of strings (the passport fields)
    	for (i = 0; i < required.length; i++) {

    		console.log(required[i]);
            // if the current item of the required array is not on the passport, report false -> it won't be added to new filtered array
    		if(!value.includes(required[i])) {
    			console.log(required[i], "NO INCLUDES");
                return false;
    		}
    	}

    	// if all items from required array are present, report true! and it's added to answer array
    	return true;
    })
    console.log(answer);
    console.log(answer.length);
 })

