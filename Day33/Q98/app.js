// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.
// Explain & TIP: To find the difference between two dates, you can subtract one Date object from another, which gives you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.
function daysUntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year
    var difference = newYear.getTime() - today.getTime(); // Difference in milliseconds
    var days = Math.ceil(difference / (1000 * 60 * 60 * 24)); // Converting milliseconds to days  // In JavaScript, the Math. ceil() function returns the smallest integer greater than or equal to a given number. For example, if you have the number 3.14 , Math. ceil(3.14) will return 4 .
    return days;
}
console.log("".concat(daysUntilNewYear(), " days until new year."));
