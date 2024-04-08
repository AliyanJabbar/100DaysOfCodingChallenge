// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

// This program calculates the average of all scores given
function AverageScore(...Scores: number[]): number {
  // Adds all scores together and divides by the number of scores
  let total = Scores.reduce((sum, Score) => sum + Score);
  return total / Scores.length;
}

// Example: finding the average of four scores
console.log(AverageScore(25, 35, 45, 55, 65, 75, 85)); //average = 55 as predicted
// We add up all the scores, then divide by how many there are.
