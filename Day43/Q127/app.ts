// Question 127: Convert a traditional function expression to an arrow function.

// Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods.

let mainFunc = function (a, b) {
  //Functions stored in variables do not need function names. They are always invoked (called) using the variable name
  return a + b; //returning "a + b" in normal function
};

let arrowFunc = (a, b) => a + b; //doing same work in arrow function

console.log(arrowFunc(9, 2)); //Output : 11
console.log(mainFunc(9, 2)); //Output : 11
