var guests = ["Aliyan", "Arham", "Ahsan", "Rubas", "Shaheer"];
console.log("I have a bad news, now I can only invite two guests on dinner at my house");
while (guests.length > 2) {
    var removedguests = guests.pop();
    console.log("sorry! ".concat(removedguests, ", I can not invite you on dinner at my house."));
}
guests.forEach(function (guest) {
    console.log("Hey ".concat(guest, ", you are still invited on dinner at my house."));
});
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
