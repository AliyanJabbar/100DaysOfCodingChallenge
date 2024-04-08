// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var UserProfile = function () {
    var name = "Ali";
    var age = 18;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        },
    };
}(); // here I give "()" for removing error from .displayInfo
UserProfile.displayInfo();
