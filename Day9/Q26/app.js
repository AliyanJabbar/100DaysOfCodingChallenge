// Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.

// Version that runs the if block:
var alien_color = "Green";
if (alien_color == "Green") { // ager condition true ho gi( yani let wali value or if wali value same ho gi to) if wala block show hoga.  
    console.log("You just earned 5 points for shooting an alien!");
}
else {
    console.log("You just earned 10 points!");
}
// Version that runs the else block:
alien_color = "red";
if (alien_color == "green") { // ager condition false ho gi to else wala block show hoga.
    console.log("You just earned 5 points for shooting an alien!");
}
else {
    console.log("You just earned 10 points!");
}
