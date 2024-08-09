"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
var Bank = /** @class */ (function () {
    // constructor(){}
    function Bank(id, name, bal) {
        this.accId = id;
        this.accName = name;
        this.accBalan = bal;
    }
    Bank.prototype.deposite = function (amount) {
        return this.accBalan += amount;
    };
    Bank.prototype.display = function () {
        console.log(this.accId);
        console.log(this.accName);
        console.log(this.accBalan);
    };
    return Bank;
}());
exports.Bank = Bank;
