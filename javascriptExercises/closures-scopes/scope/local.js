//Curso of Closures and Scope in JavaScript

//Local scope
//Example1

const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();

// console.log(hello); //Error

//Example2

var scope = 'I am global';

const functionScope = () => {
    var scope = 'I am just local';
    const fn = () => {
        return scope;
    }
    console.log(fn());
};

functionScope();
console.log(scope);



//Function scope
//Example1

const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
}

fruits();
// console.log(fruit); //Error

//Example2

const fruits2 = () => {
    var fruit = 'apple';
    var fruit = 'orange';//Reassigned
    let foot = 'meal';
    // let foot = 'bread'; //Error
    console.log(fruit);
    console.log(foot);
}

fruits2();