///Date
//Example1

var differenceDate = (date1, date2) => {
    const day = 1000 * 60 * 60 * 24;
    const dif = Math.abs(date1 - date2);
    return Math.floor(dif / day);
}

const today = new Date();
const myBorn = new Date(1988, 11, 28);

console.log(differenceDate(today, myBorn));