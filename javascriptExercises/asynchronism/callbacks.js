//Callbacks
//Example1

function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(13, 19, sum));

//Example 2

function date(callback) {
    console.log(new Date);
    setTimeout(() => {
        let newDate = new Date;
        callback(newDate);
    }, 7000);
}

function pritdate(dateNow) {
    console.log(dateNow);
}

date(pritdate);
