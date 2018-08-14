// create a function with default parameter

function person(name:string,age:number = 30){
let john = " Good morning " + name + ' you are' + age + ' years old';
return john;
};
let sam = person('sam');
document.querySelector('#display').textContent = sam;

// another example

function sanju (name:string, city:string, age:number = 24)
{
    return " Good morning " + name + " you are from " + city + " you are " + age + " years old ";
}
let ram = sanju('vivek','pune',25);// if supposed i don't passed any value it will take default value
document.querySelector('#display').textContent = ram;