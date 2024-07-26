const removeFromArray = function (array, ...args) {

    let duplicateItemIndex;

    for (let item of args) {
        while (array.includes(item)) {
            duplicateItemIndex = array.indexOf(item);
            array.splice(duplicateItemIndex, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
