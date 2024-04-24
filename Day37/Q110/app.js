// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
// Explain & TIP: A common grading system assigns letter grades based on score ranges. You can use an if-else-if chain to determine the grade.
var assigningGrades = function (marks) {
    if (marks > 80 && marks < 100) {
        console.log("Your grade is A+");
    }
    else if (marks > 70 && marks < 79.99) {
        console.log("Your grade is A");
    }
    else if (marks > 60 && marks < 69.99) {
        console.log("Your grade is B");
    }
    else if (marks > 50 && marks < 59.99) {
        console.log("Your grade is C");
    }
    else if (marks > 40 && marks < 49.99) {
        console.log("Your grade is D");
    }
    else if (marks > 33 && marks < 39.99) {
        console.log("Your grade is E");
    }
    else {
        console.log("Enter valid marks");
    }
};
assigningGrades(93.65);
