// Question 102: Calculate and log the absolute difference between the number -5 and 5.
// Explain & TIP: The Math.abs() function returns the absolute value of a number, which is useful for finding the magnitude of a difference without regard to direction.
// finding difference "-"
var absDiff = Math.abs(-5 - +5);
console.log(absDiff); //Output= 10
//math.abs ignores the sign, we can prove it by the following code
var absDiffIgnoresSign = Math.abs(-6 + 5);
console.log(absDiffIgnoresSign); //Output= 10
