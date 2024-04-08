// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.


//Enums

// Making a list (enum) for different types of vehicles
enum vehicleTypes {
    cars,
    airplanes,
    buses, 
    trains
}

console.log(vehicleTypes.cars) // It shows 0 because enums start counting from 0
// Here, this will show that what number did cars got in our list (enum) 

console.log(vehicleTypes.airplanes) // It shows 1 because enums start counting from 0
// Here, this will show that what number did airplanes got in our list (enum) 

console.log(vehicleTypes.buses) // It shows 2 because enums start counting from 0
// Here, this will show that what number did buses got in our list (enum) 

console.log(vehicleTypes.trains) // It shows 3 because enums start counting from 0
// Here, this will show that what number did trains got in our list (enum) 