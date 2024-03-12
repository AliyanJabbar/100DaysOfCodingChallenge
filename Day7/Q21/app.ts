// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let book: {title:string; author:string; yearPublished:number } = {
    title:"Rich Dad Poor Dad", 
    author: "Robert Kiyosaki",
    yearPublished: 1997  // the number is assign without inverted commas("")
}
console.log(`Book Info: ${book.title}, by ${book.author}, published in ${book.yearPublished}`)

// Above is the example of Typescript Object