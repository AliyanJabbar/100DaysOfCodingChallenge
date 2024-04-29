// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

let guests:string[]= ["Arham", "Ahsan", "Hassan", "Rubas"]
guests.forEach(guest=> {
    console.log(`I would like to invite ${guest} on dinner`)
})

let unabletocome= "Arham"
console.log(`${unabletocome} cannot attend the dinner party at my house`)

// Replace the guest
let newGuest="Shaheer"
guests[guests.indexOf(unabletocome)]= newGuest

// New invitations
guests.forEach(guest => {
    console.log(`Hey dear ${guest}, would you like to join me on dinner`)
})
