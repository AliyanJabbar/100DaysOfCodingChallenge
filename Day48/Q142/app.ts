// Question 142: Create a Promise that resolves with `Hello, World!` after 2 seconds.


let promise = new Promise((res)=>{
    setTimeout(()=>{
        res("Hello World!")
    },2000)
})

promise.then((msg)=>console.log(msg))