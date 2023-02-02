const convertToCelsius = function(fahrenheit) {
  let a = fahrenheit;
  let celcius = (a - 32) * (5 / 9);
  let result = celcius.toFixed(1);
  result = parseFloat(result)
  return result;
};

const convertToFahrenheit = function(celcius) {
  let a = celcius;
  let fahrenheit = a * (9/5) + 32;
  let result = Math.round(fahrenheit *10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
