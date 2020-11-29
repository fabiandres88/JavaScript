function factorialize(number) {
    var result = number;
    while (number > 1) {
        number--
        result = result * number;
    }; return result;
};