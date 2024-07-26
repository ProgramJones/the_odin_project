const reverseString = function (initialString) {
    let initialStringArray = initialString.split("");
    let reversedStringArray = [];

    for (let letter of initialStringArray) {
        reversedStringArray.unshift(letter);
    }

    let reversedString = reversedStringArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
