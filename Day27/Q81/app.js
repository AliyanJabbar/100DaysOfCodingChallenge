// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function objProperties(obj) {
    for (var property in obj)
        console.log("".concat(property, ": ").concat(obj[property]));
}
objProperties({ make: "Audi", model: "e-tron GT", year: 2021, color: "Black" });
