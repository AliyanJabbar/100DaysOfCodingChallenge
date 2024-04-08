// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.
function filterNumsGreaterThanTen(numbers) {
    return numbers.filter(function (numbers) { return numbers > 10; });
}
var numbers = [5, 10, 15, 20, 25, 30];
console.log(filterNumsGreaterThanTen(numbers));
