const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  const result = []
  for (let i = 0; i < arr.length; i++){
    let curentElem = arr[i];
    switch (curentElem){
      //case Number(arr[i]): result.push(arr[i]);
      //break;
        case '--discard-next': i++; break;
        case '--discard-prev': {
          //result.pop();
          result.pop();
          break;
        }
        case '--double-next': { if (i<arr.length - 1)
          result.push(arr[i+1]); 
          break;}
        case '--double-prev': if (i>0) result.push(result[result.length-1]); break;
        case undefined:  break;
        default: result.push(curentElem)
//       --discard-nextисключает следующий элемент массива из преобразованного массива.
// --discard-prevисключает предыдущий элемент массива из преобразованного массива.
// --double-nextдублирует следующий элемент массива в преобразованном массиве.
// --double-prevдублирует предыдущий элемент массива в преобразованном массиве.
     }
  //  if (Number(arr[i])) 
  }
  // if(arr.length < 10) {
  // console.debug('вошло:',arr)
  // console.debug('вышло:', result)}
  return result

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
