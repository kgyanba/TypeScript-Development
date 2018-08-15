var array1 = [10, 20, 30];
var array2 = [40].concat(array1, [50, 60, 70]);
console.log(array2);
// spread operator ids used to create copy of array
var array3 = [10, 20, 30, 40];
var array4 = array3.slice();
console.log(array4);
console.log(array3);
if (array3 === array4) {
    console.log('both are equal');
}
else {
    console.log('both are not equal');
}
//another example
var abc = [2, 19, 3, 45, 18];
var xyz = Math.min.apply(Math, abc);
console.log(xyz);
