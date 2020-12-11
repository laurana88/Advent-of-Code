//SECOND

// import file and put into an array
const fs = require("fs");
const inputString = fs.readFileSync("input.txt").toString();
const inputArray = inputString.split("\n")

let accessedIndex = [];
let index = 0;
let acc = 0;
let final = 0;

const loop = (arr) => {

	// go through each item in the main area
	for (i=0; i < arr.length; i++) {
		let tempArray = [...arr];

		// if the final number has a number other than 0, break the loop and end it
		if (final !== 0) {
			break;
		}
		// if the current item is a nop, change it & then run the function to see if it loops
		else if (arr[i].includes("nop")) {
			let tempValue = arr[i].replace("nop", "jmp");
			tempArray.splice(i, 1, tempValue);
			mainFunction(tempArray[0], tempArray);
		}
		// if the current item is a jmp, change it & then run the function to see if it loops
		else if (arr[i].includes("jmp")) {
			let value = arr[i].replace("jmp", "nop");
			tempArray.splice(i, 1, value);
			mainFunction(tempArray[0], tempArray);
		}
		// reset the items before going to the next item
		accessedIndex = [];
		index = 0;
		acc = 0;
	}
	console.log("The final accumulator is", final);
}

// go through each value
const mainFunction = (value, arr) => {

	// if the index is already in my accessed index, then it's a repeated item and it's looping
	if (accessedIndex.includes(index)) {
		console.log(acc, "STOP");
	}

	//do the calculations for that item
	else {
		accessedIndex.push(index);
		acc = updateAcc(arr[index], acc);
		index = updateIndex(arr[index], index);

		// if after the calculations the next item in the array is undefined then it's terminated, log the ACC to final
		if (arr[index] === undefined) {
			console.log(acc, "FINAL?");
			final = acc;
		}
		// if after teh calculations, repeat the function with the next item based on those calculations
		else {
			mainFunction(arr[index], arr, index);
		}
	}
}

//update the index based on the line
const updateIndex = (value, index) => {

	if (value.includes("acc")) {
		index++;
		return index;
	} 
	else if(value.includes("jmp")) {
		let jumpindex = /\W\d+/.exec(value);
		index = index + Number(jumpindex[0]); 
		return index;
	} 
	else if(value.includes("nop")) {
		index++;
		return index;
	}
}

//update the acc based on the line
const updateAcc = (value, acc) => {
	if (value.includes("acc")) {
		let tempacc = /\W\d+/.exec(value);
		acc += Number(tempacc[0]);
		return acc;
	} else {
		return acc;
	}
}

loop(inputArray);