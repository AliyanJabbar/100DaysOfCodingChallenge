// Question 143:Create a function that accepts a callback and invokes it with some arguments.

function acceptCallBack(callback: (n1: number, n2: number) => void,arg1:number,arg2:number):void {
    callback(arg1,arg2) //calling callback function here with the require arguments
}

const add = (n1:number,n2:number)=>{
    console.log(n1+n2)
}

acceptCallBack(add,5,2)