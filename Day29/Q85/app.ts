// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.

// Explain & TIP: Use .indexOf() to find where a certain piece of text starts within a larger string. If the text isn't found, this method returns -1.

function findingPosition(sentence: string):number {
  return sentence.indexOf("code");
}
console.log(findingPosition("He suggests me to code everyday for revision.")); //it is locating the number at which the word "code" is present
