// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
// Explain & TIP: Age groups can typically be categorized by specific ranges. For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.
var categorizingAgeGroup = function (age) {
    if (age <= 13) {
        console.log("Age group = Child");
    }
    else if (age > 13 && age <= 19) {
        console.log("Age group = Teenager");
    }
    else if (age >= 20) {
        console.log("Age group = Adult");
    }
    else {
        console.log("enter valid age");
    }
};
categorizingAgeGroup(16); //Output = 
categorizingAgeGroup(70); //Output = 
