// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.

// Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.

// Demonstrating 'this' in traditional vs. arrow functions
let obj = {
  value: "Normal Function VS Arrow Function",
  normalFunc: function () {
    console.log(`Value is : ${this.value}`);
  },

  arrowFunc: () => {
    console.log(`value is : ${this.value}`);
  },
};

obj.normalFunc(); //Output : Value is : Normal Function VS Arrow Function
obj.arrowFunc(); //Output : value is : undefined
