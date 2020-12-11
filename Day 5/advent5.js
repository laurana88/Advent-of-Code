// FIRST

// import file and put into an array
const fs = require("fs");
const inputString = fs.readFileSync("input.txt").toString();
const inputArray = inputString.split("\n")

// main loop through each boarding pass
const loop = (arr) => {
	let seatIDArray = [];
	for (boarding of arr) {
		
		// loop through each row letter finding top/bottom number of the range  
		let rowTop = 127;
		let rowBottom = 0;
		for (i=0; i < 7; i++) {
			rowTop = findTop(boarding[i], rowTop, rowBottom);
			rowBottom = findBottom(boarding[i], rowTop, rowBottom);
		}
		let row = rowTop;
		rowTop = 127;
		rowBottom = 0;

		// loop through each column letter finding top/bottom num ber of the range
		let columnTop = 7;
		let columnBottom = 0;
		for (i = 0; i < boarding.length; i++) {
			// only do the calcuations for the last 3 letters
			if (i > 6) {
				columnTop = findTop(boarding[i], columnTop, columnBottom);
				columnBottom = findBottom(boarding[i], columnTop, columnBottom);
			}
		}
		let column = columnTop;
		columnTop = 7;
		columnBottom = 0;

		// calculate seatID and push to an array
		let seatID = (row * 8) + column;
		seatIDArray.push(seatID);
	}
	// sort the array with the highest number at the start and log that number
	seatIDArray = sort(seatIDArray);
	console.log(seatIDArray[0]);
}

// calculate the top number of the range
const findTop= (letter, top, bottom)=> {
	// upper
	if (letter === "B" || letter === "R") {
		return top;
	}
	//lower
	else if (letter === "F" || letter === "L") {
		top = Math.floor((top-bottom)/2)+bottom;
		return top;
	} 
}

// calculate the bottom number of the range
const findBottom = (letter, top, bottom)=> {
	// upper
	if (letter === "B" || letter === "R") {
		bottom = Math.ceil((top-bottom)/2)+bottom;
		return bottom;
	}
	//lower
	else if (letter === "F" || letter === "L") {
		return bottom;
	} 
}

// sort the array with highest number first
const sort = (arr) => {
	arr.sort(function(a, b){return b - a});
	return arr;
}

const answer = loop(inputArray);