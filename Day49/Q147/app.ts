// Question 144:Explain how to handle errors in a callback pattern.

function fetching(callback:(error:Error|null,data?:string)=>void){

    let error = new Error("Data fetch Failed")
    let data = "something"

    if(Math.random()>0.5){
        callback(null,data)
    }else{
        callback(error)
    }
}

fetching((error, data)=>{
    if(data){
        console.log(data)
    }else{
        console.error(error?.message)
    }
})

//now if the error will come than it will be handled 