// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.
// Explain & TIP: The .map() method transforms each item in an array according to a specific function and returns a new array with the transformed items.
var sentence = ["Programming", "Coding", "Typescript", "Python"];
var lengthOfSentence = sentence.map(function (sentence) { return sentence.length; });
console.log(lengthOfSentence); //Output = [ 11, 6, 10, 6 ]
// Each number in the new array represents the length of the corresponding word in the original array.
