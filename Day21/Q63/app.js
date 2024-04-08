// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
// Describing a circle using our Shape type
var circle = {
    kind: "circle",
    radius: 5,
};
//Describing a rectangle using our shape type
var rectangle = {
    kind: "rectangle",
    width: 20,
    hieght: 10,
};
console.log(rectangle);
console.log(circle);
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
