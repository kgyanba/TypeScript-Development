let array1 = [10,20,30];
let array2 = [40,...array1,50,60,70];
console.log(array2);

// spread operator ids used to create copy of array

let array3 = [10,20,30,40];
let array4 = [...array3];
console.log(array4);
console.log(array3);

if(array3===array4)
{
    console.log('both are equal')
}
else {
    console.log('both are not equal');
}

//another example

let abc =[2,19,3,45,18];
let xyz =Math.min(...abc);
console.log(xyz);