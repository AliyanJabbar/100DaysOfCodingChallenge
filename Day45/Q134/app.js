"use strict";
// Question 134: Take a JSON string and parse it into a JavaScript object.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly useful when dealing with data received as JSON from a web server or API.
var app_1 = require("../Q133/app");
var JavaScriptOBJ = JSON.parse(app_1.jsonString); //converts JSON string into Javascript object
console.log(JavaScriptOBJ);
