// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Explain & TIP: The await operator is used to wait for a Promise to settle. It can only be used inside an async function. Using await makes asynchronous code look and behave a little more like synchronous code, which can make it easier to understand and debug.
// Definitions of asynchronous. adjective. not synchronous; not occurring or existing at the same time or having the same period or phase.
// What is an asynchronous function?
// An asynchronous function is any function that delivers its result asynchronously – for example, a callback-based function or a Promise-based function. An async function is defined via special syntax, involving the keywords async and await . It is also called async/await due to these two keywords.
// Await is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result.
//fetch means return
// How does await work in TypeScript?
// In the fetchData function above, the await keyword is used to pause the execution of the function until the Promise returned by fetch() is resolved or rejected. If the Promise is fulfilled, the resolved value is returned. If the Promise is rejected, an error is thrown
// // Example use of the 'await' reserved word in asynchronous JavaScript
function fetchSomething(a, b) {
    return a + b; // Assuming fetchSomething returns a Promise but we are returning only addition of two numbers
}
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var Data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchSomething(9, 2)]; //calling above function named "fetchSomething"
                case 1:
                    Data = _a.sent() //calling above function named "fetchSomething"
                    ;
                    console.log(Data);
                    return [2 /*return*/];
            }
        });
    });
}
fetchData();
console.log("The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
//   This demonstrates how 'await' improves readability and flow in asynchronous code.
