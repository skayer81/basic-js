const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: '',
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink( value ) {
    this.arr.push(String(value))
    return this
  },
  removeLink( position ) {
    if (!Number(position) || position < 1 || position > this.arr.length  ) {
      this.arr = []
      throw new Error("You can\'t remove incorrect link!")}
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse()
    return this;
  },
  finishChain() {
    this.result = `( ${this.arr.join(' )~~( ')} )`;
   this.arr = [];
    return this.result;
  }
};

module.exports = {
  chainMaker
};