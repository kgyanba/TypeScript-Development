// normal function
var hello = function () {
    return 'good morning';
};
console.log(hello());
// Arrow example
var great = function () { return 'hello'; };
console.log(great());
// example 2 normal function
var abc = function (name) {
    return "Good morning " + name;
};
console.log(abc('sam'));
// Arrow example
var abz = function (name) {
    return "Good orning " + name;
};
console.log(abz('john'));
// normal function example 3
var xyz = function (a, b) {
    return a + b;
};
console.log('the sum of a and b is', xyz(10, 20));
// Arrow example
var sam = function (a, b) {
    return a + b;
};
console.log(sam(10, 20));
