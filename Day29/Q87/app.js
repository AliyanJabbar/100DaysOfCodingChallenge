// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.
// Explain & TIP: .substring() can be used to get a specific part of a string, by specifying the start and end positions.
function extractingSubstring(sentence) {
    return sentence.substring(0, 10);
}
console.log(extractingSubstring("I love to code in Typescript!")); //it will show first 10 charactes including spaces in a sentence
//Output: 
