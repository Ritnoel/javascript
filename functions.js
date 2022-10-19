//function declarations

function greet() {
    console.log('hello')
}
greet()

//return a value

function greet() {
    return 'goodday';
}
console.log(greet())


taking parameters and arguments
function greet(firstName) {
    return 'hello' + ' ' + firstName;
}
console.log(greet('moyin'));



//taking in multiple arguments and parameters

function greet(firstName, lastName) {
    return 'hello' + firstName + ' ' + lastName;
}
console.log(greet('moyin', 'oluwa'))



default values for parameters

function greet(firstName='moyin', lastName='oluwa') {
    return 'hello'+ firstName + lastName
}
console.log(greet('rit', 'noel'));



//function expression

const square = function(x){
    return x*x;
};
console.log(square(9))


using default parameters
const square = function(x = 2){
    return x*x;
};
console.log(square())

immediately invokable functions expressions(IIFE)
(function(){
    console.log('run this...')
})();



(function(name){
    console.log('hello' + name)
})('moyin');

(function(firstName, lastName){
    console.log('hello' + firstName + lastName)
})('moyin', 'oluwa');


var h = function k() {return 40;} ;
typeof k();

for (var i = 0; i <= 6; i = i+2) {
    console.log(i)
}

var allvalues;
console.log(allvalues);

var gro = ['a', 'b', 'c', 'd'];
gro.splice(1,2, 'e', 'f');

var i;
var y = 6;
var x = '0000';
for (i = 0; i<x.length; i++ )
{y += i;}
console.log(y);

var x = 1;

function addTwo () {
    x = x + 2;
}

addTwo()
x = x + 1;
console.log (x);

var x = 3
var y = " ";
var z = 4;
if (x == y) {
    z++;
}
console.log(z);

for (var i=1; i<5; i++) {a++; i--;}

var x = 0;
var y = " ";
var z = 4;
if (x==y) {
    z++;
}
console.log(z);

console.log("i" === 1)
