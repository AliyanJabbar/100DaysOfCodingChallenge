// Question 137: Implement a try-catch block to handle potential errors in a block of code.
// Explain & TIP: The try-catch statement marks a block of statements to try, and specifies a response, should an exception be thrown. It's a critical feature for robust error handling in JavaScript.
// Here we are using a try-catch block to handle errors
try { // Intentionally cause an error
    throw new Error("Cannot redeclare block scoped variable");
}
catch (error) {
    console.log(error.message);
}
