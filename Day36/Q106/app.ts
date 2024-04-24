// Question 106: Determine if a given year is a leap year using comparison operators.

// Explain & TIP: A leap year is divisible by 4 but not by 100 unless it's also divisible by 400. This rule helps align our calendar years with the Earth's orbital period.

function checkingLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0; //% is use for remainder and it is named as modulo
}
console.log(checkingLeapYear(2024)); //output = true
console.log(checkingLeapYear(1994)); //output = false
console.log(checkingLeapYear(1840)); //output = true
console.log(checkingLeapYear(800)); //output = true
// By using comparison operators, we can easily determine if a year is a leap year or not.

// There were 12 century years from 1 AD to 1200 AD: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200. Of these, only 400, 800, and 1200 are divisible by 400. This means only three century years were leap years
