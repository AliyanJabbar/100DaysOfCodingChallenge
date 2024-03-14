// Question 38: Cities: Describing cities with a function.
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("The ".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi"); // here the city will be Karachi.
describe_city("Lahore"); //here the city will be Islamabad.
describe_city("Beijing", "China"); //here the city will be Beijing and country will be China.
