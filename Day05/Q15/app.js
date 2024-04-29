var guests = ["Arham", "Ahsan", "Hassan", "Rubas"];
guests.forEach(function (guest) {
    console.log("I would like to invite ".concat(guest, " on dinner"));
});
var unabletocome = "Arham";
console.log("".concat(unabletocome, " forget to attend the dinner party at my house"));
// Replace the guest
var newGuest = "Shaheer";
guests[guests.indexOf(unabletocome)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("Hey dear ".concat(guest, ", would you like to join me on dinner"));
});
