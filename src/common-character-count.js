const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  const a1 = s1.split('').sort();
  const a2 = s2.split('').sort();
  let index = 0;
  let count = 0;
  for (elem of a1){
     if (a2.indexOf(elem, index) != -1){
         count += 1;
         index = a2.indexOf(elem)+1
     }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
