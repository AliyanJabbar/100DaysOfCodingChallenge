// Question 92: Write a function to remove the last element from an array and return the removed element.
// Explain & TIP: The .pop() method removes the last element from an array and returns that element. This can be useful when you need to work with the removed item.
function removingLastElement(array) {
    return array.pop();
}
var carBrands = ["Ferrari", "Toyota", "Audi"];
console.log(removingLastElement(carBrands)); //Output = Audi
console.log(carBrands); //Output = 
