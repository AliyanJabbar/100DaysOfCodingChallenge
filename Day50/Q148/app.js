// Question 148:Demonstrate the use of the setTimeout() function to execute code after a delay.
function demo() {
    console.log("start");
    setTimeout(function () {
        console.log("delay");
    }, 1000);
    console.log("end");
}
demo();
