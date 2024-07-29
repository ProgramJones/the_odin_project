const palindromes = function (str) {
    let modifiedStr = str.toLowerCase();

    // Removes the last character if it's a special character
    if (/[.?!]$/.test(modifiedStr)) {
        modifiedStr = modifiedStr.slice(0, -1);
    }

    // Removes any spaces and commas from str
    let tempArray = modifiedStr.split("");
    tempArray = tempArray.filter((item) => /\S/.test(item) && /[^,]/.test(item));
    modifiedStr = tempArray.join("");

    let reversedArray = modifiedStr.split("").reverse().join("");

    return (modifiedStr == reversedArray) ? true : false;

};


// Do not edit below this line
module.exports = palindromes;
