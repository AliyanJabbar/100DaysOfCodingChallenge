// Question 37: Large Shirts: Default values in make_shirt().

function t_shirt(size: String= "large", message:string= "I love AI", quantity:string= "10pcs") //here I am giving default values
 {
    console.log(`There is an order of t-shirts of size ${size}, message ${message} printed on it. The customer needs quantity of ${quantity}. `)
}
t_shirt() //Default size, message and quantity
t_shirt("small") // size = small and default message
t_shirt("medium", "I love coding", "50pcs") // size = medium and message = I love coding and quantity = 50pcs