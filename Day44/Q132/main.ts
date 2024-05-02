// Question 132: Discuss the difference between default and named exports in JavaScript modules.

// Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.

import addition from "./defaultExport"; //a module can only have one default export
console.log(addition(2, 3)); //Output : 5

import { add, sub } from "./namedExport"; //a module can have many named exports

console.log(add(2, 3)); //Output : 5
console.log(sub(2, 3)); //Output : -1
