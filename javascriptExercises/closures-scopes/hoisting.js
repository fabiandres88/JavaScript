//Curso of Closures and Scope in JavaScript

//Hoisting

//example1

a = 2000;
var a;
console.log(a);//2000

//Example2

console.log(b);
var b = 3000;//undefined

//Example3

function nameOfDog(name) {
    console.log(name);
}

nameOfDog('Maxi');//Maxi

nameOfDog2('Maxi');//Maxi

function nameOfDog2(name) {
    console.log(name);
}
