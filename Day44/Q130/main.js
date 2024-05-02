"use strict";
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: In modern JavaScript development, modules allow you to divide your code into separate files. This makes your code more organized and maintainable. You can export functions, objects, or primitives from one file and import them into another.
var file1_1 = require("./file1");
console.log((0, file1_1.average)(3, 4, 5));
