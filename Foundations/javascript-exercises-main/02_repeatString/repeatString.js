const repeatString = function (initialString, number) {

    if (number < 0) {
        return "ERROR";
    } else if (number === 0) {
        return "";
    } else if (number === 1) {
        return initialString;
    } else if (number > 1) {
        let finalString = "";

        for (i = 0; i < number; i++) {
            finalString += initialString;
        }

        return finalString;
    } else if (initialString === "") {
        return "";
    }


};

// Do not edit below this line
module.exports = repeatString;
