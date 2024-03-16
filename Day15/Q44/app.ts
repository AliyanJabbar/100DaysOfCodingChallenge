// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.


function make_sandwich(...items:string[]){  //here ...items is for infinite items.
   console.log(`making a sandwich with:${items.join (',')}`)
}
make_sandwich ("tomato", "lettuce")
make_sandwich ("mayo", "meat", "cheese")
make_sandwich ( "onion", "pepper", "olives")