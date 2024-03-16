// Question 41: Magicians: Display magician names from an array.



let magician_names : string[]=["David Blaine" , "Dynamo" , "Criss Angel"]
function show_magicians (magician_names : string[]){
  magician_names.forEach(magician_name => {
   console.log(`The ${magician_name} is a famous magician.`)
})
}
show_magicians (magician_names)