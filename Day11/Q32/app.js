var current_users = ["user1", "user2", "Admin", "user3", "user4"];
var new_users = ["user5", "user6", "User1", "Admin", "user 7", "user2", "user4", "User2", "admin"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toUpperCase() == newUser.toUpperCase(); })) {
        console.log("".concat(newUser, " is not availiable."));
    }
    else {
        console.log("".concat(newUser, " is availiable."));
    }
});
