// Question 143:Create a function that accepts a callback and invokes it with some arguments.
function acceptCallBack(callBack, arg1, arg2) {
    callBack(arg1, arg2);
}
var add = function (n1, n2) {
    console.log(n1 + n2);
};
acceptCallBack(add, 5, 2);
