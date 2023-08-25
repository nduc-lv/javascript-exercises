const repeatString = function(string, number) {
    if (number < 0){
        return `ERROR`;
    }
    if (string ==  ``){
        return ``;
    }
    let result = ``;
    for (; number > 0; number--){
        result += `hey`;
    }
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;
