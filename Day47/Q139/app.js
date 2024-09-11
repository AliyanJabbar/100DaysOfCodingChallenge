// Question 139: List three reserved words in JavaScript and create a valid use case for each.
// Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used as identifiers (e.g., variable names, function names). Understanding these can help prevent syntax errors and make your code more readable.
//let is a reserved keyword, used for making variables which are used to store data
var user = "Ali";
//if is a reserved keyword, used in conditions 
if (user === "Ali") {
    console.log("welcome ".concat(user)); //Output: welcome Ali
    //else is also a reserved keyword, used in conditions
}
else {
    console.log("Invalid user");
}
//return is also a reserved keyword, used to exit a function and return a value from that function
function addition(a, b) {
    return a + b;
}
console.log(addition(9, 2)); //Output: 11
