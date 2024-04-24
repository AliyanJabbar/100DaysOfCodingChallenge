// Question 101: Generate a random integer between 1 and 10.
// Explain & TIP: To generate a random integer within a specific range, you can use Math.random() in combination with Math.floor() or Math.ceil() to ensure the result is an integer.
function generatingRandomInteger() {
    return Math.floor(Math.random() * 10 + 1); //here math.random will generate a random number within our range which is 1-10 here and math.floor will round off the generated number
}
console.log(generatingRandomInteger()); //Output = random integer between 1-10
