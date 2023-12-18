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


    //if (!date.getMonth()) throw new Error('Invalid date!')
    return ['winter','winter', 'spring','spring','spring', 'summer', 'summer', 'summer', 'autumn','autumn','autumn','winter'][month]
  }
  catch(error){
    //error.message = 'Invalid date!'
   // console.debug(error.message);
    throw new Error('Invalid date!')

  }
  //if (!(typeof date === 'object' && date instanceof Date) ) throw new Error('Invalid date!')
 // if (typeof date === 'object' && date instanceof Date && 'toDateString' in date){// && date.length === 7){
 // if (date.length !== 7) throw new Error('Invalid date!')
  //console.debug(date, date.toString(), date.toDateString() );
 // console.debug(date, 'toDateString' in date);
 // console.debug(typeof date.toDateString()==='string');

  //const month = date.getMonth();


  //if (!date.getMonth()) throw new Error('Invalid date!')
  //return ['winter','winter', 'spring','spring','spring', 'summer', 'summer', 'summer', 'autumn','autumn','autumn','winter'][month]
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //}
  //throw new Error('Invalid date!')
}

// const fakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

// getSeason(fakeDate)


module.exports = {
  getSeason
};
