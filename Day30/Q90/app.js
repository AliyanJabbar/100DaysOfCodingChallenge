// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.
// Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn out to be a number. It's useful for validating inputs or results of calculations.
// NaN stands for (Not a Number)
function checkingNaN(value) {
    return isNaN(value);
}
console.log(checkingNaN("23"));
console.log(checkingNaN(11));
console.log(checkingNaN("hello"));
console.log(checkingNaN("345"));
