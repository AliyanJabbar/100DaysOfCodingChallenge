// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.



// This function divides two numbers and finds the quotient and remainder
function QuotientAndRemainder(dividend:number, divisor:number):{quotient: number, remainder:number}{
    // Calculates the quotient and remainder
    let quotient= Math.floor(dividend/divisor)
    let remainder= dividend % divisor
     // Returns both in an object
    return {quotient, remainder} 
}

console.log(QuotientAndRemainder(14, 3)) //it shows result { quotient: 4, remainder: 2 }
// It shows how many times 3 goes into 14, and what's left over.