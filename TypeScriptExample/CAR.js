"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAR = void 0;
var CAR = /** @class */ (function () {
    function CAR(speed, RegularPrice, color) {
        this.speed = speed;
        this.RegularPrice = RegularPrice;
        this.color = color;
    }
    CAR.prototype.getSalePrice = function (price) {
        return this.RegularPrice;
    };
    return CAR;
}());
exports.CAR = CAR;
