// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
// Explain & TIP: You can get the current hour using the Date object and its getHours() method. Remember, hours are in 24-hour format, so 12 PM is 12.
var date = new Date;
var GoodMorning = function () {
    if (date.getHours() < 12) {
        console.log("Good Morning"); //Output = Good Morning  if current time is before 12 pm
    }
    else {
        console.log("You are late");
    } // I have written it to find if function is working properly
};
GoodMorning();
