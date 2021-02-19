//Curso of Closures and Scope in JavaScript

//Loops
function fn() {
    for (var index = 0; index < 10; index++) {
        setTimeout(() => {
            console.log(index);
        }, 2000);

    }
}

fn();

//Take care with create a closure that change the expected result in loops is better use let