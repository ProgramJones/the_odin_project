const sumAll = function (firstNumber, secondNumber) {

    // Return ERROR if two valid numbers are not arguments.
    if (
        (Number.isInteger(firstNumber) === false || Number.isInteger(secondNumber) === false) ||
        (firstNumber < 0 || secondNumber < 0) ||
        (firstNumber % 1 != 0 || secondNumber % 1 != 0)
    ) {
        return "ERROR";
    }


    // Return the sum of the range of arguments.

    let smallerNumber;
    let biggerNumber;
    let sum = 0;

    if (firstNumber < secondNumber) {
        smallerNumber = firstNumber;
        biggerNumber = secondNumber;
    } else if (firstNumber > secondNumber) {
        biggerNumber = firstNumber;
        smallerNumber = secondNumber;
    }

    for (let i = smallerNumber; i <= biggerNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
