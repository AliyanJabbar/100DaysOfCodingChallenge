// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function CalculateArea(width, height) {
    return (width * height);
}
var CalculateAreaArrow = function (width, height) { return (width * height); };
console.log(CalculateAreaArrow(2, 3));
