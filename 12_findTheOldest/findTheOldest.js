//need to find the most recent year to calculate age for people who still live
//calculate age and return the oldest person
const findTheOldest = function(array) {
    //find the most recent year
    let theMostRecentYear = 0;
    array.forEach(element => {
        let currentYear = element.yearOfBirth;
        if (element.yearOfDeath != undefined){
            currentYear = element.yearOfDeath;
        }
        if (theMostRecentYear < currentYear){
            theMostRecentYear = currentYear;
        }
    });
    //calculate age
    let result = array[0];
    let max = 0;
    array.forEach(element => {
        let age = theMostRecentYear - element.yearOfBirth;
        if (element.yearOfDeath != undefined){
            age = element.yearOfDeath - element.yearOfBirth;
        }
        if (age > max){
            max = age;
            result = element;
        }
    });
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
