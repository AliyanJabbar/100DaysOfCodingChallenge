"use strict";
// Question 133: Write a JavaScript object and convert it into a JSON string.
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonString = void 0;
// Explain & TIP: JSON (JavaScript Object Notation) is a lightweight data-interchange format. It's easy for humans to read and write and for machines to parse and generate. Converting a JavaScript object into a JSON string can be done using JSON.stringify().
var person = {
    name: "Ali",
    age: 18,
    ID: 1324,
};
exports.jsonString = JSON.stringify(person); // Converts the object into a JSON string and assigining it to a variable named "jsonString"
console.log(exports.jsonString); // Output : {"name":"Ali","age":18,"ID":1324}
