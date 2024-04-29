// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
// Explain & TIP: When this is used inside a nested function within an object's method, it does not refer to the object itself but to the global object (in a browser, window). This behavior often requires workarounds like assigning this to another variable in the outer function.
//this will show the behaviour of this in a nested function 
var obj = {
    value: "answer",
    outerFunc: function () {
        var _this = this;
        console.log(this.value); //Output: answer
        var innerFunc = function () {
            console.log(_this.value); // Output: answer // Still accesses myObject's property which is value here due to arrow function capturing 'this' from outer scope
        };
        innerFunc();
    }
};
obj.outerFunc();
// This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.
