// Question 42: Great Magicians: Add "the Great" to magician names.


let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}



let magicianNames:string[]=["David Blaine", "Dynamo", "Criss Angel"]
magicianNames.forEach(magicianName=>{
})

function make_great (magicianNames:string[]){
    for (let i = 0; i < magicianNames.length; i++) {
        magicianNames [i]= magicianNames [i] + "The Great"
    }
}
make_great(magicians)   // Modifies the original array
show_magicians(magicians);  // Shows modified names
    
 

 
  
    