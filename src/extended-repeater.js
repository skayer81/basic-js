const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = String(str);
  let additionSeparator = '|';
  let separator = '+'
  let addition = options.addition?options.addition:'';
  if (options.additionRepeatTimes){
      addition =  Array(options.additionRepeatTimes)
      .fill(String(options.addition))
      .join(options.additionSeparator?options.additionSeparator:additionSeparator)
  }
  if (options.repeatTimes){
       result = Array(options.repeatTimes)
      .fill(str+addition)
      .join(options.separator?options.separator:separator)
  }
  else result = str+addition;
  return result
}

module.exports = {
  repeater
};
