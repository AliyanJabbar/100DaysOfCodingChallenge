// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by the provided function.

function filterNumsGreaterThanTen (numbers: number[]):number[]{
    return numbers.filter(numbers => numbers > 10)
}

const numbers: number[] = [5, 10, 15, 20, 25, 30]
console.log(filterNumsGreaterThanTen(numbers)) //Output = [ 15, 20, 25, 30 ]
// The new array contains only the numbers that are greater than 10.