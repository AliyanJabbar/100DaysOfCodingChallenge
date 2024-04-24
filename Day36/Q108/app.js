// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
// Explain & TIP: To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing.
function comparingStrings(name1, name2) {
    var comparison = name1.toUpperCase() == name2.toUpperCase();
    return comparison;
}
console.log(comparingStrings("ali", "Ali")); //Output = true
console.log(comparingStrings("rubas", "Ahsan")); //Output = false
