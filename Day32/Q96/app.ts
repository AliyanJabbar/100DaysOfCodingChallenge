// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

// Explain & TIP: The .reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

function calculatingSum (numbers: number[]):number{
    return numbers.reduce((accumaulator, current)=> accumaulator + current , 0)
}

 const numbers:number[]=[5, 2, 7, 4, 1, 0, 1]
 console.log(calculatingSum(numbers)) //Output = 20
 // It adds up all the numbers in the array, resulting in a single sum value.