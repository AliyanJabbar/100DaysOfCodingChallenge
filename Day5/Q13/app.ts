// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

export{}
let vehicles: string[]= ["private Jet", "Fortuner", "Hilux", "Corolla"]
vehicles.forEach(vehicle=>{
    console.log(`I would like to own a ${vehicle}`)
})