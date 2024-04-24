// Question 104: Create a function that generates a random hexadecimal color code.

// Explain & TIP: Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits. You can generate each digit randomly and concatenate them into a full color code.

function getRandomHexDecColor(): string {
  let colorCode =
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0");
  return colorCode;
}
console.log(getRandomHexDecColor()); //Output = random hexadecimal color code e.g: #57d61a
// We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long
