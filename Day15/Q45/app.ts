// Question 45: Cars: Create detailed car objects with flexible properties.


function make_car (manufacturer:string, model:string,...options:[string, any][]):object{
    let car = {manufacturer, model}
    options.forEach(([key, value]) => car[key]=value)
    return car
}
console.log (make_car("Toyota", "Hilux", ["color","white"], ["year", "2022"]))
console.log (make_car("Audi", "E tron gt", ["color", "black"], ["sunroof",true]))

