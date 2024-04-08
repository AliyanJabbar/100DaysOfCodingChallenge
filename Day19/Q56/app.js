// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
//making a lists or an array containing different types of data
var MixedTypesList = ["Ali", 35, "true", false, "Rohan", 11, true, "Ahsan"];
//it will filter only strings
var stringLists = MixedTypesList.filter(function (item) { return typeof item === "string"; });
//it will filter only strings
var NumberLists = MixedTypesList.filter(function (item) { return typeof item === "number"; });
//it will filter only strings
var BooleanLists = MixedTypesList.filter(function (item) { return typeof item === "boolean"; });
//it will print all strings
console.log(stringLists);
//it will print all numbers
console.log(NumberLists);
//it will print all boolean
console.log(BooleanLists);
