function getArray(items) {
    return new Array().concat(items);
}
var increment = getArray([3, 4, 5, 6]);
increment.push('c');
console.log(increment);
var datastring = getArray(['c', 'a', 'g', 'd']);
datastring.push(2);
console.log(datastring);
