// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
// Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of the other case labels match the expression's value.
function defaultCase(num) {
    switch (num) {
        case 1:
            console.log("BMW");
            break;
        case 2:
            console.log("Ford");
            break;
        case 3:
            console.log("Tesla");
            break;
        case 4:
            console.log("Audi");
            break;
        default:
            console.log("Toyota");
    }
}
defaultCase(5); //output : Toyota
defaultCase(4); //output : Audi
