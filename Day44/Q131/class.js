"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
var user = /** @class */ (function () {
    function user(name) {
        this.name = name;
    }
    user.prototype.greet = function () {
        console.log("Hello ".concat(this.name));
    };
    return user;
}());
exports.user = user;
