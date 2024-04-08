// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
function compoundAssignmentOperators() {
    var x = 4;
    x += 5; //adding 5 in x
    console.log("After addition x= ".concat(x));
    x -= 2; //subtracting 2 from x
    console.log("After subtraction x= ".concat(x));
    x *= 2; // x multiply by 2
    console.log("After multiplication x= ".concat(x));
    x /= 7; // x divides by 
    console.log("After division x= ".concat(x));
}
compoundAssignmentOperators();
