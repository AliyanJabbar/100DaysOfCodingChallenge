// Question 38: Cities: Describing cities with a function.


function describe_city(city:string , country: string = "Pakistan"){
console.log(`The ${city} is in ${country}.`)
}
describe_city("Karachi") // here the city will be Karachi.
describe_city("Lahore") //here the city will be Islamabad.
describe_city("Beijing", "China") //here the city will be Beijing and country will be China.