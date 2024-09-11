// Question 134: Take a JSON string and parse it into a JavaScript object.

// Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. This is particularly useful when dealing with data received as JSON from a web server or API.

import { jsonString } from "../Q133/app";

let JavaScriptOBJ = JSON.parse(jsonString); //converts JSON string into Javascript object

console.log(JavaScriptOBJ); //Output: { name: 'Ali', age: 18, ID: 1324 }
