var age = 30;
if (age < 1) {
    console.log("The person is an infant.");
}
else if (age < 5) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else {
    console.log("The person is not a kid."); // This will work because the statement is not matching to the given one and the if block will not work but else block will definitely work.
}
if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) { // This will work because it matches to our given number that is age.
    console.log("The person is an adult."); // Here if block will work.
}
else {
    console.log("The person is an elder.");
}
if (age = 30) { // This will also work because it matches to our given number that is age.
    console.log("The person is a man."); // Here if block will work.
}
else {
    "The person is not a man.";
}
