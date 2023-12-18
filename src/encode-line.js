const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  if (!str.length) return '';
  let result = '';
  let count = 1;
  let curentChar = str[0];
  for (let i = 1; i < str.length; i++){
    if (str[i] === curentChar) count++
    else{
      if (count > 1) result += count
      result += curentChar;
      curentChar = str[i];
      count = 1;
    }
  }
  if (count > 1) result += count
  result += curentChar;
  return result
}

module.exports = {
  encodeLine
};
