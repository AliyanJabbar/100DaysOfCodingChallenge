// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.

// Explain & TIP: The await operator is used to wait for a Promise to settle. It can only be used inside an async function. Using await makes asynchronous code look and behave a little more like synchronous code, which can make it easier to understand and debug.

// Definitions of asynchronous. adjective. not synchronous; not occurring or existing at the same time or having the same period or phase.

// What is an asynchronous function?
// An asynchronous function is any function that delivers its result asynchronously – for example, a callback-based function or a Promise-based function. An async function is defined via special syntax, involving the keywords async and await . It is also called async/await due to these two keywords.

// Await is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result.

//fetch means return

// How does await work in TypeScript?
// In the fetchData function above, the await keyword is used to pause the execution of the function until the Promise returned by fetch() is resolved or rejected. If the Promise is fulfilled, the resolved value is returned. If the Promise is rejected, an error is thrown


// // Example use of the 'await' reserved word in asynchronous JavaScript
function fetchSomething(a:number, b:number):number{
    return a+b // Assuming fetchSomething returns a Promise but we are returning only addition of two numbers
}

async function fetchData() {
  const Data = await fetchSomething(9,2) //calling above function named "fetchSomething"
  console.log(Data)
 // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
}
fetchData()
  console.log(
    "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
  )
//   This demonstrates how 'await' improves readability and flow in asynchronous code.
