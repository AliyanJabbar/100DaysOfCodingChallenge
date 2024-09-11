// Question 149:Explain the concept of the event loop in JavaScript with an example.


console.log("start")

setTimeout(()=>{
    console.log("timeout")
},0) //0 milli second time is given

console.log("end")


//we can see that the time given to the setTimeout is 0 but it will execute after end because of the event loop