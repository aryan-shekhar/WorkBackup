var a = 20;
var b = 30;
var c = 40;
if (a > b && a > c)
    console.log(a);
else if (b > a && b > c)
    console.log(b);
else
    console.log(c);
function getnum(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 7) {
            console.log("Present");
            return;
        }
    }
    console.log("Not Present");
}
console.log(getnum([1, 2, 3, 4, 5, 6, 7, 8]));
