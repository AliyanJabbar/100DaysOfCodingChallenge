// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

export { }
let vehicles = ["Bugatti", "Mercedes", "Ferrari"]

// Tests whether an item is in an Array
console.log("Is 'honda' in vehicles?")
console.log(vehicles.includes('honda')) // false 

console.log("Is 'Ferrari' in the vehicles?")
console.log(vehicles.includes("Ferrari"))  // true

// Tests whether an item is not in an Array
console.log("Is 'honda' not in vehicles?")
console.log(!vehicles.includes("honda")) // true 

console.log("Is Ferrari not in vehicles?")
console.log(!vehicles.includes("Ferrari")) // false


// Equality With Strings
console.log("Testing Equality With Strings:")
console.log("mango" == "mango") //true
console.log("mango" == "Mango") //false


// Using the lower case function and the upper case function 
console.log("Testing with lower case and upper case:")
console.log("mango" == "mango") //true
console.log("Mango".toLowerCase() == "mango") //true
console.log("mango".toUpperCase() == "MANGO") //true


// Numerical Test 
console.log("Numerical Test:")
console.log(10 > 7) //true
console.log(5 < 3)  //false


// Tests using "and" and "or" operators.
console.log("tests with 'and' and 'or':")
console.log(false && true) //false
console.log(false || true) //true