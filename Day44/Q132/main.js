"use strict";
// Question 132: Discuss the difference between default and named exports in JavaScript modules.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.
var defaultExport_1 = require("./defaultExport"); //a module can only have one default export
console.log((0, defaultExport_1.default)(2, 3)); //Output : 5
var namedExport_1 = require("./namedExport"); //a module can have many named exports
console.log((0, namedExport_1.add)(2, 3)); //Output : 5
console.log((0, namedExport_1.sub)(2, 3)); //Output : -1
