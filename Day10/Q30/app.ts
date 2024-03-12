// Question 30: Hello Admin: Greet users differently, especially 'admin'.


let usernames: string[] = ["admin", "user1", "user2", "user3"]

// usernames.forEach ( username => {
//     if (username == "admin") {
//         console.log("Hello admin! You are doing great.")
//     } else {
//         console.log(`Hello ${username}, Thanks for joinig me on my project.`)
//     }
// })


for (let username of usernames) {
    if (username == "admin") {
        console.log("Hello admin! Thanks for your guidance.")
    } else {
          console.log(`Hello ${username}, Thanks for helping me in my project.`)
    }
}
//This will also give the same result.