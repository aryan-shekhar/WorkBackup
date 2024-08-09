var product = /** @class */ (function () {
    function product(proId, proName, proPrice) {
        this.proId = proId;
        this.proName = proName;
        this.proPrice = proPrice;
    }
    product.prototype.GST = function () {
        return this.proPrice * 1.18;
    };
    return product;
}());
var v1 = new product(1, "bottle", 900);
console.log(v1.GST());
