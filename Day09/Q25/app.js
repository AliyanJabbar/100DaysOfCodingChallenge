// Version that passes:
var alien_color = "Yellow";
if (alien_color == "Yellow") { // ager condition true hai to console.log() ki value show ho gi
    console.log("You just earned 5 points!");
}
// Version that fails (no output):
alien_color = "red";
if (alien_color == "green") { // ager condition false hai to console.log() ki value show nhi ho gi
    console.log("You just earned 5 points!");
    //No output because the condition is false.
}
