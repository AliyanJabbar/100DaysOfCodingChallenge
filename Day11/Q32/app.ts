// Question 32: Checking Usernames: Ensure uniqueness in usernames.

let current_users :string[] = ["user1", "user2","Admin", "user3", "user4"]
let new_users :string[] = ["user5", "user6", "User1", "Admin", "user 7", "user2", "user4", "User2", "admin"]
new_users.forEach(newUser => {
    if(
        current_users.some (
            ( currentUser ) => currentUser.toUpperCase() == newUser.toUpperCase()
        )
    ) {
        console.log(`${newUser} is not availiable.`)
}else {console.log(`${newUser} is availiable.`)}
})