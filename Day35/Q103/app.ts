// Question 103: Write a function that returns a random boolean value, true or false.

// Explain & TIP: Generating a random boolean is a simple but useful trick. You can use Math.random() and check if it's above or below 0.5 to decide between true or false.

function returningBoolean(num: any): boolean {
  return Math.random() > num; // Returns true if the random number is greater than 0.5
}
console.log(returningBoolean(0.5)); //Output = either true or false based on condition