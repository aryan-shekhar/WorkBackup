var productArray = [
    { proName: "Mobile", price: 700 },
    { proName: "Mouse", price: 100 },
    { proName: "Tab", price: 1000 }
];
var myData = productArray.map(function (value) {
    return value.proName;
});
var add = function (a, b) { return a + b; };
var mydata1 = productArray.map(function (value) {
    return value.price;
});
console.log(mydata1);
var showData = productArray.filter(function (value) { return value.price > 500; });
console.log(showData);
