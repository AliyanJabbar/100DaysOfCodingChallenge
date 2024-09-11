// Question 144:Explain how to handle errors in a callback pattern.
function fetching(callback) {
    var error = new Error("Data fetch Failed");
    var data = "something";
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetching(function (error, data) {
    if (data) {
        console.log(data);
    }
    else {
        console.error(error === null || error === void 0 ? void 0 : error.message);
    }
});
