// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let guests: string[]= ["Arham", "Ahsan", "Rubas",]
console.log("I have a good news, now I have a big table")

// adding new guests
guests.unshift("Rohan")  // The Array. unshift() is used to add one or more elements to the "beginning" of an array and returns the new length of the array.
guests.splice(guests.length / 2, 0, "Rayyan")  // for middle means to assign a member at "middle".
guests.push("Shaheer")  // .push() is a function in JavaScript that adds one or more elements to the "end" of an array and returns the new length of the array.

guests.forEach(guest => {
    console.log(`Hey ${guest}, you are invited to dinner at my house.`)
})
