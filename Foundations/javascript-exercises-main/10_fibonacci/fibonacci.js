const fibonacci = function (index) {

    if (index < 0) {
        return "OOPS";
    } else {
        fibonacciSequence = [0, 1];

        let total = 0;

        while (fibonacciSequence[+index] === undefined) {
            fibonacciSequence.push(fibonacciSequence.at(-1) + fibonacciSequence.at(-2));
        }

        return fibonacciSequence[+index];
    }
};

// Do not edit below this line
module.exports = fibonacci;
