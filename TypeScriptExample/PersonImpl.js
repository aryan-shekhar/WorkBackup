"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonImpl = /** @class */ (function () {
    function PersonImpl() {
    }
    PersonImpl.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return PersonImpl;
}());
var v1 = new PersonImpl();
v1.firstName = "Aryan";
v1.lastName = "Shekhar";
console.log(v1.getFullName());
