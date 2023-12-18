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
  constructor(notRevers = true){// = true){
    this.notRevers = notRevers;
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!')
    message = message.toUpperCase();
    key = key.toUpperCase().repeat(Math.trunc(message.length/key.length + 1)).slice(0, message.length);
    let result = '';
    let count = 0;
    for (let i = 0; i < message.length; i++){
      let curentChar = message[i]
      let index = this.chars.indexOf(curentChar);
      if (index < 0) result += curentChar;
      else{
          index += this.chars.indexOf(key[count]);
          index = index %  this.chars.length;
          result += this.chars[index];
          count++
      }
    }
    if (!this.notRevers) result = result.split('').reverse().join('');
    return result
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!')
    let message = encryptedMessage.toUpperCase();
    key = key.toUpperCase().repeat(Math.trunc(message.length/key.length + 1)).slice(0, message.length);
    let result = '';
    let count = 0;
    for (let i = 0; i < message.length; i++){
        let curentChar = message[i]
        let index = this.chars.indexOf(curentChar);
        if (index < 0) result += curentChar;
        else{
            index = index - this.chars.indexOf(key[count]) + this.chars.length;
            index = index %  this.chars.length;
            result += this.chars[index];
            count++
        }
    }
    if (!this.notRevers) result = result.split('').reverse().join('');
    return result
  }
}

module.exports = {
  VigenereCipheringMachine
};