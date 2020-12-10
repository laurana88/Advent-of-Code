
let accessedIndex = [];

const temp = (arr) => {

	checkEachLine(arr[i][0],arr[i][1],i,arr);
	accessedIndex.push(arr[i]);

}


const checkEachLine = (value, i, index, acc) => {

	if (value = "acc") {
		acc++;
		index;
	} else if(value = "jmp") {
		index = i + index; 
	} else if(value = "nop") {
		index++;
	}

}