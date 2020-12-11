// FIRST

// import file and put into an array
const fs = require("fs");
const inputString = fs.readFileSync("input.txt").toString();
const inputArray = inputString.split("\n")


let accessedIndex = [];
let index = 0;
let acc = 0;

// go through each value
const mainFunction = (value, arr) => {

	if (accessedIndex.includes(index)) {
		console.log(acc);
	}
	else {
		accessedIndex.push(index);
		index = updateIndex(value, index);
		acc = updateAcc(value, acc);
		mainFunction(arr[index], arr);
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

mainFunction(inputArray[0], inputArray); 