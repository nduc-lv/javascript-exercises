//verify input
//fibonacci formula
const fibonacci = function(position) {
    //verify input
    if (position <= 0){
        return "OOPS";
    }
    //fibonacci formula
    let first = 1;
    let second = 1;
    let current = 3;
    let result = 1;
    while (current <= position){
        result = first + second;
        first = second;
        second = result;
        current++;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
