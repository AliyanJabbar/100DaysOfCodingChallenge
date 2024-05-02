// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
var _this = this;
// Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.
// Demonstrating 'this' in traditional vs. arrow functions
var obj = {
    value: "Normal Function VS Arrow Function",
    normalFunc: function () {
        console.log("Value is : ".concat(this.value));
    },
    arrowFunc: function () {
        console.log("value is : ".concat(_this.value));
    },
};
obj.normalFunc();
obj.arrowFunc();
