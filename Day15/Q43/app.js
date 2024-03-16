// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
var magicians = ["David Blaine", "Dynamo", "Criss Angel"];
function show_magicians(magician_names) {
    magician_names.forEach(function (magician_name) {
        console.log("The ".concat(magician_name, " is a famous magician."));
    });
}
function make_great(magicians) {
    var great_magicians = [];
    magicians.forEach(function (magician) {
        great_magicians.push("".concat(magician, " ,the great,"));
    });
    return great_magicians;
}
var great_magicians = make_great(magicians.slice());
console.log("original magicians");
show_magicians(magicians);
console.log("Great magicians");
show_magicians(great_magicians);
