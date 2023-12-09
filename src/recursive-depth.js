const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  result = [];

  calculateDepth( arr, level) {
    if (!level){
      this.result = [];
      level = 1;
  }
    arr.forEach(element => {
      if (Array.isArray(element)){
        this.calculateDepth(element, level+1);
      }
    });
    this.result.push(level)
    this.result.sort((a,b) => b - a)
    return this.result[0]
  }
}


module.exports = {
  DepthCalculator
};
