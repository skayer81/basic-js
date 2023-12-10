const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(revers){
    this.revers = revers
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
 // encrypt method accepts 2 parameters: message (string to encode) and key (string-keyword).


 encrypt(message, key) {
  if (!message || !key) throw new Error('Incorrect arguments!')
  message = message.toUpperCase();
  //key = key.toUpperCase()
  key = key.toUpperCase().repeat(Math.trunc(message.length/key.length + 1)).slice(0, message.length);
  let result = '';
  let count = 0;
  for (let i = 0; i < message.length; i++){
      let curentChar = message[i]
      let index = this.chars.indexOf(curentChar);
      if (index < 0) result += curentChar;
      else{
          index += this.chars.indexOf(key[count]);
          //console.log(index, index %  this.chars.length)
          index = index %  this.chars.length;
       //   console.log(index, this.chars[index],  message.indexOf(key[count]))
          result += this.chars[index];
          count++
      }
      // if (message[i].in)
      // let char = chars[]
  }
  return result
  //console.log('m:', message, 'key:',key, 'result:',result)
  //throw new NotImplementedError('Not implemented');
  //'AEIHQX SX DLLU!'
  // remove line with error and write your code here
}
 // decrypt method accepts 2 parameters: encryptedMessage (string to decode) and key (string-keyword).
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!')
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
