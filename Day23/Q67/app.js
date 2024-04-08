// Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
function AddingStringAndNumbers(n1string, n2) {
    return Number(n1string) + n2;
}
console.log(AddingStringAndNumbers("20", 5)); // it will show result 25 by adding "20" and 5
