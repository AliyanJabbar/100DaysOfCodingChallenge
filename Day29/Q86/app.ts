// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.

// Explain & TIP: The .includes() method lets you check if a string contains a certain piece of text, returning a boolean (true or false).

function checkingTextPresence(sentence: string): boolean {
  return sentence.includes("Javascript");
}
console.log(checkingTextPresence("Javascript is a super set of Typescript")); //it will show true because Javascript is present in our sentence
