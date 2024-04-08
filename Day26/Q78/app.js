// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
// JavaScript allows you to create functions in two ways: declarations that name the function and can be called before they're defined, and expressions that are stored in variables and are called using the variable name.
// 1. function Declaration
function cubingDeclaration(num1) {
    return num1 * num1 * num1;
}
console.log(cubingDeclaration(2));
// 2. function expression
var cubingExpression = function cubingExpression(num2) {
    return num2 * num2 * num2;
};
console.log(cubingExpression(3));
