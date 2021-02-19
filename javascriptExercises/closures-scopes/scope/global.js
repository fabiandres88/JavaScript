//Curso of Closures and Scope in JavaScript

//Global scope
//Example

var hello = 'Hello';
let world = 'World';
const helloWorld = 'hello World!';

function anotherfunction() {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherfunction();