// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".


// This function mixes a text and a number into one text
function combiningStringAndNumber (text: string, number: number):string{
    // Joins the text and number into a single text
 return text + number //In JavaScript, the + operator can add numbers together or join strings. Mixing a string with a number changes the number into a string for the joining.

}
// Trying it out with "Age: " and 18
console.log(combiningStringAndNumber("age: ", 18)) // Shows "Age: 18"
// Here, we put together the text and number.
