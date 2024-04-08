// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
var Grades = [75, 85, 95, 99, 88, 77];
var AverageGrade = Grades.reduce(function (total, Grade) { return total + Grade; }, 0) / Grades.length;
console.log(AverageGrade);
