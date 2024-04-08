// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

let UserProfile = (function () {
  let name = "Ali";
  let age = 18;

  return {
    displayInfo: function () {
      console.log(`Name: ${name}, Age: ${age}`);
    },
  };
})(); // here I give "()" for removing error from .displayInfo

UserProfile.displayInfo();
