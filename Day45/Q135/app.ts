// Question 135: Explain how you can format a JSON string with proper indentation for readability.

// Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string. Adding an indent level as the third argument beautifies the output, making it more readable.

let person = {
  name: "Ali",
  age: 18,
  ID: 1324,
};

let jsonString = JSON.stringify(person, null, 5); //hover on stringify for more details //here I have give 5 which means 5 gapes or whitespaces before properties of object

console.log(jsonString);
/* Output: 
{
    "name": "Ali",
    "age": 18,
    "ID": 1324
}*/
