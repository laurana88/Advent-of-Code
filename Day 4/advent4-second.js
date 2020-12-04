//SECOND
const fs = require('fs');

const inputfile = fs.readFile('simple-input.txt', 'utf8' , (err, data) => {

    const input = data.split("\n\n");
    const initialArray = input.map(removeLineMarker);
    const firstPass = initialArray.filter(checkValidOne);
    const secondPass = firstPass.filter(checkValidTwo);
    console.log(secondPass.length);

})

// Remove the line markers
const removeLineMarker = (value) => {
    while (value.includes('\n')) {
        value = value.replace('\n', ' ');
    }
    return value;
}

// make sure that includes all required parameters
const checkValidOne = (value) => {
    const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

    for (i = 0; i < required.length; i++) {

         // if the current item of the required array is not on the passport, report false -> it won't be added to new filtered array
         if(!value.includes(required[i])) {
             return false;
         }
     }
     // if all items from required array are present, report true! and it's added to answer array
     return true;
}

// check to see if it includes all of the valid values for the parameters
const checkValidTwo = (value) => {
    value = value.split(" ");

    for (i=0; i < value.length; i++) {
        let param = value[i].slice(0,value[i].indexOf(":"));
        let val = value[i].slice(value[i].indexOf(":")+1,value[i].length);

        if(checkValues(param,val) === false) {
            return false;
        } 
    }
    return true;
}

// run the if statements to see if values meet the correct rules
const checkValues = (param,value) => {

    if (param === "byr") {
        if (value < 1920 || value > 2002) {
            return false;
        }
    }

    else if (param === "iyr") {
        if (value < 2010 || value > 2020) {
            return false;
        }
    }

    else if (param === "eyr") {
        if (value < 2020 || value > 2030) {
            return false;
        }
    }

    else if (param === "hgt") {
        if (value.includes("cm")) {
            value = value.slice(0,-2);
            if (value < 150 || value > 193) {
                return false;
            }
        } else if (value.includes("in")) {
            value = value.slice(0,-2);
            if (value < 59 || value > 76) {
                return false;
            }
        } else {
            return false;
        }
    }

    else if (param === "hcl") {
        if (value.length !== 7) {
            return false;
        }
        else if (value[0] !== "#") {
            return false;
        } 
    }

    else if (param === "ecl") {
        if (value !== "amb" && value !== 'blu' && value !== 'brn' && value !== 'gry' && value !== 'grn' && value !== 'hzl' && value !== 'oth') {
            return false;
        }
    }

    else if (param === "pid") {
        if (value.length !== 9 || isNaN(value) === true) {
            return false;
        }
    }
}
