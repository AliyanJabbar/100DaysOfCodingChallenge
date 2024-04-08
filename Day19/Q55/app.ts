// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.

//making a list of numbers
let Numbers = [2, 4, 6, 8, 10]

// making each number double and storing it in a variable name DoubledNumbers
let DoubledNumbers = Numbers.map(Number => Number * 2)

//show doubled numbers
console.log(DoubledNumbers)