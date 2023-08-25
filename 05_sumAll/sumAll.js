const sumAll = function(startNum, endNum) {
    //make sure arguments are number
    if ((typeof startNum) != "number" || (typeof endNum != "number")){
        return "ERROR";
    }
    //make sure startNum and endNum > 0
    if (startNum < 0  || endNum < 0){
        return "ERROR";
    }
    //make sure startNum <= endNum
    if (startNum > endNum){
        let temp = startNum;
        startNum = endNum;
        endNum = temp;
    }

    //apply formula
    let numberOfNum = (endNum - startNum) + 1;
    return ((startNum + endNum) * numberOfNum) / 2; 
};

// Do not edit below this line
module.exports = sumAll;
