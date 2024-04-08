// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.

// Explain & TIP: parseInt() for whole numbers or parseFloat() for decimals are handy for turning number-like strings into real numbers, allowing you to perform mathematical operations on them.

function conversionOfStringIntoNum(str: string): number {
  return parseInt(str); //parseInt() for turning a number, stored in the form of string, to a real number
}

console.log(conversionOfStringIntoNum("132")); //Output = 132

function conversionOfDecStringIntoNum(str: string): number {
  return parseFloat(str); //parseFloat() for turning a decimal number, stored in the form of string, to a real number
}

console.log(conversionOfDecStringIntoNum("13.7")); //Output = 13.7
