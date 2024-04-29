// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

export {}   // This is for giving it a seperate identity and for removing the error (cannot redclare block scoped variable.)
let name: string = "Aliyan Jabbar"
console.log(name.toLowerCase())   // Shows the name in all small letters
console.log(name.toUpperCase())  // Shows the name in ALL BIG LETTERS
console.log(name.charAt(0).toUpperCase()+name.slice(1).toLowerCase())  // Shows the name with the First Letter Big