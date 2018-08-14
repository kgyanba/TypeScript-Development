// create a function with default parameter
function person(name, age) {
    if (age === void 0) { age = 30; }
    var john = " Good morning " + name + ' you are' + age + ' years old';
    return john;
}
;
var sam = person('sam');
document.querySelector('#display').textContent = sam;
// another example
function sanju(name, city, age) {
    if (age === void 0) { age = 24; }
    return " Good morning " + name + " you are from " + city + " you are " + age + " years old ";
}
var ram = sanju('vivek', 'pune', 25); // if supposed i don't passed any value it will take default value
document.querySelector('#display').textContent = ram;
