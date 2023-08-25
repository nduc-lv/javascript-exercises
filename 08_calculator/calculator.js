const add = function(...args) {
	let result = 0;
  for (let i = 0; i < args.length; i++){
    result += +args[i];
  }
  return result;
};

const subtract = function(number1, number2) {
	return +number1 - +number2;
};

const sum = function(args) {
	let result = 0;
  for (let i = 0; i < args.length; i++){
    result += +args[i];
  }
  return result;
};

const multiply = function(args) {
  let result = 1;
  for (let i = 0; i < args.length; i++){
    result *= args[i];
  }
  return result;
};

const power = function(number1, number2) {
	return number1 ** number2;
};

const factorial = function(number1) {
	let result = 1;
  for (let i = 1; i <= number1; i++){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
