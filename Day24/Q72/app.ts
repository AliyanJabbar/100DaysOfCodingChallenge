// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.


{
    let blocklet = "blocklet" //making a variable using let
    const blockconst = "blockconst" // making a variable using const
console.log(blocklet) // it will work fine because it is present inside the block 
console.log(blockconst) // it will also work fine because it is also present inside the block 
}


try { //in try we put something that will cause error
    console.log(blocklet) // this line will cause error because it is used outside the block and let is block scoped variable
} catch (error) { //in catch we put something that define error
    console.log("Cannot find name 'blocklet'.") //this error is coming because we have used variable, made by let, outside the block
}


try { //in try we put something that will cause error
    console.log(blockconst) // this line will cause error because it is used outside the block and const is block scoped variable
} catch (error){ //in catch we put something that define error
console.log("Cannot find name 'blockconst'.") //this error is coming because we have used variable, made by const, outside the block
}
