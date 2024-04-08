//Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
// Following is the general syntax for Try Catch Blocks in Typescript :
// try {
//   // Here we will list all variables or methods that tend to cause errors or exceptions later on...
// } catch (error) {
//   // do something with the error variable... manage it or print it as needed...
// }
var user = "Ali";
user = "Zain"; // Works fine because `let` allows reassignment
console.log(user); //it will show "Zain"
var age = 18;
try { // in try we put something which causes error
    age = 22; //this line will cause error
}
catch (error) { // in catch (error) we do something which correct the error
    console.log("Cannot assign to 'age' because it is a constant.");
}
