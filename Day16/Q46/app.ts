// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

let laptop = {  //"{}" means object
  make: "lenovo",
  series: "ThinkPad",
  year: 2022,
    describe: function ()
  {
    console.log(
      `This laptop is make by ${this.make} in year ${this.year} of series ${this.series}.`
    );
  },
};
laptop.describe();
