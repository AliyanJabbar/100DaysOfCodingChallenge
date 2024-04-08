// Question 92: Write a function to remove the last element from an array and return the removed element.

// Explain & TIP: The .pop() method removes the last element from an array and returns that element. This can be useful when you need to work with the removed item.


function removingLastElement<T> (array: T[]):T|undefined{
    return array.pop()
}
let carBrands = ["Ferrari", "Toyota", "Audi"]
console.log(removingLastElement(carBrands)) //Output = Audi
//here, we take out the last carBrand and return its value.

console.log(carBrands) //Output = [ 'Ferrari', 'Toyota' ]
// Here, we take out the last carBrand and show the updated list.