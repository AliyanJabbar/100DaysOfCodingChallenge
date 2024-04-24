// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

// Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.

let Students = new Map<number, string>();
{
  Students.set(10000, "Ali");
  Students.set(20000, "Bilal");
  Students.set(30000, "Asharib");
}
Students.forEach((name, ID) => {
  console.log(`Student's ID is: ${ID} and Student's name is: ${name}`);
});
