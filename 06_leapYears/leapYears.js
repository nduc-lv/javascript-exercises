//make sure the year is valid -> return ERROR if it's not
//return true if the given year satisfies leap year's conditions, else false
const leapYears = function(year) {
    //verify the year
    if (typeof year != `number` || year <= 0){
        return "ERROR";
    }
    //check the conditions
    if (year % 400 == 0){
        return true;
    }
    if ((year % 100 != 0) && (year % 4 == 0)){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
