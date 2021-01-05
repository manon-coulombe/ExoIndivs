const fs = require("fs");
const arrayOfInput = fs
.readFileSync(`${__dirname}/input2.txt`)
.toString()
.split("\n");
// @see string to number conversion https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
let line;
let numberOfOccurence;
let lettre;
let password;
let numberMin;
let numberMax;
let count;
let result=0;

for (let i = 0; i < arrayOfInput.length; i++){
	line = arrayOfInput[i].split(" ");
	numberOfOccurence = line[0].split("-");
	lettre = line[1][0];
	password = line[2];
	numberMin = parseInt(numberOfOccurence[0]);
	numberMax = parseInt(numberOfOccurence[1]);
	count=0;
	console.log("password = " + password)
	console.log("numberMin = " + numberMin)
	console.log("1st= " + password.charAt(numberMin))
	console.log("lettre= " + lettre)

	if (password.charAt(numberMin-1) === lettre) {
		count++
	}

	if (password.charAt(numberMax-1) === lettre) {
		count++
	}

	if (count === 1){
		result ++;
	}
}
console.log(result);
