// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists

// Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.

let checkingForKeyPresence = (countries = new Map<string, string>()): void => {
  {
    //  countries.set("Canada", "Ottawa")
    countries.set("USA", "Washington");
    countries.set("China", "Beijing");
  }

  console.log(countries);

  if (countries.has("Canada")) {
    console.log(`The capital of Canada is ${countries.get("Canada")}`);
  } else {
    console.log("The key Canada does not exist");
  }
};

checkingForKeyPresence();
