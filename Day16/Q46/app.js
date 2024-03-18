// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
var laptop = {
    make: "lenovo",
    series: "ThinkPad",
    year: 2022,
    describe: function () {
        console.log("This laptop is make by ".concat(this.make, " in year ").concat(this.year, " of series ").concat(this.series, "."));
    },
};
// laptop.describe();
