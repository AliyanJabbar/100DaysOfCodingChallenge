// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

// Defines a function that accepts multiple hobbies as arguments
function hobbies(...hobbies: string[]) {
  // Loops through each hobby in the array
  hobbies.forEach((hobby) => {
    // Logs a statement for each hobby
    console.log(`I am enjoying ${hobby} as my hobby.`);
  });
}
// Calls the function with three hobbies
hobbies("cricket", "Badminton", "Coding");
