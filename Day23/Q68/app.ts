// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.


function MultiplyingDecimals (n1:number, n2:number):number{
    return Math.round((n1 * n2)*100)/100 //here math.round is for rounding numbers which are in decimals and *100 and /100 is for rounding the result to two decimal places. 
}

console.log(MultiplyingDecimals(0.1, 0.2))// Shows 0.02
// After multiplying, we round to make the result easier to read.