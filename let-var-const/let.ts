// let and var using for loop

// let example

for (let i=0; i<= 10; i++)
{
console.log(i);
}
//console.log(i);// we can not access i outside loop because it is let

// var example
for(var j =0 ; j<=10; j++)
{

}
console.log(j); // we can access var because it is var

// let and var using if block

var abc = 'sham';
if(abc ==='sham')
{
     var color = 'blue';
}
console.log(color);// we can access color because it is var

// let example
let xyz = 'sham';
if(xyz === 'sham')
{
    let color = 'red';
    console.log(color);
}
console.log(color);