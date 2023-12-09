const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if (!date) return 'Unable to determine the time of year!'
  if (typeof date === 'object' && date instanceof Date){

  const month = date.getMonth();

  //if (!date.getMonth()) throw new Error('Invalid date!')
  return ['winter','winter', 'spring','spring','spring', 'summer', 'summer', 'summer', 'autumn','autumn','autumn','winter'][month]
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  }
  throw new Error('Invalid date!')
}

module.exports = {
  getSeason
};
