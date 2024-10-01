const sumAll = function (value1, value2) {
    let sum = 0;
    if (value1 < 0 || value2 < 0 || !(Number.isInteger(value1) && Number.isInteger(value2))) {
        return "ERROR"
    };

    if (value1 < value2) {
        for (let i = value1; i <= value2; i++) {
            sum += i;
        };
    } else {
        for (let i = value2; i <= value1; i++) {
            sum += i;
        };
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
