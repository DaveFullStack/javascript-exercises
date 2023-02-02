const add = function(...addNumbers) {
  let add = addNumbers;
  let result = 0;
  for (i = 0; i < add.length; i++) {
    result = result + add[i];
  }
  return result;	
};

const subtract = function(...subtractNumbers) {
  let sub = subtractNumbers;
  let result = sub[0];
  for (i = 1; i < sub.length; i++) {
    result = result - sub[i];
  }
  parseFloat(result);
  return result;
	
};

const sum = function(...sumNumbers) {
  let sum = sumNumbers;
  let result = 0;
  for (i = 0; i < sum.length; i++) {
    result = result + sum[i];
  }
  return result;
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
