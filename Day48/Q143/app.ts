// Question 143:Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.

let promise = new Promise((res,rej)=>{
    let data = "something" //if data has something, than .then() method will call and if data has nothing or empty, than .catch() method will call
    if(data){
        res("data is present")
    }else{
        rej("data is not present")
    }
})

promise.then((msg)=>console.log(msg)).catch((err)=>console.error(err))
