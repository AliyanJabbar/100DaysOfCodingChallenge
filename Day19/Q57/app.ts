// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.

// A list of grades
let Grades= [75, 85, 95, 99, 88, 77]

// Calculates the average grade
let AverageGrade = Grades.reduce((total, Grade)=> total + Grade, 0)/ Grades.length

// Shows the average grade
console.log(AverageGrade) // here our result is coming 86.5, which is the average.
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.
