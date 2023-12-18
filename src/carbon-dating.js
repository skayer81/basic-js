const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //const MODERN_ACTIVITY = 
  //const HALF_LIFE_PERIOD = 
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //if ( !Number(sampleActivity) || sampleActivity > MODERN_ACTIVITY) return false
  if (typeof sampleActivity !== 'string' || !Number(sampleActivity) || (Number(sampleActivity) < 0 || Number(sampleActivity) > MODERN_ACTIVITY) ) return false
  let result = Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/(0.693/HALF_LIFE_PERIOD));

  
  return result
}


// console.debug(dateSample(3), false);
// console.debug(dateSample(3.312312), false);
// console.debug(dateSample(false), false);
// console.debug(dateSample(null), false);
// console.debug(dateSample(undefined), false);
// console.debug(dateSample([3]), false);
// console.debug(dateSample(['3']), false);
// console.debug(dateSample({ '3.14': '3dec' }), false);

console.debug(dateSample('3'), 13305);
console.debug(dateSample('1'), 22387);
console.debug(dateSample('9'), 4223);
console.debug(dateSample('11'), 2564);


module.exports = {
  dateSample
};
