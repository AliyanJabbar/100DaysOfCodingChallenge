// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.


function swapValues () {
    let a = 5 , b = 10
    console.log(`Values before swap: a= ${a} and b= ${b}`)


    let c= a 
    a = b 
    b = c 
    console.log (`Values after swap: a= ${a} and b= ${b}`)
}
swapValues()