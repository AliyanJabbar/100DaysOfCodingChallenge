// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// This program calculates the average of all scores given
function AverageScore() {
    var Scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Scores[_i] = arguments[_i];
    }
    // Adds all scores together and divides by the number of scores
    var total = Scores.reduce(function (sum, Score) { return sum + Score; });
    return total / Scores.length;
}
// Example: finding the average of four scores
console.log(AverageScore(25, 35, 45, 55, 65, 75, 85));
// We add up all the scores, then divide by how many there are.
