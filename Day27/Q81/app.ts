// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

function objProperties(obj: object) {
  // Loops through each property in the object
  for (let property in obj) console.log(`${property}: ${obj[property]}`);
  // Shows the property name and its value
}
objProperties({ make: "Audi", model: "e-tron GT", year: 2021, color: "Black" });
