// Question 144:Show an example of a callback function used to filter an array of numbers.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filteredArr = arr.filter(function (num) { return num % 2 === 0; });
console.log("Even", filteredArr);
