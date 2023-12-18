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
  if (!date) return 'Unable to determine the time of year!';
  try{
    let month;
    if (typeof date.toDateString()==='string') month = date.getMonth();
    return ['winter','winter', 'spring','spring','spring', 'summer', 'summer', 'summer', 'autumn','autumn','autumn','winter'][month]
  }
  catch(error){
    throw new Error('Invalid date!')
  }
}

module.exports = {
  getSeason
};
