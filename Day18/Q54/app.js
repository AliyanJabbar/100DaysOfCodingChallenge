// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
// A way to make a flexible list
function createobjectwithdynamickey(key, value) {
    var dynamicobject = {};
    // Setting up a section in the list with a changeable name
    dynamicobject[key] = value;
    return dynamicobject;
}
// Using the flexible list setup for a user's preference
var userpreference = createobjectwithdynamickey("theme", "dark");
console.log(userpreference);
