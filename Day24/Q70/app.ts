// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.

function printNumbersUsingLet(){ // here value in the {} is in the block scoped
for (let i = 1 ; i<=5; i++)
{ // Uses `let` for loop variable `i`
console.log(i)
}
}
// If I print i here, outside the loop, like console.log(i) than it will not print because it is defined with let which is block scoped variable 
printNumbersUsingLet()
// This shows that `let` limits `i` to the loop, preventing errors from using `i` where it's not intended.



// The syntax of the ''for' loop in Typescript is the same as in other programming languages:
// for (starting value, condition, step increment)