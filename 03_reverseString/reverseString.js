const reverseString = function(string) {
    if (string.length == 0){
        return ``;
    }
    let result = ``;
    for (let i = string.length - 1; i > -1; i--){
        result += string[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
