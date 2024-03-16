// Question 42: Great Magicians: Add "the Great" to magician names.
var magicians = ["Alice", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var magicianNames = ["David Blaine", "Dynamo", "Criss Angel"];
magicianNames.forEach(function (magicianName) {
});
function make_great(magicianNames) {
    for (var i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = magicianNames[i] + "The Great";
    }
}
make_great(magicians);
show_magicians(magicians);
