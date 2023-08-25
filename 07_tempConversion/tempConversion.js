//verify the input
//use the formulas to convert
//round the result to one decimal place
const convertToCelsius = function(number) {
  //verify the input
  if (typeof number != `number`){
    return `ERROR`;
  }
  //use the formula to convert
  let result = (number - 32) * 5 / 9;
  
  //return the rounded result
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function(number) {
  //verify the input
  if (typeof number != `number`){
    return `ERROR`;
  }
  //use the formula to convert
  let result = number * 9 / 5 + 32;
  
  //return the rounded result
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
