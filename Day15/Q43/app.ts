// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.



let magicians: string[] = ["David Blaine", "Dynamo", "Criss Angel"];
function show_magicians (magician_names : string[]){
  magician_names.forEach(magician_name => {
   console.log(`The ${magician_name} is a famous magician.`)
})
}
function make_great (magicians:string[]):string[]{
  let great_magicians =[]
  magicians.forEach(magician =>{
    great_magicians.push(`${magician} ,the great,`) // this error can be neglect
  })
  return great_magicians
}
let great_magicians=make_great(magicians.slice())
  console.log("original magicians")
  show_magicians(magicians)
  console.log("Great magicians")
  show_magicians(great_magicians)