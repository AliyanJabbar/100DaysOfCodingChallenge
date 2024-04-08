// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
// Explain & TIP: The .toUpperCase() and .toLowerCase() methods allow you to change the case of all letters in a string, useful for formatting or comparing strings.
function convertingCase(str) {
    var uppercase = str.toUpperCase(); //it will change case to uppercase
    var lowercase = str.toLowerCase(); //it will change case to lowercase
    console.log("Upper Case: ".concat(uppercase)); //it will show the str in upper case 
    console.log("Lower Case: ".concat(lowercase)); // it will show the str in lower case
}
convertingCase("Aliyan Jabbar");
