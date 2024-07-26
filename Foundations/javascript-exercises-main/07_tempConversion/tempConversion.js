const convertToCelsius = function (temp) {
    let conversion = (temp * (9 / 5)) + 32;
    conversion = Math.round(conversion * 10) / 10 // Round to one decimal place

    return conversion;
};

const convertToFahrenheit = function (temp) {
    let conversion = (temp - 32) * (5 / 9);
    conversion = Math.round(conversion * 10) / 10 // Round to one decimal place

    return conversion;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
