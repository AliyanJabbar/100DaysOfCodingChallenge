// Question 18: Seeing the World: Think of at least five places you’d like to visit.

export {}
let places:string[]= ["America", "Canada", "Sweden", "Japan", "China"]

console.log("Original Order:", places)

console.log("Alphabetical Order:", [...places] .sort() ) // [...places].sort for alphabetical order 

console.log("Reverse Alphabetical Order:", [...places].sort().reverse())

places.reverse()  // we can also write it in the console.log() 
console.log("Reversed Order:", places)

places.reverse()
console.log("Original Order:", places) // it gives original because it reverse the previous one which is already reverse 

places.sort()
console.log("Alphabetical Order:", places)

places.reverse()
console.log("Reverse Alphabetical Order:", places)   // same for here as it reverses the previous one



