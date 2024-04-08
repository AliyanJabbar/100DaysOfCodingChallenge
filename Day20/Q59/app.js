// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function makeAdder(valuetoadd) {
    return function (number) {
        return number + valuetoadd;
    };
}
var addfive = makeAdder(5);
console.log(addfive(10));
