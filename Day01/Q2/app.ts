// Question 2: Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”

export {}  // I give it a seperate identity to solve {Cannot redclare block scoped variable}
let name: string ="Hassan Sultan"  // Variables keep data you can use later. 
console.log(`Hello ${name}, would you like to learn some programming today? ` )  // here (``) backtick sign is used to define template literals
// The dollar sign followed by curly braces ${} is used to evaluate and embed expressions dynamically in template literals
