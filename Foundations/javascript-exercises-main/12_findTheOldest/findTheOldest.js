const findTheOldest = function (arrayOfPeopleObjects) {
    let oldestAge = 0;
    let oldestPersonObject = null;

    for (let i = 0; i < arrayOfPeopleObjects.length; i++) {
        let currentPersonAge = null;

        if (arrayOfPeopleObjects[i].yearOfDeath === undefined) {
            let currentYear = new Date().getFullYear();

            currentPersonAge =
                currentYear -
                arrayOfPeopleObjects[i].yearOfBirth;
        } else {
            currentPersonAge =
                arrayOfPeopleObjects[i].yearOfDeath -
                arrayOfPeopleObjects[i].yearOfBirth;
        }

        if (currentPersonAge > oldestAge) {
            oldestAge = currentPersonAge;
            oldestPersonObject = arrayOfPeopleObjects[i];
        }
    }

    return oldestPersonObject;
};

// Do not edit below this line
module.exports = findTheOldest;
