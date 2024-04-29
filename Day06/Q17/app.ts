// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

let guests: string[]=["Aliyan","Arham", "Ahsan", "Rubas", "Shaheer"] 
console.log("I have a bad news, now I can only invite two guests on dinner at my house")

while (guests.length >2) {
    let removedguests = guests.pop()
    console.log(`sorry! ${removedguests}, I can not invite you on dinner at my house.`)
}

guests.forEach(guest => {
    console.log(`Hey ${guest}, you are still invited on dinner at my house.`)
})

guests.splice(0, guests.length)
    console.log(guests)  // Shows an empty list
