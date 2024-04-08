// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.


function DefaultParameters (user: string = "anonymous"){ // here we are giving default parameter, which is anonymous here
    console.log(`Hello ${user}, how are you.`)
}
DefaultParameters() //it will print message with default parameter, which is anonymous here
DefaultParameters("Ali") // it will print message with given argument