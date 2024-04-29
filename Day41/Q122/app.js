// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
// Explain & TIP: The break statement terminates the loop immediately. This is useful for stopping a loop when a certain condition is met, even if the loop's original termination condition hasn't been reached yet.
var numbers = 10;
while (numbers > 0) {
    if (numbers === 5) {
        break; //it breaks the loop when reaches at 5
    }
    console.log(numbers); //logs numbers from 10-6
    numbers--; // decrease 1 and log continuosly 
}
