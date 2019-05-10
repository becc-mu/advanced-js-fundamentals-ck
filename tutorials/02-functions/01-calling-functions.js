
function doubleNumber(number){
  return number * 2;
}
var timesTwo;

if(typeof window === 'undefined') {
  module.exports = timesTwo;
  module.exports = doubleNumber;
}
