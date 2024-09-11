// Question 136: Use console.log() to debug and track the value of a variable inside a loop.
// Explain & TIP: console.log() is an invaluable tool for developers to monitor the values of variables, the flow of execution, and to understand the state of their program at various points in time, especially within loops where values change with each iteration.
for (var i = 1; i <= 5; i++) // set numbers from 1 to 5 
 {
    console.log("Iteration ".concat(i), "i value:", i);
    /*Output:
      i value: 1
  i value: 2
  i value: 3
  i value: 4
  i value: 5*/
}
