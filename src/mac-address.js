const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) {
  //console.log()
  //String(n).split('-').every(elem => elem.split('').every(elem => console.log(elem)))
  return String(n).split('-').every(elem => elem.split('').every(elem => ('0' <= elem && elem <= '9') || ('A' <= elem && elem <= 'F')))
  console.log(arr)
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
// isMAC48Address( '00-1B-63-84-45-r6') 
// console.log(isMAC48Address('00-1B-63-84-45-E6'), true);
// console.log(isMAC48Address('Z1-1B-63-84-45-E6'), false);
// console.log(isMAC48Address('not a MAC-48 address'), false);
console.log(isMAC48Address('FF-FF-FF-FF-FF-FF'), true);
//console.log(isMAC48Address('G0-00-00-00-00-00'), false);

module.exports = {
  isMAC48Address
};
