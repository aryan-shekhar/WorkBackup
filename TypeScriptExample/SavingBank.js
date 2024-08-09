"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Bank_1 = require("./Bank");
var SavingBank = /** @class */ (function (_super) {
    __extends(SavingBank, _super);
    function SavingBank(id, name, bal, dex) {
        return _super.call(this, id, name, bal) || this;
    }
    SavingBank.prototype.deposite = function (amount) {
        this.accBalan += amount;
        return this.accBalan;
    };
    return SavingBank;
}(Bank_1.Bank));
var s1 = new SavingBank(123, "Aryan", 400, "sda");
s1.display();
s1.deposite(800);
s1.display();
