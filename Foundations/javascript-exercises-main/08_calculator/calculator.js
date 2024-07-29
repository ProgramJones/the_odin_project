const add = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};

const sum = function (arr) {

    if (arr.length === 0) {
        return 0;
    } else {
        let sum = 0;

        sum = arr.reduce((partialSum, item) => {
            return partialSum + item;
        });

        return sum;
    }

};

const multiply = function (arr) {
    result = arr.reduce((accumulator, item) => {
        return accumulator *= item;
    }, 1)

    return result;
};

const power = function (firstNumber, secondNumber) {
    result = 0;

    for (let i = 0; i <= secondNumber; i++) {
        result += firstNumber * firstNumber;
    }

    return result;
};

const factorial = function (number) {

    if (number == 0 || number == 1) {
        return 1;
    } else {
        let total = 1;

        for (let i = 1; i <= number; i++) {
            total *= i;
        }

        return total;
    }

};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
