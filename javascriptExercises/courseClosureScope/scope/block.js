//Curso of Closures and Scope in JavaScript

//Block scope
//Example1

function fruits() {
    if (true) {
        var fruit = 'apple';//function scope
        let fruit2 = 'orange';//block scope
        const fruit3 = 'grapes';//block scope

        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit);
}

fruits();

//Example2

let x = 1000;
{
    let x = 2000;
    console.log(x);// output 2000
}
console.log(x); // output 1000

//Example3

var x = 1000;
{
    var x = 2000;
    console.log(x);// output 2000
}
console.log(x); // output 2000

//Example4

function fn() {
    for (let index = 0; index < 10; index++) {
        setTimeout(() => {
            console.log(index);
        }, 2000);

    }
}

fn();//output
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9


//example5

function fn2() {
    for (var index = 0; index < 10; index++) {
        setTimeout(() => {
            console.log(index);
        }, 2000);

    }
}

fn2();
// output
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
