// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
// Explain & TIP: You can add new properties to an object or change existing ones after the object is created. This flexibility allows objects to be dynamically updated as needed.
var car = {
    make: "Audi",
    model: "e-tron GT",
    year: 2020
};
car.color = "Black"; //here we add a new property "color" //the error coming in adding a new property can be neglect in javascript
car.year = 2021; // here we update the given property "year"
console.log(car); // here it will show that our car is black and its year is updated to 2021.
