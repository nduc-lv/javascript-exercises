//need to remove all non-alphabet character
//check the symetric of the given string
const palindromes = function (string) {
    //remove none alphabet character
    string = string.toLowerCase();
    let result = ``;
    for (const char of string){
        if ((`a` <= char && char <= `z`) || (`0` <= char && char <= `9`)){
            result += char;
        }
    }
    //check the symetric
    let length = result.length;
    for (let i = 0; i < length / 2; i++){
        if (result[i] != result[length - 1 - i]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
