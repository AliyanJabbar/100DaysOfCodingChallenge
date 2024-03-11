var usernames = ["admin", "user1", "user2", "user3"];
// usernames.forEach ( username => {
//     if (username == "admin") {
//         console.log("Hello admin! You are doing great.")
//     } else {
//         console.log(`Hello ${username}, Thanks for joinig me on my project.`)
//     }
// })
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username == "admin") {
        console.log("Hello admin! Thanks for your guidance.");
    }
    else {
        console.log("Hello ".concat(username, ", Thanks for helping me in my project."));
    }
}
