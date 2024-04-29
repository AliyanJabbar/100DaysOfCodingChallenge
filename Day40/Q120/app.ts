// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.

// Explain & TIP: The for...of loop is a modern loop introduced in ES6, designed to iterate over iterable objects like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.

let famousMovies = [
  "The Pursuit of Happyness",
  "Good Will Hunting",
  "Life of Pi",
  "Rocky",
  "The Social Network",
];

for (let famousMovie of famousMovies) {
  console.log(famousMovie);
}
