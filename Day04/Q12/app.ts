// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.


export {}
let names: string[] = ["Arham", "Ahsan", "Rubas"]

for (let name of names){
console.log(`Hey ${name}, would you like to learn some typing today?`)
}


// names.forEach(name=>{
//     console.log(`Hey ${name}, would you like to learn some typing today?`)
// })
// this will give the same function as above one 
