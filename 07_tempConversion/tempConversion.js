const convertToCelsius = function(fTemp) {
  //	x °F ≘ (x − 32) × (5/9)
let cTemp = (fTemp-32)*(5/9);
cTemp = Math.round(cTemp * 10) / 10
return cTemp;

};

const convertToFahrenheit = function(cTemp) {
  //x °C ≘ (x × 9/5 + 32) °F
  let fTemp = (cTemp*(9/5)) +32;
  fTemp = Math.round(fTemp * 10) / 10
  return fTemp

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
