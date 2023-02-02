const convertToCelsius = function(fahrenheit) {
  let a = fahrenheit;
  let celcius = (a - 32) * (5 / 9);
  return Math.round(celcius);
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
