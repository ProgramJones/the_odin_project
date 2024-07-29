const getTheTitles = function (books) {

    arrayOfTitles = [];

    for (let i in books) {
        arrayOfTitles.push(books[i].title);
    };

    return arrayOfTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
