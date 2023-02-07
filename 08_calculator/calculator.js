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
  for (i = 0; i < sum.length; i++){
    let sumSubArray = sum[i];
    for (j = 0; j < sum[i].length; j++) {
      result += sumSubArray[j]
    }
  }
  parseFloat(result);
  return result;
}

const multiply = function(...multiply) {

  let mult = multiply;
  let result = 1;

  for (i = 0; i < mult.length; i++) {
    for (j = 0; j < mult[i].length; j++) {
      result *= mult[i][j]; 
    }
  }
  parseFloat(result);
  return result;

};

const power = function(a, b) {

  return Math.pow(a, b);
	
};

const factorial = function(factorial) {
  let result = 1;
  let factor = factorial;

  if (factor ===0 || factor == 1){
    return 1;
  }
  while (factor > 1) {
    result *= factor;
    factor--;
  }
  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
