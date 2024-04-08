// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

// Explain & TIP: To replace an item in an array, find its index using .indexOf(), then use that index to set a new value with array bracket notation.


function replacingBananaWithMango(Fruits: string[]): void{
    const index = Fruits.indexOf("Banana")// Finds the index or position of "Banana"
    if (index !== -1) Fruits[index]= "Mango" // Replaces "Banana" with "Mango" if found because .indexof show -1 if the given thing is not found in the given place
}

const Fruits = ["Apple", "Banana", "Orange"]
replacingBananaWithMango(Fruits) //replaces Banana with Mango
console.log(Fruits) //Output = [ 'Apple', 'Mango', 'Orange' ]
