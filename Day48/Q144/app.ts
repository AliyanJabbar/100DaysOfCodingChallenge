// Question 144:Explain the use of the Promise.all() method with an example.

let promise1 = new Promise((res,rej)=>{
    let data = "something" //if data has something, than .then() method will call and if data has nothing or empty, than .catch() method will call
    if(data){
        res("data is present")
    }else{
        rej("data is not present")
    }
})

promise1.then((msg)=>console.log(msg)).catch((err)=>console.error(err))

let promise2 = 11

let promise3 = new Promise<string>((resolve) => {
    setTimeout(resolve, 100, "foo");//delay of 100 milisec
  });

  Promise.all([promise1,promise2,promise3]).then((val)=>{
    console.log(val)
  }) //showing, how Promise.all() can handel multiple promises concurrently