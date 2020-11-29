/*This code receive a money value an return and integer quantity of bills of exchange
in 2,5 or 10 bills*/

var bTwo = 0;
var bFive = 0;
var bThen = 0;
function returnrBills(cash) {
    var flagTwo = (cash % 2);
    var flagFive = (cash % 5);
    var flagThen = (cash % 10);

    if (flagTwo === 0) {
        bTwo = cash / 2;
        console.log(bTwo);
    } if (flagTwo === 1) {
        bTwo = (cash / 2) - 0.5;
        console.log(bTwo);
    }
    
    if (flagFive === 0) {
        bFive = cash / 5;
        console.log(bFive);
    } if (flagFive != 0) {
        bFive = (cash / 5) - (flagFive * 0.2);
        console.log(bFive);
    }
    if (flagThen === 0) {
        bThen = cash / 10;
        console.log(bThen);
    } if (flagThen != 0) {
        bThen = (cash / 10) - (flagThen * 0.1);
        console.log(bThen);
    }
}
