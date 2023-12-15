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
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink( value ) {
    this.arr.push(String(value))
    //console.debug(this.arr)
    return this
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink( position ) {
   // console.debug(position, this.arr, this.arr.length)
    if (!Number(position) || position < 1 || position > this.arr.length  ) {
   //   console.debug(position, 'ошибка')
      this.arr = []
      throw new Error("You can\'t remove incorrect link!")}
    this.arr.splice(position - 1, 1);
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arr.reverse()
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    this.result = `( ${this.arr.join(' )~~( ')} )`;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
   // console.debug(this.result)
   this.arr = [];
    return this.result;
  }
};

module.exports = {
  chainMaker
};

//console.log('test')
//console.debug(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0)) 
//console.debug(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd')) 
//console.debug(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2)) 
//console.debug(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)) 
//chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain()
//, '( 3rd )~~( function () { } )');
//chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()
// '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');