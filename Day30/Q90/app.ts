// Question 90: Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and return a boolean result.

// Explain & TIP: isNaN() helps you figure out if something that's supposed to be a number didn't turn out to be a number. It's useful for validating inputs or results of calculations.

// NaN stands for (Not a Number)
function checkingNaN(value: any): boolean {
  return isNaN(value);
}
console.log(checkingNaN("23")); // Output = false
console.log(checkingNaN(11)); // Output = false
console.log(checkingNaN("hello")); // Output = true
console.log(checkingNaN("345")); // Output = false
// This way, we can guard against unexpected non-numeric values in our calculations or inputs.