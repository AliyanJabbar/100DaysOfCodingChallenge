// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

let laptops =[ {
  make: "Lenovo",
  model: "ThinkPad",
  year: "2022",
},
{
    make:"HP",
    model:"EliteBook",
    year:"2021"
},
{
    make:"Apple",
    model:"MacBook",
    year:"2023"
}
]
let [laptop1 , laptop2, laptop3]=  laptops
console.log(laptop1)
console.log(laptop2)
console.log(laptop3)
