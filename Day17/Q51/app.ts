// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.


function CalculateArea (width: number, height: number):number{
    return (width * height)
}
let CalculateAreaArrow = (width:number, height:number): number=> (width * height)


console.log(CalculateAreaArrow(2,3))
