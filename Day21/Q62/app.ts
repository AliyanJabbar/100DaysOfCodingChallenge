// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// Creating a blueprint (interface) for student information
interface student {
  name: string;
  age: number;
  classes: string[];
}

// Filling in the blueprint with an example student
let studentDetails: student = {
  name: "Ali",
  age: 19,
  classes: ["Physics", "coding", "Typescript"],
};

// Showing the student's information
console.log(studentDetails);
// We're using the blueprint to make sure our student has a name, age, and list of classes.
