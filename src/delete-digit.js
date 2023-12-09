const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const s = String(n);
  if ((s.length > 1) && (s[0] < s[1])) return +s.replace(s[0], '');
  let minDitgit =  s.split('').sort((a, b) =>  +a - +b )[0];
  return +s.replace(minDitgit, '');
}

module.exports = {
  deleteDigit
};
