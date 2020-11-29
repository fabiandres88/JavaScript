/*temperature closer to zero*/

function tempt(ts) {
    ts.forEach((element) => {
        if (element > 0) {
            maxT.push(element);
        }
        if (element < 0) {
            minT.push(element);
        }
    }
    ); maxT.forEach((element => {
        if (element < counter1) {
            counter1 = element;
        }
    })); minT.forEach((element => {
        if (element > counter2) {
            counter2 = element;
        }
    })); if ((counter1 - counter2) > 0) {
        result = counter2;
    } if ((counter1 - counter2) < 0) {
        result = counter1;
    }
};