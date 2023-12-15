const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let result = {}
  let arr = domains.map(elem => String(elem).split('.').reverse()).sort((a, b) => b.length - a.length)
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr[0].length; j++){
      if (arr[i][j] != undefined){
        let curentItem = arr[i].reduce((acc, elem, index) => index > j? acc : `${acc}.${elem}`, '' );
        if (result[curentItem]) result[curentItem] += 1
        else result[curentItem] = 1
      }
   //  let curentItem = arr[i].reduce((acc, elem, index) => index > j? acc : `${acc}.${elem}`, '' ) ;//.reduce((acc, elem, index) => {return асс + index}, 0 ) //> j? acc: acc)//  `.${elem}${acc}` , '')
      //if (!) 
    //  console.log(arr[i][j] ,curentItem)
    }

  console.log(result)
  return result
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

domains = [
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
   ]

getDNSStats(domains)

module.exports = {
  getDNSStats
};
