// array index error: This typically occurs when a program tries to access an element at an index that is less than 0 or greater than or equal to the length of the array.
var friends = ["Arham", "Ahsan", "Rubas", "Shaheer"]; // Here Arham is on the position "0" and shaheer is on the position "3".
console.log(friends[4]); // Intentional error: Arrays are zero-indexed, so index 4 is out of bounds.
friends[2] = "Rubas"; // Correcting the error by accessing a valid index.
console.log(friends[2]);
