// Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.

export {}
let names : string[] = ["Rubas", "Ahsan", "Arham",]
for (let i=0; i< names.length; i++ ) {
    console.log(names[i])
}
// names.forEach(name=>{
//     console.log(name)
// })
// It will result in the same work as the above one 


// for (let name of names){
//     console.log(name)
// }
// This will also do the same function 