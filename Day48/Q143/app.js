// Question 143:Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
var promise = new Promise(function (res, rej) {
    var data = "something"; //if data has something, than .then() method will call and if data has nothing or empty, than .catch() method will call
    if (data) {
        res("data is present");
    }
    else {
        rej("data is not present");
    }
});
promise.then(function (msg) { return console.log(msg); }).catch(function (err) { return console.error(err); });
