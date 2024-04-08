// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
var Numbers = [2, 4, 6, 8, 10];
var DoubledNumbers = Numbers.map(function (Number) { return Number * 2; });
console.log(DoubledNumbers);
