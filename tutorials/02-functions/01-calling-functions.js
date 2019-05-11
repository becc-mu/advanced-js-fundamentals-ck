
function doubleNumber(number){
  return number * 2;
}

doubleNumber(2);
 var timesTwo = doubleNumber;
timesTwo(2);
console.log(timesTwo.name);

if(typeof window === 'undefined') {
  module.exports = timesTwo;
  module.exports = doubleNumber;
}
