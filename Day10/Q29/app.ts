// Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.

let favorite_fruit: string[] = ["Mango", "Apple", "Strawberry"]
if (favorite_fruit.includes('Banana')) {
    console.log("You really like to eat Bananas.")
} else {
    console.log("You really don't like to eat Bananas.") // This will show because Banana is not present in our array.
}

if (favorite_fruit.includes("Apple")) {
    console.log("You really like to eat Apples.") // This will show because Apple is present in our array.
} else {
    console.log("You really don't like to eat Apples.")
}

if (favorite_fruit.includes("Mango")) {
    console.log("You really like to eat Mangoes.")  // This will show because Mango is present in our array.
} else {
    console.log("You really not like to eat Mangoes.")
} 

if (favorite_fruit.includes ("Grapes")) {
    console.log("You really like to eat Grapes.")
} else {
    console.log("You really not like to eat Grapes.")  // This will show because Grapes is not present in our array.
}
