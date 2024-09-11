// Question 142: Create a Promise that resolves with `Hello, World!` after 2 seconds.
var promise = new Promise(function (res) {
    setTimeout(function () {
        res("Hello World!");
    }, 2000);
});
promise.then(function (msg) { return console.log(msg); });
