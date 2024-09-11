// Question 144:Show an example of a callback function used to filter an array of numbers.


let arr = [1,2,3,4,5,6,7,8,9,10]

let filteredArr = arr.filter((num)=>num%2 ===0)

console.log("Even",filteredArr)