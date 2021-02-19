//Curso of Closures and Scope in JavaScript

//Closures

//Closure

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`Money box: $${saveCoins}`);
    }
    return countCoins;
}

const myClosure = moneyBox();
myClosure(50);
myClosure(150);
myClosure(300);