// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists
// Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.
var checkingForKeyPresence = function (countries) {
    if (countries === void 0) { countries = new Map(); }
    {
        //  countries.set("Canada", "Ottawa")
        countries.set("USA", "Washington");
        countries.set("China", "Beijing");
    }
    console.log(countries);
    if (countries.has("Canada")) {
        console.log("The capital of Canada is ".concat(countries.get("Canada")));
    }
    else {
        console.log("The key Canada does not exist");
    }
};
checkingForKeyPresence();
