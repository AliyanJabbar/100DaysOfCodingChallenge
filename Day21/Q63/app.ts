// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

// Creating a custom type (type alias) for shapes that could be circles or rectangles

type shape = {
  kind: "circle" | "rectangle";
  radius?: number; //only for circles
  width?: number; //only for rectangle
  hieght?: number; //only for rectangle
};

// Describing a circle using our Shape type
let circle: shape = {
  kind: "circle",
  radius: 5,
};

//Describing a rectangle using our shape type
let rectangle: shape = {
  kind: "rectangle",
  width: 20,
  hieght: 10,
};

console.log(rectangle)
console.log(circle)















// type mobile={
//     kind: "Android" | "Apple"
//     Appstore?: string
//     Playstore?: string
//     Iphone?: string
//     Infinix?: string
// }


// let Apple: mobile={
//     kind: "Apple",
//     Appstore: "Yes availiable",
//     Iphone: "Yes, it is"

// }

// let Android: mobile = {
//     kind: "Android",
//     Playstore: "Yes availiable",
//     Infinix: "Yes, it is availiable"
// }

// console.log(Android)
// console.log(Apple)