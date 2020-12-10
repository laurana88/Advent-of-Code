// SECOND
const fs = require("fs");

let counter = 0;
let bagNumber = 0;
let children = '';
let childrenArray = [];
let bagColor = '';
let numMultiply = 0;
let temp = 0;
let counterArray = [];
let parentBag = 1;
let childrenBag = 0;

const inputfile = fs.readFile('input.txt', 'utf8' , (err, data) => {
    let input = data.split("\n");
    let subArray = findColorCreateArray(input, "shiny gold");
    subArray = addParenttoArray(subArray, 1);
    const answer = loop(subArray, input, 1);
    console.log(counter);

})

// loop through the items
const loop = (arr, input, num) => {
	console.log(arr);
	counter += multiplyByParent(arr);
	console.log(counter);
	 for (bag of arr) {
	 	// skip the last item in the array (the parent number)
	 	if (bag.length === undefined) {
	 	} else {
	 		console.log(bag);

	 		//this checks to see if there are bags inside
	    	if (/\d/.test(bag) !== true) {
	    	} else {
	    	bagColor = listColorName(bag);
	    	bagNumber = startCalculate(bag);

	    	// find the children of the bags inside
			children = findColorCreateArray(input, bagColor);
				if (children[0].length > 2 && /\d/.test(children[0]) === true) {
					// if children bag, multply the bag number by the number its parent number
					parentBag = num * bagNumber;
					children = addParenttoArray(children, parentBag);
					console.log(children);
					loop(children,input, parentBag);
	    		} 
			}
    	}
    }
}

// find color & create subarray
const findColorCreateArray = (arr, color) => {
	for (value of arr) {
		// this is the color before the word contain
		compareColor = /^\w*\s\w*/.exec(value);

		// if it is that color, create an array of the bags it can contain
		if (compareColor.includes(color)) {
			let tempArray = [];
			newBags = /(?<=contain).+/.exec(value);
			tempArray.push(newBags[0]);
			tempArray = tempArray[0].split(",");
			return tempArray;
		}
	}
}

// add parent to the end of the arrayarray
const addParenttoArray = (arr, num) => {
	arr.push(num);
	return arr;
}

// grab the number from the array item
const startCalculate = (value) => {
	let tempcount = 0;
	number = /\d/.exec(value);
	tempcount = Number(number[0]);
	return tempcount;
}

// grab the color from the array item
const listColorName = (value) => {
	compareColor =/\S{2,}\s\S+/.exec(value);
	return compareColor[0];
}

// add bags inside and multiply by parent
const multiplyByParent = (arr) => {
	let numberofBags = 0;

	// skip the last item in the array (the parent number)
	for (i=0; i < arr.length-1; i++) {
		number = /\d/.exec(arr[i]);
		numberofBags += Number(number[0]);
	}
	// add up the number and multiply by the parent (last item in the array)
	numberofBags = numberofBags * arr[arr.length-1];
	return numberofBags;
}