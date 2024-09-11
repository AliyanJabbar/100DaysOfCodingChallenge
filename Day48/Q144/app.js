// Question 144:Explain the use of the Promise.all() method with an example.
var promise1 = new Promise(function (res, rej) {
    var data = "something"; //if data has something, than .then() method will call and if data has nothing or empty, than .catch() method will call
    if (data) {
        res("data is present");
    }
    else {
        rej("data is not present");
    }
});
promise1.then(function (msg) { return console.log(msg); }).catch(function (err) { return console.error(err); });
var promise2 = 11;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "foo"); //delay of 100 milisec
});
Promise.all([promise1, promise2, promise3]).then(function (val) {
    console.log(val);
}); //showing, how Promise.all() can handel multiple promises concurrently
