// Question 102: Calculate and log the absolute difference between the number -5 and 5.

// Explain & TIP: The Math.abs() function returns the absolute value of a number, which is useful for finding the magnitude of a difference without regard to direction.

// finding difference "-"
const absDiff = Math.abs(-5 - +5);
console.log(absDiff); //Output= 10

//math.abs ignores the sign, we can prove it by the following code
const absDiffIgnoresSign = Math.abs(-6 + 5);
console.log(absDiffIgnoresSign); //Output= 1
//the answer is -1 but it is neglecting the sign and showing 1