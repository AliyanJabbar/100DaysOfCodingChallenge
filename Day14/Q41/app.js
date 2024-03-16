"use strict";
// Question 41: Magicians: Display magician names from an array.
Object.defineProperty(exports, "__esModule", { value: true });
var magician_names = ["David Blaine", "Dynamo", "Criss Angel"];
function show_magicians(magician_names) {
    magician_names.forEach(function (magician_name) {
        console.log("The ".concat(magician_name, " is a famous magician."));
    });
}
show_magicians(magician_names);
