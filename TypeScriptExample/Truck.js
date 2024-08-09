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
var CAR_1 = require("./CAR");
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(speed, RegularPrice, color, weight) {
        var _this = _super.call(this, speed, RegularPrice, color) || this;
        _this.weight = weight;
        return _this;
    }
    Truck.prototype.getSalePrice = function () {
        if (this.weight > 2000)
            return this.RegularPrice * 0.90;
        else
            return this.RegularPrice * 0.80;
    };
    return Truck;
}(CAR_1.CAR));
var t1 = new Truck(100, 5000, "blue", 22000);
console.log(t1.getSalePrice());
var t2 = new Truck(200, 50000, "green", 1000);
console.log(t2.getSalePrice());
